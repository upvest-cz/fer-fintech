<template>
  <div>
    <HeroModule />
    <DividerModule />
    <WhatWeDoModule />
    <DividerModule />
    <StatsModule />
    <DividerModule />
    <ManifestModule id="ferovy-manifest" />
    <DividerModule />
    <NewsModule />
    <DividerModule />
    <SupportersModule/>
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
import NewsModule from '~/components/modules/NewsModule.vue';
import SupportersModule from '~/components/modules/SupportersModule.vue';

export default {
  components: { HeroModule, DividerModule, StatsModule, ManifestModule, FoundersModule, WhatWeDoModule, NewsModule, SupportersModule },
  head() {
    const title = 'Fér Fintech';
    const description = 'Jsme skupina fintechových firem, které si zakládají na férovém a partnerském přístupu. Naším hlavním cílem je kultivovat trh a obory, ve kterých podnikáme.';
    return {
      title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: description,
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: description
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: title
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://ferfintech.cz'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: description
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: title
        }
      ],
    };
  }
};
</script>
