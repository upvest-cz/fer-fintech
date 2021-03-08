<template>
  <section class="module WhatWeDoModule">
    <div class="container">
      <Tagline>Co děláme?</Tagline>
      <div class="WhatWeDoModule__list">
        <template v-for="i in 1">
          <div ref="listItem" class="WhatWeDoModule__listItem">
            <h2 class="WhatWeDoModule__listItem__title">Férový check pro firmy</h2>
            <div class="richtext">
              <p><b>Zakládáte fintechový projekt? Spouštíte nový finanční produkt? Nebo už fungujete nějakou dobu, ale stojíte o to, aby se na férovost vašeho podnikání podívaly nezaujaté oči?</b> Zdarma vás nasměrujeme a propojíme s nezávislými opinion leadery, odborníky či neziskovými organizacemi. Sami jsme mnoha podobnými diskuzemi a konzultacemi prošli a rádi se s vámi podělíme o zkušenosti nebo doporučíme, na koho se ve které oblasti obrátit.</p>
            </div>
            <Button type="primary" href="mailto:info@ferfintech.cz">Chci férový check</Button>
          </div>
          <div ref="listItem" class="WhatWeDoModule__listItem">
            <h2 class="WhatWeDoModule__listItem__title">Poradenství pro lidi</h2>
            <div class="richtext">
              <p><b>Podepsali jste nevýhodnou smlouvu? Zatajil vám finanční poradce potřebné informace nebo špatně vysvětlil produkt? Zjistili jste, že vaše pojištění nebo třeba investice je vlastně k ničemu?</b> Ozvěte se nám. Propojíme Vás s prověřenými nezávislými odborníky a neziskovými organizacemi, které vám s řešením problémů pomůžou.</p>
            </div>
            <Button type="primary" href="mailto:info@ferfintech.cz">Potřebuji poradit</Button>
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
  name: 'WhatWeDoModule',
  mixins: [ModuleMixin],
  components: {
    Tagline
  },
  methods: {
    getReveals() {
      return [
        {
          targets: this.$refs.listItem,
          onInViewport: (el) => {
            const a = gsap.from(el.children, {
              y: 30,
              opacity: 0,
              stagger: 0.15
            })

            console.log(a);
          }
        }
      ];
    }
  }
};
</script>

<style scoped lang="scss">
.WhatWeDoModule {
  $root: &;

  padding: 160px 0;

  .Tagline{
    margin-bottom: spacer(5);
  }

  #{$root}__list {

    #{$root}__listItem {
      @include has-reveal;

      &:not(:last-child) {
        margin-bottom: spacer(10);
      }

      &__title {
        @include heading-4;
        text-transform: none;
        margin-bottom: spacer(2);
      }

      p {
        line-height: 1.6;
      }

      .Button {
        margin-top: spacer(4);
      }
    }
  }
}
</style>
