import { once } from '../utilities/functions.js';

export const ModuleMixin = {
  mounted() {
    const revealAnimations = this.getReveals && this.getReveals();
    if (revealAnimations) {
      const doOnInViewport = new Map();

      revealAnimations.forEach(({targets, onInViewport}) => {
        const targetsArr = [].concat(targets); // can be multiple
        targetsArr.forEach((el) => {
          doOnInViewport.set(el, once((triggeredEl) => {
            if (onInViewport) onInViewport(triggeredEl);
          }));
        });
      })


      this.observer = new IntersectionObserver((targets) => {
        targets.forEach((triggeredEntry) => {
          if (triggeredEntry.isIntersecting) { // if coming in, not out
            const {target} = triggeredEntry;
            target.classList.add('is-seen');
            doOnInViewport.get(target)(target);
            this.observer.unobserve(target);
          }
        });
      }, {
        threshold: 0.25
      });

      doOnInViewport.forEach((callback, el) => this.observer.observe(el));

      this.$nextTick(() => {
        // check intersections on page load
        this.observer.takeRecords();
      });
    }
  },
  computed: {
    baseProps() {
      return {
        typeName: this.$props.typeName,
        background: this.$props.background,
        spacing: this.$props.spacing,
      };
    },
  },
};
