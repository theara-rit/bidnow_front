<template>
  <!-- ABOUT CONTAIN MEANING OF APP AND REASON TO CHOOSE OUR APP  -->
  <!-- DISPLAY ON FOLDER PAGES AND FILE index.vue  -->
  <div class="container mx-auto">
    <!-- TITLE OF BIDNOW -->
    <div class="text-xl font-bold text-center p-5 mb-8">About Bidnow</div>
    <!-- GROUP (What is BidNow? and Text) AND (Why Choose BidNow? and text) BY GRID -->
    <div
      class="top-page grid grid-cols-1 m-3 sm:grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-2"
      v-for="(value, index) in aboutUs"
      :key="index"
    >
      <!-- PART IMAGE OF (What is BidNow?) -->
      <div
        class="img"
        data-aos="fade-right"
        data-aos-duration="1500"
        v-if="value.category_id == 3"
      >
        <img class="" width="500" :src="value.images" />
      </div>
      <!-- PART TITLE AND TEXT  OF (What is BidNow?) -->
      <div
        v-if="value.category_id == 3"
        class="ml-8 text-center"
        data-aos="fade-left"
        data-aos-duration="1500"
      >
        <h3 class="text-lg font-semibold">{{ value.title }}</h3>
        <p class="mt-4 text-sm font-normal text-justify text-gray-600">
          {{ value.content }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
// Link API
const config = useRuntimeConfig();
const URL = config.API_BASE_URL;
const { data: datas } = await useFetch(URL+"posts");
let aboutUs = datas._rawValue;
</script>

<style scoped>
.width {
  width: 800px;
}
.container {
  width: 80%;
}
</style>
