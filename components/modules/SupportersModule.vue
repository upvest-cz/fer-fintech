<template>
  <section class="module SupportersModule">
    <div class="container-large">
      <Tagline as="h2">Kdo nás podporuje?</Tagline>
      <div class="SupportersModule__items">
        <template v-for="i in 1">
          <div class="SupportersModule__item" ref="items">
            <div class="SupportersModule__image">
              <img src="~/assets/images/logos/fintree.png" alt="Fintree">
            </div>
          </div>
          <div class="SupportersModule__item" ref="items">
            <div class="SupportersModule__image">
              <img src="~/assets/images/logos/Rozbité prasátko.png" alt="Rozbité prasátko">
            </div>
          </div>
          <div class="SupportersModule__item" ref="items">
            <div class="SupportersModule__image">
              <img src="~/assets/images/logos/lucia.png" alt="Lucia Tothova">
            </div>
            <div class="SupportersModule__name">Lucia Tothova</div>
            <div class="SupportersModule__tag">@littlelucy_lu</div>
          </div>
          <div class="SupportersModule__item" ref="items">
            <div class="SupportersModule__image">
              <img src="~/assets/images/logos/sedlacek.png" alt="Lukáš Sedláček">
            </div>
            <div class="SupportersModule__name">Lukáš Sedláček</div>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script>
import gsap from 'gsap';
import { ModuleMixin } from '~/mixins/moduleMixin.js';
import Tagline from '@/components/Tagline.vue';
import AspectRatio from '@/components/AspectRatio.vue';

export default {
  name: 'SupportersModule',
  mixins: [ModuleMixin],
  components: {
    AspectRatio,
    Tagline
  },
  methods: {
    getReveals() {
      return [
        {
          targets: this.$refs.items,
          onInViewport: (el) => {
            gsap.from(el, {
              opacity: 0,
              y: 30
            });
          }
        }
      ];
    }
  }
};
</script>

<style scoped lang="scss">
.SupportersModule {
  padding: 120px 0;

  .Tagline {
    margin-bottom: spacer(5);
  }

  &__items {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;
    margin: -30px;
  }

  &__item {
    @include has-reveal;
    flex: 1;
    flex-basis: 100%;
    min-width: 0;
    text-align: center;
    padding: 30px;

    @include media-breakpoint-up(sm) {
      flex-basis: 50%;
    }

    @include media-breakpoint-up(lg) {
      flex-basis: 25%;
    }
  }

  &__name {
    @include heading-6;
  }

  &__image {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;

    img {
      max-height: 80px;
      max-width: min(100%, 245px);
      margin: 0 auto;
    }

    & + * {
      margin-top: spacer(2);
    }
  }
}
</style>
