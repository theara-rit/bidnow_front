<template>
  <div class="container mx-auto">
    <!-- LIST SUCCESSFUL BIDDING CARS -->
    <div class="flex mt-10 justify-between">
      <h1
        class="font-text font-bold text-2xl flex justify-center md:justify-start ml-3 uppercase text-gray-600 color"
      >
        SUCCESSFUL BIDDING
      </h1>
    </div>
    <div class="flex justify-center">
      <div
        class="listOfCarUpComming mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-4"
      >
        <div v-for="(value, index) in completedBidding.data" :key="index">
          <div
            class="rounded bg-color width m-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300 shadow-lg"
          >
            <span class="price bg-color relative z-20 top rounded-tl text-white"
              >Price: {{ value.start_price }} $</span
            >
            <div class="relative bottom-5">
              <NuxtLink :to="'/biddings/details/popular-' + value.id">
                <img
                  v-if="value.thumbnail != ''"
                  class="w-full rounded-t relative bottom-1"
                  :src="value.thumbnail"
                  alt=" "
                />
                <img
                  v-else
                  class="w-full rounded-t"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-IrTTnp1cy1L6zcVWQmUN-e__v37xZm2a1FQm3eLDas1NjAqauw7m_69qWuN7ezpphkg&usqp=CAU"
                  alt="Sunset in the mountains "
                />
                /></NuxtLink
              >
            </div>
            <div class="relative">
              <div class="px-6 py-4">
                <div class="mb-2 color-blue color font-title">
                  {{ value.title }}
                </div>
              </div>
              <div class="px-6 pt-4 pb-2 flex justify-between">
                <span
                  class="inline-block bg-gray-200 rounded-full p-2 font-sans text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >{{ value.year }}</span
                >
                <span
                  class="inline-block font-title bg-gray-200 rounded-full p-2 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >09 : 45</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// API_PRODUCTION_URL
const config = useRuntimeConfig();
const URL_PRODUCTION = config.API_PRODUCTION_URL;
const { data: completed } = await useFetch(
  URL_PRODUCTION +
    "biddings/completed?type=1&offset=0&limit=10&filter_by=future"
);
let completedBidding = completed._rawValue;
</script>

<style scoped>
.top {
  top: 2px;
  padding: 4px;
}
.bg-color {
  background-color: rgba(198, 201, 192, 0.5);
}
.price {
  background-color: rgba(38, 164, 229, 0.75);
}
.width {
  width: 240px;
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

</style>
