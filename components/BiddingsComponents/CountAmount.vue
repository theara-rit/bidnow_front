<template>
  <!-- Count amount of Bidding that it Completed, Upcomming and Acitive User  -->
  <!-- DISPLAY ON FOLDER PAGES AND FILE index.vue  -->
  <div class="container mx-auto flex justify-center mt-10">
    <div
      class="grid grid-cols-1 sm:grid-cols-1 gap-4 md:gap-20 md:grid-cols-2 lg:grid-cols-3"
    >
      <!-- PART OF COMPLETED BIDDING -->
      <div class="box-content box-wide flex items-center justify-center p-4">
        <div><img src="/images/completed-bidding.svg" alt="" /></div>
        <div class="m-5">
          <p class="font">{{ completedBidding }} +</p>
          <p class="font-text">Completed Biddings</p>
        </div>
      </div>
      <!-- PART OF UPCOMING BIDDING -->
      <div class="box-content flex items-center justify-center box-wide p-4">
        <div><img src="/images/upcoming-bidding.svg" alt="" /></div>
        <div class="m-5">
          <p class="font">{{ amountUpcomingCar }}+</p>
          <p class="font-text">Upcoming Biddings</p>
        </div>
      </div>
      <!-- PART OF ACTIVE USER -->
      <div class="box-content flex items-center justify-center box-wide p-4">
        <div><img src="/images/active-user.svg" alt="" /></div>
        <div class="m-5 text-font text-bold">
          <p class="font">500+</p>
          <p class="font-text">Active Users</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
const URL_PRODUCTION = config.API_PRODUCTION_URL;

const { data: datas } = await useFetch(
  URL_PRODUCTION + "biddings/bidding_list?type=1&offset=0&limit=9&filter_by=future"
);
let amountUpcomingCar = datas._rawValue.data.length;
const { data: completed } = await useFetch(
  URL_PRODUCTION + "biddings/completed?type=1&offset=0&limit=250&filter_by=future"
);
let completedBidding = completed._rawValue.data.length;
</script>

<style scoped>
.box-wide {
  width: 250px;
  height: 100px;
  margin: 5px;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  offset: 0px, 0px rgba(0, 0, 0, 0.25);
}
.font {
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 38px;
  color: #00d1ff;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.font-text {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #101010;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
