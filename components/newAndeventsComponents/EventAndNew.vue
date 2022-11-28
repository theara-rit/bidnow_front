<template>
  <!-- IMPORT IT INTO FILE newAndEvent.vue FROM FOLDER IN SECOND FOLDER newAndevents  -->
  <!-- LIST ALL NEWS AND EVENT  -->
  <div class="container mx-auto">
    <!-- title -->
    <div class="mt-36 font-bold text-xl">
      <div class="">News & Event</div>
      <hr class="mt-2" />
      <hr />
    </div>
    <!-- NEWS AND EVENTS LIST -->
    <div>
      <div class="p-6 sm:p-12 dark:bg-gray-900 dark:text-gray-100">
        <div v-for="(value, index) in news" :key="index">
          <div
            class="flex flex-col space-y-4 md:space-y-0 mt-5 md:space-x-6 md:flex-row"
            v-if="value.category_id == 14"
          >
            <!-- image -->
            <img
              :src="'/images/' + value.images"
              alt=""
              class="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 img object-cover self-center flex-shrink-0 border md:justify-self-start dark:bg-gray-500 dark:border-gray-700"
            />
            <div class="flex flex-col">
              <!-- title of new and event -->
              <h4 class="text-lg font-semibold text-center md:text-left">
                {{ value.title }}
              </h4>
              <!-- text describe about new and event -->
              <p
                class="md:text-start text-sm font-normal text-gray-600 text-center"
              >
                {{ value.content }}
              </p>
              <div
                class="mt-3 text-sm font-semibold flex md:justify-start justify-center"
              >
                <!-- date -->
                <h4 class="md:text-left font-semibold">
                  {{ value.created_at }}
                </h4>
              </div>
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
let news = datas._rawValue;
console.log(news);
</script>

<style scoped>
.container {
  width: 80%;
}
.img {
  width: 273px;
  height: 166px;
}
</style>
