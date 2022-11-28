<template>
  <div class="container mx-auto" v-if="popularCars.length != 0">
    <!-- LIST POPULAR CAR MODEL ON BIDDING CAR  -->
    <div class="flex mt-10 justify-between">
      <h1
        class="font-text font-bold flex justify-center md:justify-start text-2xl ml-3 uppercase text-gray-600 color"
      >
        POPULAR CAR MODEL ON BIDDING
      </h1>
    </div>
    <div class="flex justify-center">
      <div
        class="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-4"
      >
        <!-- loop on car -->
        <div
          v-for="(value, index) in popularCar"
          :key="index"
          class="rounded width m-h-64 m-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300 shadow-lg"
        >
          <span class="price relative top rounded-tl text-white"
            >Price: {{ value.price }} $</span
          >
          <NuxtLink :to="'/biddings/details/popular-' + value.id">
            <img
              class="w-full rounded-t"
              :src="'/images/' + value.img"
              alt="Sunset in the mountains "
          /></NuxtLink>
          <div class="bg-color">
            <div class="px-6 py-4">
              <div class="color-blue font-title mb-2 color">
                {{ value.title }}
              </div>
            </div>
            <div class="px-6 pt-4 pb-2 flex justify-between">
              <span
                class="inline-block bg-gray-200 rounded-full p-2 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >{{ value.date }}</span
              >
              <span
                class="inline-block font-title bg-gray-200 rounded-full p-2 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >{{ value.time }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
let popularCars = [];
</script>
<style scoped>
.top {
  top: 27px;
  padding: 4px;
}
.bg-color {
  background-color: rgba(198, 201, 192, 0.5);
}
.price {
  background-color: rgba(38, 164, 229, 0.75);
}
.width {
  width: 250px;
}
.height {
  height: 302px;
}
.color {
  color: #26a4e5;
}

.font-text {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  display: flex;
  align-items: center;

  color: #000000;
}
.font-title {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
}
.color-blue {
  color: rgba(32, 139, 203, 0.75);
}
.more {
  /* border: solid #0066ff 2px; */
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
  padding: 5px;
  cursor: pointer;
  font-size: 16px;
}
.more:hover {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
  color: #0066ff;
  transition: 1s;
  font-size: 16px;
}
.w {
  width: 284px;
  height: 190px;
}
</style>
