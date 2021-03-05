<template>
  <section class="module ManifestModule">
    <div class="container">
      <h2 class="ManifestModule__title h3">Férový manifest</h2>
      <div class="ManifestModule__grid">
        <div class="ManifestModule__grid__number" style="color: #00FFA3">1.</div>
        <div class="ManifestModule__grid__text">
          Děláme byznys eticky a vyzýváme k tomu i ostatní
        </div>
        <!-- -->
        <div class="ManifestModule__grid__number" style="color: #00ffab">2.</div>
        <div class="ManifestModule__grid__text">
          Kultivujeme prostředí, ve kterém podnikáme
        </div>
        <!-- -->
        <div class="ManifestModule__grid__number" style="color: #00fcb7">3.</div>
        <div class="ManifestModule__grid__text">
          Sdílíme best practice, inspirujeme a necháváme se inspirovat. Hledáme pro sebe i ostatní informace a inspiraci od dalších firem
        </div>
        <!-- -->
        <div class="ManifestModule__grid__number" style="color: #00f8c4">4.</div>
        <div class="ManifestModule__grid__text">
          Pomáháme zákazníkům a vedeme je k tomu, aby byli emancipovaní
        </div>
        <!-- -->
        <div class="ManifestModule__grid__number" style="color: #00f5cf">5.</div>
        <div class="ManifestModule__grid__text">
          Zaměřujeme se na pomoc lidem s konkrétními problémy
        </div>
        <!-- -->
        <div class="ManifestModule__grid__number" style="color: #00f1dd">6.</div>
        <div class="ManifestModule__grid__text">
          Odmítáme manipulativní a pro trh toxické vnucování služeb a produktů
        </div>
        <!-- -->
        <div class="ManifestModule__grid__number" style="color: #00ece9">7.</div>
        <div class="ManifestModule__grid__text">
          Trváme na tom, že srozumitelný a nemanipulativní web či aplikace by měly být primárními komunikačními kanály mezi společností a zákazníkem
        </div>
        <!-- -->
        <div class="ManifestModule__grid__number" style="color: #00e9f5">8.</div>
        <div class="ManifestModule__grid__text">
          Věříme, že produkty a služby mají být transparentní a co nejjednodušší, a to včetně jazyka smluv
        </div>
        <!-- -->
        <div class="ManifestModule__grid__number" style="color: #00e6ff">9.</div>
        <div class="ManifestModule__grid__text">
          Designujeme jednoduché a srozumitelné produkty, jež nepotřebují dodatečné vysvětlení či instrukce
        </div>
        <!-- -->
        <div class="ManifestModule__grid__number" style="color: #00E0FF">10.</div>
        <div class="ManifestModule__grid__text">
          Zavazujeme se, že veškeré užitečné informace budou vždy volně přístupné veřejnosti
        </div>
        <!-- -->
      </div>
      <div class="ManifestModule__collab">
        <Tagline>Férová spolupráce</Tagline>
        <div class="ManifestModule__collab__textContainer">
          <div class="h4">
            Chcete se s námi podílet
            na férovém přístupu?
          </div>
          <FairBadge class="original"/>
        </div>
        <Button>Kontaktujte nás a zapojte se!</Button>
      </div>

    </div>
  </section>
</template>

<script>
import Tagline from '~/components/Tagline.vue';
import FairBadge from '~/assets/images/fair-badge.svg?inline';

export default {
  name: 'ManifestModule',
  components: {
    Tagline,
    FairBadge
  }
};
</script>

<style scoped lang="scss">
.ManifestModule {
  $root: &;

  padding: 160px 0;

  #{$root}__title {
    margin-bottom: spacer(3);
  }

  #{$root}__grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: $grid-gutter-width;
    grid-row-gap: 7px;
    margin-bottom: 120px;

    @include media-breakpoint-up(lg) {
      grid-template-columns: auto 1fr;
    }

    &__number {
      @include heading-3;
      grid-column: 1 / span 1;
      align-self: flex-end;

      @include media-breakpoint-up(lg) {
        text-align: right;
      }
    }

    &__text {
      @include text-muted;

      align-self: flex-end;
      margin-bottom: (9em/20);
      grid-column: 1 / span 1;

      @include media-breakpoint-up(lg) {
        grid-column: 2 / span 1;
      }
    }
  }

  #{$root}__collab {
    @include media-breakpoint-up(lg) {
      padding-right: 20%;
    }

    .Tagline {
      margin-bottom: spacer(3);
    }

    &__textContainer {
      display: flex;
      margin-bottom: spacer(5);

      svg {
        max-width: 88px;
        margin-left: spacer(4);

        @include media-breakpoint-down(md) {
          display: none;
        }
      }
    }
  }
}
</style>
