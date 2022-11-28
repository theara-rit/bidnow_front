<template>
  <div><HomeComponentsSlideView /></div>
  <div class="mb-5">
    <div id="default-carousel" class="relative" data-carousel="static">
      <!-- Carousel wrapper -->
      <div class="relative w-full h-56 overflow-hidden md:h-96">
        <!-- Item 1 -->
        <div
          class="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0"
          data-carousel-item="pre"
        >
          <Swiper ref="swiper" v-if="img.length > 1">
            <Slide class="w-full" v-for="(value, index) in img" :key="index">
              <img class="w-full" :src="value.image" />
            </Slide>
          </Swiper>
        </div>

        <!-- Slider indicators -->
      </div>
      <div class="absolute flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button
          type="button"
          class="w-3 h-3 rounded-full bg-white dark:bg-gray-800"
          aria-current="true"
          aria-label="Slide 1"
          data-carousel-slide-to="0"
        ></button>
        <button
          type="button"
          class="w-3 h-3 rounded-full bg-white dark:bg-gray-800"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
      </div>
      <!-- Slider controls -->
      <button
        type="button"
        class="absolute top-0 left-0 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev="pre"
        @click="prevSlideClick"
      >
        <span
          class="inline-flex bg-hover items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 group-hover:bg-white/50 hover:bg-white group-focus:outline-none"
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5 text-black sm:w-6 sm:h-6 dark:text-gray-800"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
            />
          </svg>
          <span class="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        class="absolute top-0 right-0 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next="next"
        @click="nextSlideClick"
      >
        <span
          class="inline-flex bg-hover items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
            class="w-5 h-5 text-black sm:w-6 sm:h-6 dark:text-gray-800"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
            />
          </svg>

          <span class="sr-only">Next</span>
        </span>
      </button>
    </div>
  </div>
</template>

<script setup>
const { data: imgs } = await useFetch(
  "https://api.bidnowkh.com/api/v1/sliders"
);
// sliders
let img = imgs._rawValue.data.sliders;
</script>
<script>
import { Swiper, Slide } from "vue-swiper-component";
export default {
  data() {
    return {
      pages: 0,
      images: [
        {
          img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
        },
        {
          img: "https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567__340.jpg",
        },
        {
          img: "https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567__340.jpg",
        },
        {
          img: "https://qiniu.epipe.cn/5456575529551388672?imageslim&imageView2/1/w/750/h/360",
        },
        {
          img: "https://qiniu.epipe.cn/5430983074181545984?imageslim&imageView2/1/w/750/h/360",
        },
        {
          img: "https://qiniu.epipe.cn/5464226412548325376?imageslim&imageView2/1/w/750/h/360",
        },
        {
          img: "images/aeon.jpg",
        },
      ],
    };
  },

  components: {
    Swiper,
    Slide,
  },
  methods: {
    prevSlideClick() {
      this.$refs.swiper.prevSlide();
    },
    nextSlideClick() {
      this.$refs.swiper.nextSlide();
    },
  },
  computed: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media (max-width: 767px) {
  .top {
    position: relative;
    bottom: 200px;
    z-index: 1;
  }
  .icon-left {
    margin-left: 41px;
    padding: 10px;
  }
  .icon-right {
    margin-right: 41px;
    padding: 10px;
  }
  .hover-icon:hover {
    background: white;
    padding: 10px;
    border-radius: 40px;
    color: #2fbdff;
  }
}
@media (max-width: 500px) {
  .top {
    position: relative;
    bottom: 180px;
    z-index: 1;
  }
  .icon-left {
    margin-left: 41px;
    padding: 10px;
  }
  .icon-right {
    margin-right: 41px;
    padding: 10px;
  }
  .hover-icon:hover {
    background: white;
    padding: 10px;
    border-radius: 40px;
    color: #2fbdff;
  }
}
@media (min-width: 768px) {
  .top {
    position: relative;
    bottom: 220px;
    z-index: 1;
  }
  .icon-left {
    margin-left: 41px;
    padding: 10px;
  }
  .icon-right {
    margin-right: 41px;
    padding: 10px;
  }
  .hover-icon:hover {
    background: white;
    padding: 10px;
    border-radius: 40px;
    color: #2fbdff;
  }
}
.w {
  width: 1440px;
  height: 380px;
}
svg:hover {
  color: #2fbdff;
  border: none;
  transition: 0.5s;
  border-radius: 40px;
}
.bg-hover:hover {
  background: #ffffff;
}
</style>
