<template>
  <section class="module ManifestModule">
    <div class="container">
      <h2 class="ManifestModule__title h3">Férový manifest</h2>
      <div class="ManifestModule__grid">
        <template v-for="i in 1">
          <div ref="manifestNumber" class="ManifestModule__grid__number" style="color: #00FFA3">1.</div>
          <div ref="manifestText" class="ManifestModule__grid__text">
            Děláme byznys eticky a vyzýváme k tomu i ostatní.
          </div>
          <!-- -->
          <div ref="manifestNumber" class="ManifestModule__grid__number" style="color: #00ffab">2.</div>
          <div ref="manifestText" class="ManifestModule__grid__text">
            Kultivujeme prostředí, ve kterém podnikáme.
          </div>
          <!-- -->
          <div ref="manifestNumber" class="ManifestModule__grid__number" style="color: #00fcb7">3.</div>
          <div ref="manifestText" class="ManifestModule__grid__text">
            Sdílíme “best practice”, inspirujeme a necháváme se inspirovat. Sbíráme pro sebe i ostatní informace a zkušenosti od dalších firem.
          </div>
          <!-- -->
          <div ref="manifestNumber" class="ManifestModule__grid__number" style="color: #00f8c4">4.</div>
          <div ref="manifestText" class="ManifestModule__grid__text">
            Pomáháme zákazníkům a vedeme je k tomu, aby byli emancipovaní.
          </div>
          <!-- -->
          <div ref="manifestNumber" class="ManifestModule__grid__number" style="color: #00f5cf">5.</div>
          <div ref="manifestText" class="ManifestModule__grid__text">
            Zaměřujeme se na pomoc lidem s konkrétními problémy.
          </div>
          <!-- -->
          <div ref="manifestNumber" class="ManifestModule__grid__number" style="color: #00f1dd">6.</div>
          <div ref="manifestText" class="ManifestModule__grid__text">
            Odmítáme manipulativní a pro trh toxické vnucování služeb a produktů.
          </div>
          <!-- -->
          <div ref="manifestNumber" class="ManifestModule__grid__number" style="color: #00ece9">7.</div>
          <div ref="manifestText" class="ManifestModule__grid__text">
            Trváme na tom, že srozumitelný a nemanipulativní web či aplikace by měly být primárními komunikačními kanály mezi společností a zákazníkem.
          </div>
          <!-- -->
          <div ref="manifestNumber" class="ManifestModule__grid__number" style="color: #00e9f5">8.</div>
          <div ref="manifestText" class="ManifestModule__grid__text">
            Zasazujeme se o to, aby finanční produkty a služby byly maximálně transparentní a co nejjednodušší, a to včetně jazyka smluv.
          </div>
          <!-- -->
          <div ref="manifestNumber" class="ManifestModule__grid__number" style="color: #00e6ff">9.</div>
          <div ref="manifestText" class="ManifestModule__grid__text">
            Vytváříme jednoduché, srozumitelné produkty, které nepotřebují dodatečné vysvětlení či instrukce.
          </div>
          <!-- -->
          <div ref="manifestNumber" class="ManifestModule__grid__number" style="color: #00E0FF">10.</div>
          <div ref="manifestText" class="ManifestModule__grid__text">
            Zavazujeme se, že veškeré užitečné informace vždy zpřístupníme veřejnosti.
          </div>
        </template>
      </div>
      <div class="ManifestModule__collab">
        <Tagline>Férová spolupráce</Tagline>
        <div class="ManifestModule__collab__textContainer">
          <div class="h4">
            Chcete se k nám přidat a podílet se na férovém přístupu?
          </div>
          <FairBadge class="original" />
        </div>
        <Button type="primary" href="mailto:info@ferfintech.cz">Napište nám a zapojte se!</Button>
      </div>

    </div>
  </section>
</template>

<script>
import Tagline from '~/components/Tagline.vue';
import FairBadge from '~/assets/images/fair-badge.svg?inline';
import gsap from 'gsap';
import { ModuleMixin } from '~/mixins/moduleMixin.js';

export default {
  name: 'ManifestModule',
  mixins: [ModuleMixin],
  components: {
    Tagline,
    FairBadge
  },
  methods: {
    getReveals() {
      return [
        {
          targets: this.$refs.manifestNumber,
          onInViewport: (el) => {
            gsap.from(el, {
              opacity: 0,
              x: -30
            });
          }
        },
        {
          targets: this.$refs.manifestText,
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
      @include has-reveal;
      @include heading-2;
      grid-column: 1 / span 1;
      align-self: flex-end;

      @include media-breakpoint-up(lg) {
        @include heading-3;
        text-align: right;
      }
    }

    &__text {
      @include has-reveal;
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
