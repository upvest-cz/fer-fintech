<template>
  <section class="module StatsModule">
    <div class="container">
      <Tagline>Co byste měli vědět</Tagline>
      <div class="StatsModule__grid">
        <div class="StatsModule__grid__number" style="color: #00E0FF"><span class="h1">55</span> %</div>
        <div class="StatsModule__grid__text">
          lidí již někdy doplatilo na nevýhodný finanční produkt, jako je půjčka, investice nebo pojištění
          <hr style="border-color: #00E0FF" />
        </div>
        <!-- -->
        <div class="StatsModule__grid__number" style="color: #01F0D2"><span class="h1">63</span> %</div>
        <div class="StatsModule__grid__text">
          z nespokojených lidí si stěžovalo na nedostatečné a zatajené informace nebo špatně vysvětlený produkt
          <hr style="border-color: #01F0D2" />
        </div>
        <!-- -->
        <div class="StatsModule__grid__number" style="color: #01FFA4"><span class="h1">22</span> %</div>
        <div class="StatsModule__grid__text">
          22 % lidí si myslí, že finanční produkty by měly být srozumitelné samy od sebe
          <hr style="border-color: #01FFA4" />
        </div>
        <!-- -->
      </div>
    </div>
  </section>
</template>

<script>
import Tagline from '~/components/Tagline.vue';

export default {
  name: 'StatsModule',
  components: {
    Tagline
  }
};
</script>

<style scoped lang="scss">
.StatsModule {
  $root: &;

  padding: 160px 0;

  .Tagline {
    margin-bottom: spacer(3);
  }

  #{$root}__grid {
    @include heading-5;

    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: $grid-gutter-width;

    @include media-breakpoint-up(lg) {
      grid-template-columns: auto 1fr;
      margin-right: calc(-1 * #{map-get($container-paddings, 'lg')});
    }

    &__number {
      grid-column: 1 / span 1;
    }

    &__text {
      grid-column: 1 / span 1;
      padding-top: 15px;
      margin-bottom: 40px;

      @include media-breakpoint-up(lg) {
        grid-column: 2 / span 1;
      }

      hr {
        width: 100%;
        max-width: 180px;
        margin-top: 55px;
      }
    }
  }
}
</style>
