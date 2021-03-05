<template>
  <component
    :is="getTagName"
    v-bind="$props"
    class="Button"
    @click="handleClick"
  >
    <span>
      <slot />
    </span>
    <span class="Button__icon">
      <CaretDown class="icon-caret_down" />
    </span>
  </component>
</template>

<script>
import CaretDown from '~/assets/images/icons/caret_down.svg?inline';
import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin.js';

gsap.registerPlugin(ScrollToPlugin);

export default {
  name: 'Button',
  components: { CaretDown },
  props: {
    href: {
      type: String,
      default: null,
    },
    to: {
      type: [String, Object],
      default: null,
    },
    linkFieldObject: {
      type: Object,
      default: null,
    },
    target: {
      type: String,
      default: null,
    },
    rel: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      default: null,
    },
  },
  computed: {
    getTagName() {
      if (this.to) return 'nuxt-link';
      if (this.href) return 'a';
      if (this.role && this.role === 'button') return 'span';
      return 'button';
    },
    isScrollTo() {
      return this.href && this.href.startsWith('#');
    }
  },
  methods: {
    handleClick(e) {
      if (this.isScrollTo) {
        e.preventDefault();
        const href = e.currentTarget.getAttribute('href');
        window.history.replaceState(null, null, href);

        gsap.to(window, { duration: 0.6, scrollTo: { y: href }, ease: 'power2.easeOut' });
      }
    }
  }
};
</script>

<style scoped lang="scss">
.Button {
  $root: &;

  @include buttonText;

  display: inline-flex;
  align-items: center;
  padding: 16px 24px;
  border-radius: 99px;
  background: $primary;
  color: $black;
  text-transform: uppercase;

  #{$root}__icon {
    @include text-inverted;
    position: relative;
    z-index: 0;
    margin-left: 26px;

    &::before {
      $size: 40px;
      content: '';
      position: absolute;
      width: 40px;
      height: 40px;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: -1;
      background: $black;
      border-radius: 99px;
    }
  }

  &.Button--plain {
    background: transparent;
    color: $primary;

    #{$root}__icon {
      &::before {
        display: none;
      }
    }
  }
}
</style>
