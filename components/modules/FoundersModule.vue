<template>
  <section class="module FoundersModule">
    <div class="container">
      <h2 class="FoundersModule__title h3">Zakládající subjekty</h2>
      <div class="FoundersModule__text">
        <p>Zakládajícími subjekty jsou online životní pojištění Mutumutu, investiční crowdfunding Upvest a platforma na obchodování s cennými papíry Fondee.</p>
      </div>
      <ul class="FoundersModule__founders">
        <li>
          <blockquote>
            Lidé často nerozumějí podmínkám a smlouvám finančních institucí, a tím pádem je často už ani pořádně nečtou.
          </blockquote>
          <Author>
            <template v-slot:image>
              <img src="~/assets/images/founders/hlavsa.png" alt="Jan Hlavsa, Co-Founder Fondee">
            </template>
            <template v-slot:name>Jan Hlavsa</template>
            <template v-slot:position>Co-Founder Fondee</template>
          </Author>
        </li>
        <li>
          <blockquote>
            Lidé často nerozumějí podmínkám a smlouvám finančních institucí, a tím pádem je často už ani pořádně nečtou.
          </blockquote>
          <Author>
            <template v-slot:image>
              <img src="~/assets/images/founders/volny.png" alt="Petr Volný, CEO Upvest">
            </template>
            <template v-slot:name>Petr Volný</template>
            <template v-slot:position>CEO Upvest</template>
          </Author>
        </li>
        <li>
          <blockquote class="small">
            Náš cíl je, aby lidé opět mohli finančním produktům a službám věřit. Při tvorbě Mutumutu jsme museli zapomenout na vše, co dosud trh považoval za normu, a od nuly jsme vybudovali novou fér službu.
          </blockquote>
          <Author>
            <template v-slot:image>
              <img src="~/assets/images/founders/lenz.png" alt="Jindřich Lenz, CEO Mutumutu">
            </template>
            <template v-slot:name>Jindřich Lenz</template>
            <template v-slot:position>CEO Mutumutu</template>
          </Author>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import Author from '~/components/Author.vue';

export default {
  name: 'FoundersModule',
  components: {
    Author
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
    li {
      &:not(:last-child) {
        margin-bottom: spacer(10);
      }

      blockquote {
        @include heading-4;

        margin: 0 0 spacer(4);
        font-style: italic;
        padding-right: 10%;

        &.small {
          @include heading-5;
        }
      }
    }
  }
}
</style>
