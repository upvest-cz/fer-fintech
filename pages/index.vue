<template>
  <div>
    <HeroModule />
    <DividerModule />
    <WhatWeDoModule />
    <DividerModule />
    <StatsModule />
    <DividerModule />
    <ManifestModule id="ferovy-manifest"/>
    <DividerModule />
    <FoundersModule />
  </div>
</template>

<script>
import HeroModule from '~/components/modules/HeroModule.vue';
import DividerModule from '~/components/modules/DividerModule.vue';
import StatsModule from '~/components/modules/StatsModule.vue';
import ManifestModule from '~/components/modules/ManifestModule.vue';
import FoundersModule from '~/components/modules/FoundersModule.vue';
import WhatWeDoModule from '~/components/modules/WhatWeDoModule.vue';

export default {
  components: { HeroModule, DividerModule, StatsModule, ManifestModule, FoundersModule, WhatWeDoModule },
  head() {
    return {
      title: 'Fér Fintech',
      description: 'Naším hlavním cílem je kultivovat trh a obory, ve kterých podnikáme. Co nejvíce zjednodušovat život svých klientů, poskytovat jim skvělé služby a pomáhat jim'
    };
  }
};
</script>
