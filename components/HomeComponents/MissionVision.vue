<template>
  <!-- GROUP MISSION AND VISSION -->
  <!-- DISPLAY ON FOLDER PAGES AND FILE index.vue  -->
  <div class="container mx-auto relative bottom-80">
    <div class="" v-for="(value, index) in mission" :key="index">
      <!-- PART MISSION -->
      <div
        id="mission"
        class="flex justify-between flex-wrap"
        v-if="value.category_id === 2 && value.title === 'Our Mission'"
      >
        <div
          class="card flex m-5"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div>
            <!-- title -->
            <div class="text-xl text-bold flex justify-center">
              {{ value.title }}
            </div>
            <!-- text -->
            <div class="text-sm font-normal text-gray-600 text-justify w-96">
              {{ value.content }}
            </div>
          </div>
        </div>
        <!-- image -->
        <div class="img flex m-5" data-aos="fade-left" data-aos-duration="1000">
          <img class="w-h" :src="'/images/' + value.images" alt="" />
        </div>
      </div>
      <!-- PART VISSION  -->
      <div
        id="mission "
        v-if="value.category_id === 2 && value.title === 'OUR VISSION'"
        class="flex justify-between flex-wrap"
      >
        <!-- image -->
        <div class="img m-4" data-aos="fade-right" data-aos-duration="1000">
          <img class="w-h" :src="'/images/' + value.images" alt="" />
        </div>
        <div
          class="card flex ml-7 justify-start"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <div class="m-4">
            <!-- title -->
            <div class="text-xl text-bold text-center">{{ value.title }}</div>
            <!-- text -->
            <div class="text-sm font-normal text-gray-600 text-justify w-96">
              {{ value.content }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
   
</template>

<script setup>
// Link API
const config = useRuntimeConfig();
const URL = config.API_BASE_URL;
const { data: datas } = await useFetch(URL+"posts");
let mission = datas._rawValue;
</script>

<style scoped>
.container {
  width: 80%;
}
.w-h {
  width: 500px;
  height: 250px;
}
</style>
