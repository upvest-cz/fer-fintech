<template>
  <section class="module StatsModule">
    <div class="container-large">
      <Tagline as="h2">Co byste měli vědět</Tagline>
      <div class="StatsModule__grid">
        <template v-for="i in 1">
          <div ref="statNumber" class="StatsModule__grid__number" style="color: #00E0FF"><span class="h1">55</span> %</div>
          <div ref="statText" class="StatsModule__grid__text">
            lidí v Česku již někdy doplatilo na nevýhodný finanční produkt, jako je půjčka, investice nebo pojištění
            <hr style="border-color: #00E0FF" />
          </div>
          <!-- -->
          <div ref="statNumber" class="StatsModule__grid__number" style="color: #01F0D2"><span class="h1">63</span> %</div>
          <div ref="statText" class="StatsModule__grid__text">
            z nespokojených lidí si stěžovalo na nedostatečné a zatajené informace nebo špatně vysvětlený produkt
            <hr style="border-color: #01F0D2" />
          </div>
          <!-- -->
          <div ref="statNumber" class="StatsModule__grid__number" style="color: #01FFA4"><span class="h1">22</span> %</div>
          <div ref="statText" class="StatsModule__grid__text">
            Čechů si myslí, že finanční produkty by měly být srozumitelné samy o sobě
            <hr style="border-color: #01FFA4" />
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script>
import Tagline from '~/components/Tagline.vue';
import { ModuleMixin } from '~/mixins/moduleMixin.js';
import gsap from 'gsap';

export default {
  name: 'StatsModule',
  mixins: [ModuleMixin],
  components: {
    Tagline
  },
  methods: {
    getReveals() {
      return [
        {
          targets: this.$refs.statNumber,
          onInViewport: (el) => {
            const numberSpan = el.querySelector('.h1');
            const numberFrom = Math.round(Math.max(gsap.getProperty(numberSpan, 'innerText') * 0.75, 0)); // count up from 3/4 of the value
            gsap.set(numberSpan, {width: numberSpan.offsetWidth});
            gsap
              .from(numberSpan, {
                duration: 0.3,
                ease: 'none',
                innerText: numberFrom,
                roundProps: 'innerText',
                onUpdate: function () {
                  this.targets().forEach(target => {
                    const val = gsap.getProperty(target, 'innerText');
                    target.innerText = val;
                  });
                },
              })
            .then(() => {
              gsap.set(numberSpan, {clearProps: 'all'});
            });
          }
        },
        {
          targets: this.$refs.statText,
          onInViewport: (el) => {
            gsap.from(el, {
              opacity: 0,
              x: 30
            });
          }
        }
      ];
    }
  }
};
</script>

<style scoped lang="scss">
.StatsModule {
  $root: &;

  padding: 160px 0;

  .Tagline,
  #{$root}__title {
    margin-bottom: spacer(3);
  }

  #{$root}__grid {
    @include heading-5;

    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: $grid-gutter-width;

    @include media-breakpoint-up(lg) {
      @include heading-6;
      grid-column-gap: 70px;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: auto auto;
    }

    &__number {
      @include has-reveal;
      grid-column: 1 / span 1;

      @include media-breakpoint-up(lg) {
        grid-column: auto / span 1;
        grid-row: 1;
      }

      span {
        display: inline-block;
      }
    }

    &__text {
      @include has-reveal;
      grid-column: 1 / span 1;
      padding-top: 15px;
      margin-bottom: 40px;
      display: flex;
      flex-flow: column nowrap;

      @include media-breakpoint-up(lg) {
        padding-top: 0;
        grid-column: auto / span 1;
        grid-row: 2;
      }

      hr {
        width: 100%;
        max-width: 180px;
        margin-top: 55px;
        @include media-breakpoint-up(lg) {
          margin-top: 0;
          margin-bottom: 24px;
          order: -1
        }
      }
    }
  }
}
</style>
