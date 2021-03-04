<template>
  <section class="module HeroModule">
    <div class="container">
      <Tagline>Jsme skupina fintechových firem</Tagline>
      <h1 class="HeroModule__title h2">Fér fintech</h1>
      <div class="HeroModule__text">
        <p>... které si zakládají především na férovém a partnerském přístupu. Naším hlavním cílem je kultivovat trh a obory, ve kterých podnikáme. Co nejvíce zjednodušovat život svých klientů, poskytovat jim skvělé služby a pomáhat jim. </p>
      </div>
      <Button href="#ferovy-manifest">
        Férový manifest
      </Button>
    </div>
  </section>
</template>

<script>
import Tagline from '~/components/Tagline.vue';
import Button from '~/components/Button.vue';

export default {
  name: 'HeroModule',
  components: {
    Tagline, Button
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
    margin-bottom: spacer(2);
  }

  #{$root}__text {
    @include richtext;
    @include text-muted;

    margin-bottom: spacer(4);
  }

}
</style>
