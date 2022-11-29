<template>
  <div class="container mx-auto">
    <!-- CAR UPCOMMING -->
    <div class="flex justify-between">
      <h1 class="font-text font-bold text-xl uppercase mb-4 color">
        Upcomming Bidding
      </h1>
      <div class="more font-bold text-sm mb-4 mr-10 md:mr-20">
        <nuxt-link to="/biddings/upcomingcar">MORE</nuxt-link>
      </div>
    </div>
    <div class="flex justify-center">
      <div
        class=" grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-4"
      >
        <div v-for="(value, index) in upcomingCar" :key="index" class="  bg-color border-radius transform hover:translate-y-2 hover:shadow-xl transition duration-300"
        >
          <div>
            <NuxtLink :to="'/biddings/details/upcomming-' + value.id">
              <div class="w-full">
                <img class="w-full rounded-t object-cover border-top-img" :src="value.thumbnail"/>
                <span class="price absolute top  p-1  text-color-price font-normal text-sm">From: ${{startPrice(value.start_price)}}</span>
              </div>
            </NuxtLink>
          </div>
          <!-- FOOTER OF CARD -->
          <div class="footer py-2">
           <div class=" px-2 font-semibold text-lg color flex justify-between">{{ value.model }}</div>
            <div class="px-2 py-0 mt-2 text-sm font-semibold flex justify-between text-color">
              <div class="date flex">
                <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                      />
                    </svg>
                  </span>
                  <span class="inline-block rounded-full m-1">02-Nov-2022</span>
              </div>
              <div class="time flex">
                <span>
                    <svg
                      class="h-6 w-6 text-black"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <polyline points="12 8 12 12 14 14" />
                      <path d="M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5" />
                    </svg>
                  </span>
                <span class="inline-block rounded-full m-1">9:46 AM</span>
              </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { startPrice } from "~~/public/lib/price";
// API_PRODUCTION_URL
const config = useRuntimeConfig();
const URL_PRODUCTION = config.API_PRODUCTION_URL;
const { data: datas } = await useFetch(
  URL_PRODUCTION +
    "biddings/bidding_list?type=1&offset=0&limit=9&filter_by=future"
);
let upcomingCar = [];
for (let value of datas._rawValue.data) {
  if (upcomingCar.length < 4) {
    upcomingCar.push(value);
  }
}
//
// popular car
let popularCar = [];
//
const { data: completeds } = await useFetch(
  URL_PRODUCTION + "biddings/completed?type=1&offset=0&limit=9&filter_by=future"
);
const completedBiddingCar = [];
for (let value of completeds._rawValue.data) {
  if (completedBiddingCar.length < 4) {
    completedBiddingCar.push(value);
  }
}
</script>
<style scoped>
/* .top {
  top: 27px;
  padding: 4px;
} */
.top{
  top: 0.1px;
  border-top-left-radius: 7px;
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
.color {
  color: #26a4e5;
}
.text-color {
  color: rgba(16, 16, 16, 0.5);
}
.more:hover {
  color: #0066ff;
  transition: 1s;
}
.border-radius{
  border-radius: 7px;
}
.border-top-img{
  border-top-left-radius: 7px;
}
.text-color-price{
  color: rgba(255, 255, 255, 0.75);
}
</style>
