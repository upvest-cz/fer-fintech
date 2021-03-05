<template>
  <div id="__layout_content">
    <main>
      <Nuxt />
    </main>
    <Footer />
  </div>

</template>

<script>
import Footer from '~/components/single/Footer.vue';

export default {
  components: {
    Footer
  },
  head() {
    return {
      htmlAttrs: {
        xmlns: 'http://www.w3.org/1999/xhtml',
        'xmlns:og': 'http://ogp.me/ns#',
        'xmlns:fb': 'https://www.facebook.com/2008/fbml',
      },
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'Fér Fintech',
      // all titles will be injected into this template
      titleTemplate: '%s',
    };
  }
};
</script>
