<template>
  <section class="module FoundersModule">
    <div class="container-large">
      <h2 class="FoundersModule__title h3">Zakládající subjekty</h2>
      <div class="FoundersModule__text">
        <p>Zakládajícími subjekty uskupení Fér Fintech jsou online životní pojištění Mutumutu, investiční crowdfundingová platforma Upvest a investiční platforma Fondee.</p>
      </div>
      <ul class="FoundersModule__founders">
        <template v-for="i in 1">
          <li ref="foundersItem">
            <blockquote class="small">
              Zbavme se zavádějících sousloví typu „pohádkové zhodnocení“, „chytrá investice“ nebo „nadstandardní výnos“. Přestaňme tímto toxickým marketingem vzbuzovat falešná očekávání, která pak nemůžeme naplnit. Z transparentnějšího a kulturnějšího prostředí budeme profitovat všichni.
            </blockquote>
            <Author>
              <template v-slot:image>
                <img src="~/assets/images/founders/volny.png" alt="Petr Volný, CEO Upvest">
              </template>
              <template v-slot:name>Petr Volný</template>
              <template v-slot:position><a href="https://upvest.cz">Spoluzakladatel a CTO Upvestu</a></template>
            </Author>
          </li>
          <li ref="foundersItem">
            <blockquote class="small">
              Náš cíl je, aby lidé opět mohli finančním produktům a službám věřit. Při tvorbě Mutumutu jsme museli zapomenout na vše, co dosud trh považoval za normu, a od nuly jsme vybudovali novou fér službu. Teď chceme svoje know-how předávat dál, abychom firmám pomohli tvořit etické, srozumitelné produkty a zákazníkům dali lepší kontrolu nad tím, co se děje s jejich financemi.
            </blockquote>
            <Author>
              <template v-slot:image>
                <img src="~/assets/images/founders/lenz.png" alt="Jindřich Lenz, CEO Mutumutu">
              </template>
              <template v-slot:name>Jindřich Lenz</template>
              <template v-slot:position><a href="https://www.mutumutu.cz/">CEO Mutumutu</a></template>
            </Author>
          </li>
          <li ref="foundersItem">
            <blockquote class="small">
              Dobře víme, že na investice nemusí dohlížet banky ani finanční poradci, kteří si účtují vysoké marže a poplatky. Chceme Čechy naučit, že své úspory mohou zhodnotit jednoduše, levně, transparentně a bezstarostně. Když se naučíme spořit sebevědomě, budeme jako společnost bohatší v pravém i přeneseném významu slova.
            </blockquote>
            <Author>
              <template v-slot:image>
                <img src="~/assets/images/founders/hlavsa.png" alt="Jan Hlavsa, Co-Founder Fondee">
              </template>
              <template v-slot:name>Jan Hlavsa</template>
              <template v-slot:position><a href="https://www.fondee.cz/">CEO Fondee</a></template>
            </Author>
          </li>
        </template>
      </ul>
    </div>
  </section>
</template>

<script>
import Author from '~/components/Author.vue';
import { ModuleMixin } from '~/mixins/moduleMixin.js';
import gsap from 'gsap';
import { splitIntoWords } from '~/utilities/element.js';

export default {
  name: 'FoundersModule',
  mixins: [ModuleMixin],
  components: {
    Author
  },
  methods: {
    getReveals() {
      return [
        {
          targets: this.$refs.foundersItem,
          onInViewport: (el) => {
            const dom = {
              blockquote: el.querySelector('blockquote'),
              image: el.querySelector('.Author__image'),
              name: el.querySelector('.Author__name'),
              position: el.querySelector('.Author__position'),
            }

            const tl = gsap.timeline();

            const targets = splitIntoWords(dom.blockquote);
            const duration = 1.3;
            const stagger = 0.05; // 10%;
            const durationPerEl = Math.max(0.36, duration / (1 + (targets.length - 1) * stagger)); // cap to min 0.36 duration
            const staggerPerEl = durationPerEl * stagger;

            targets.forEach((target, i) => {
              const parent = target.parentElement;
              const wordTl = gsap.timeline();

              wordTl.from(target, {
                yPercent: 100,
                duration: durationPerEl,
                ease: "power4.out",
                delay: staggerPerEl * i
              });

              wordTl.to(parent,{
                duration: 0.5,
                ease: "power4.in",
                clipPath: 'inset(-15% -15% -15% -15%)',
                onStart:() => parent.classList.add('safari-animation-hack'),
                onComplete: () => parent.classList.remove('safari-animation-hack'),
              } ,`-=${durationPerEl * 0.6}`); // start at 40% of previous
            });

            tl.from(dom.image, {
              opacity: 0,
              x: -30,
            }, 0.3)

            tl.from([dom.name, dom.position], {
              opacity: 0,
              x: 30,
              stagger: 0.2,
            }, 0.6)
          }
        }
      ];
    }
  }
};
</script>

<style scoped lang="scss">
.FoundersModule {
  padding: 160px 0;


  &__title {
    margin-bottom: spacer(3);
  }

  &__text {
    @include richtext;
    @include text-muted;

    margin-bottom: spacer(10);
  }

  &__founders {
    @include media-breakpoint-up(lg) {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      margin: 0 -30px;
    }

    li {
      @include has-reveal;
      flex: 1;
      min-width: 0;

      @include media-breakpoint-up(lg) {
        padding: 0 30px;
      }

      &:not(:last-child) {
        margin-bottom: spacer(10);
      }

      blockquote {
        @include heading-4;

        margin: 0 0 spacer(4);
        font-style: italic;

        &.small {
          @include heading-6;
        }
      }
    }
  }
}
</style>
