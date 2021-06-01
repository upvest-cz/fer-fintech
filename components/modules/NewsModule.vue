<template>
  <section class="module NewsModule">
    <div class="container-large">
      <Tagline as="h2">Napsali o nás</Tagline>
      <div class="NewsModule__items">
        <div class="swiper-container" ref="swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="article in articles">
              <a :href="article.href" target="_blank" rel="nofollow" class="NewsModule__item">
                <article>
                  <AspectRatio :aspect-ratio="277/159">
                    <img class="NewsModule__item__image" :src="article.image" alt="Forbes.cz">
                  </AspectRatio>
                  <h3 class="NewsModule__item__title">{{article.title}}</h3>
                  <address class="NewsModule__item__author" rel="author">{{article.author}}</address>
                </article>
              </a>
            </div>
          </div>
        </div>
        <div class="swiper-pagination" ref="pagination"></div>
        <div class="swiper-button-next" ref="nextEl"></div>
        <div class="swiper-button-prev swiper-button-disabled" ref="prevEl"></div>
      </div>
    </div>
  </section>
</template>

<script>
import Swiper from 'swiper';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
import { ModuleMixin } from '~/mixins/moduleMixin.js';
import forbesImage from '~/assets/images/news/forbes.jpg'
import cowboysImage from '~/assets/images/news/fintechcowboys.jpg'
import penizeImage from '~/assets/images/news/penize.jpeg'
import feeditImage from '~/assets/images/news/feedit.jpeg'
import seznamImage from '~/assets/images/news/seznamzpravy.jpg'
import Tagline from '@/components/Tagline.vue';
import AspectRatio from '@/components/AspectRatio.vue';

SwiperCore.use([Navigation, Pagination]);

export default {
  name: 'FoundersModule',
  mixins: [ModuleMixin],
  components: {
    AspectRatio,
    Tagline
  },
  data() {
    return {
      articles: [
        {
          href: "https://forbes.cz/konec-zdimani-klientu-ceske-fintechy-spojily-sily-aby-ozdravily-investicni-trh/",
          image: forbesImage,
          title: 'Konec ždímání klientů. České fintechy spojily síly, aby ozdravily finanční trh',
          author: 'Forbes.cz'
        },
        {
          href: "https://www.seznamzpravy.cz/clanek/cesi-s-penezi-neumi-polovina-nema-rezervy-nebo-se-zadluzila-rika-pruzkum-151807",
          image: seznamImage,
          title: 'Češi s penězi neumí. Polovina nemá rezervy nebo se zadlužila, říká průzkum',
          author: 'SeznamZprávy.cz'
        },
        {
          href: "https://fintechcowboys.cz/fer-fintech/",
          image: cowboysImage,
          title: 'Fér Fintech aneb pomáhat a chránit ve fintechu',
          author: 'FinTech Cowboys'
        },
        {
          href: "https://www.penize.cz/investice/426083-dvakrat-mer-jednou-investuj",
          image: penizeImage,
          title: 'Dvakrát měř, jednou investuj',
          author: 'Peníze.cz'
        },
        {
          href: "https://feedit.cz/2021/03/10/mutumutu-upvest-a-fondee-jdou-prikladem-trhu-s-financnimi-sluzbami-a-zakladaji-fer-fintech/",
          image: feeditImage,
          title: 'Mutumutu, Upvest a Fondee jdou příkladem trhu s finančními službami a zakládají Fér Fintech',
          author: 'FeedIT.cz'
        },
      ]
    }
  },
  mounted() {
    new Swiper(this.$refs.swiper, {
      slidesPerView: 1,
      spaceBetween: 24,
      watchOverflow: true,
      navigation: {
        nextEl: this.$refs.nextEl,
        prevEl: this.$refs.prevEl,
      },
      pagination: {
        el: this.$refs.pagination,
        clickable: true,
      },
      breakpoints: {
        // when window width is >= 576px
        576: {
          slidesPerView: 2,
          spaceBetween: 24
        },
        // when window width is >= 992px
        992: {
          slidesPerView: 3,
          spaceBetween: 55
        }
      }
    });
  },
  methods: {
    getReveals() {
      return [];
    }
  }
};
</script>

<style scoped lang="scss">
.NewsModule {
  padding: 120px 0;

  .Tagline {
    margin-bottom: spacer(5);
  }

  &__items {
    padding-bottom: 56px;
    padding-bottom: calc(#{spacer(5)} + 16px); // 40px + 16px pagination height
    position: relative;
  }

  &__item {
    display: block;

    &__image {
      border-radius: 16px;
      overflow: hidden;
      display: block;
      vertical-align: top;
      object-fit: cover;
    }

    &__title {
      @include heading-6;
      text-transform: initial;
      margin-top: spacer(2);
    }

    &__author {
      font-style: normal;
    }
  }

  .swiper-button-prev,
  .swiper-button-next {
    top: 0;
    margin-top: #{159/277/2 * 100%};

    @include media-breakpoint-up(sm) {
      margin-top: calc(159 / 277 * calc(calc(100% - 24px) / 4));
    }

    @include media-breakpoint-up(lg) {
      margin-top: calc(159 / 277 * calc(calc(100% - 110px) / 6));
    }
  }
}
</style>
