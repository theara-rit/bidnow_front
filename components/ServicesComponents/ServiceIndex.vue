<template>
  <!-- GROUP SERVICE AND BIDDING -->
  <div
    class="container mx-auto font-sans font-weight-text font-size-text font-family-text font-color-text-black"
  >
    <div
      class="m-auto grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-2"
      v-for="(value, index) in services"
      :key="index"
    >
      <div id="slider-1" class="" v-if="value.category_id == 4">
        <div class="">
          <div>
            <img class="mt-4 object-cover" :src="value.images" alt="" />
          </div>
          <p class="text-lg font-bold relative bottom-36 left-16 text-white">
            HOW TO JOIN THE BIDDING
          </p>
        </div>
        <!-- container -->
        <br />
      </div>
      <!-- text service -->
      <div class="text-justify" v-if="value.category_id == 4">
        <p class="font-bold text-xl uppercase text-center">{{ value.title }}</p>
        <p
          class="md:text-justify text-sm font-normal text-gray-600 text-justify"
        >
          {{ value.content }}
        </p>
      </div>
    </div>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 gap-1 md:grid-cols-2 lg:grid-cols-2"
      v-for="(value, index) in services"
      :key="index"
    >
      <div class="" v-if="value.category_id == 5">
        <p class="font-bold text-xl uppercase text-center">{{ value.title }}</p>
        <p
          class="md:text-justify text-sm font-normal text-gray-600 text-justify"
        >
          {{ value.content }}
        </p>
      </div>

      <div id="slider-2 " class="" v-if="value.category_id == 5">
        <div class="">
          <div class="height">
            <div>
              <img
                class="font-color-blue object-cover"
                :src="value.images"
                alt=""
              />
            </div>
            <p class="text-lg font-bold relative bottom-36 left-16 text-white">
              BUY AND SELL CAR VIA BIDNOW APP
            </p>
          </div>
        </div>
        <br />
      </div>
    </div>
  </div>
</template>
<script setup>
// Link API
const config = useRuntimeConfig();
const URL = config.API_BASE_URL;
const { data: datas } = await useFetch(URL + "posts");
let services = datas._rawValue;
</script>

<style scoped>
.width {
  width: 588px;
}
.height {
  height: 335px;
}
.container {
  width: 80%;
}
img {
  height: 40vh;
  width: 100%;
}
</style>
