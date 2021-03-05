<template>
  <section class="module HeroModule">
    <div class="container">
      <Tagline>Jsme skupina fintechových firem</Tagline>
      <h1 ref="title" class="HeroModule__title h2">Fér fintech</h1>
      <div ref="text" class="HeroModule__text">
        <p>... které si zakládají především na férovém a partnerském přístupu. Naším hlavním cílem je kultivovat trh a obory, ve kterých podnikáme. Co nejvíce zjednodušovat život svých klientů, poskytovat jim skvělé služby a pomáhat jim. </p>
      </div>
      <Button ref="button" href="#ferovy-manifest" class="Button--plain">
        přečtěte si Férový manifest
      </Button>
    </div>
  </section>
</template>

<script>
import Tagline from '~/components/Tagline.vue';
import Button from '~/components/Button.vue';
import { ModuleMixin } from '~/mixins/moduleMixin.js';
import gsap from 'gsap';

export default {
  name: 'HeroModule',
  mixins: [ModuleMixin],
  components: {
    Tagline, Button
  },
  methods: {
    getReveals() {
      const tl = gsap.timeline();
      return [
        {
          targets: [this.$refs.title, this.$refs.text, this.$refs.button.$el],
          onInViewport: (el) => {
            tl.from(el, {
              y: 30,
              opacity: 0
            }, '-=0.35');
          }
        }
      ];
    }
  }
};
</script>

<style scoped lang="scss">
.HeroModule {
  $root: &;

  padding: 140px 0 160px;

  .Tagline {
    margin-bottom: spacer(2);
  }

  #{$root}__title {
    @include has-reveal;
    margin-bottom: spacer(2);
  }

  #{$root}__text {
    @include has-reveal;
    @include richtext;
    @include text-muted;

    margin-bottom: spacer(4);
  }

  .Button {
    @include has-reveal;

  }

}
</style>
