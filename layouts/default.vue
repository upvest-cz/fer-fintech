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

const ogImage = 'https://ferfintech.cz/ogimage.jpg';
// if no subcomponents specify a metaInfo.title, this title will be used
const title = 'Fér Fintech';
// all titles will be injected into this template
const titleTemplate = '%s | Férový a partnerský přístup v podnikání';

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

      title,
      titleTemplate,

      meta: [
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: title,
          template: titleTemplate
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: title,
          template: titleTemplate
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: ogImage
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: ogImage
        },
      ]
    };
  }
};
</script>
