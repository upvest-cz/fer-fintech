<template>
  <div>
    <HeroModule />
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

export default {
  components: { HeroModule, DividerModule, StatsModule, ManifestModule, FoundersModule }
};
</script>
