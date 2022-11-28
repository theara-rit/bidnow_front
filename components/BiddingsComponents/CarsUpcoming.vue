<template>
  <div class="container mx-auto">
    <div class="flex justify-between">
      <h1
        class="font-text flex justify-center md:justify-start font-bold text-2xl ml-3 uppercase text-gray-600 color"
      >
        Upcomming Bidding
      </h1>
    </div>
    <div class="flex justify-center">
      <div
        class="listOfCarUpComming mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-4"
      >
      <BiddingsComponentsCardOfCar v-for="(value,index) in cars" :key="index">
        <template #price>
         From: {{value.start_price}}$
        </template>
        <template #cardDetail >
          <NuxtLink :to="'/biddings/details/upcomming-' + value.id">
            <img
              width="200"
              height="20"
              class="w rounded-t object-cover"
              :src="value.thumbnail"
              alt="Sunset in the mountains "
            />
          </NuxtLink>
        </template>
        <template #model>
          {{value.model}}
        </template>
        <template #date>
          11-Nov-2022
        </template>
        <template #time>
          3:35PM
        </template>
      </BiddingsComponentsCardOfCar>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      upCommingCar: [
        {
          img: "car.webp",
          title: "",
          price: " 80000",
          date: "28-Oct-2022",
          time: "2:19 PM",
        },
        {
          img: "car.webp",
          title: "TOYOTA HIGH LANDER 2002 Silver",
          price: " 80000",
          date: "28-Oct-2022",
          time: "2:19 PM",
        },
        {
          img: "car.webp",
          title: "TOYOTA HIGH LANDER 2002 Silver",
          price: " 80000",
          date: "28-Oct-2022",
          time: "2:19 PM",
        },
        {
          img: "car.webp",
          title: "TOYOTA HIGH LANDER 2002 Silver",
          price: " 80000",
          date: "28-Oct-2022",
          time: "2:19 PM",
        },
      ],
    };
  },
};
</script>
<script setup>
import { ref } from "vue";
// API_PRODUCTION_URL
const config = useRuntimeConfig();
const URL_PRODUCTION = config.API_PRODUCTION_URL;
const { data: totalCar } = await useFetch(
  URL_PRODUCTION +
    "biddings/bidding_list?type=1&offset=0&limit=9&filter_by=future"
);
let datas = ref(totalCar);
let cars = datas._rawValue.data;
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
.w {
  width: 284px;
  height: 190px;
}
</style>
