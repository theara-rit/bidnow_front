<template>
  <div style="background: #d9d9d9">
    <div class="mt-20">
      <div
        class="flex justify-center"
        v-for="(value, index) in appWorks"
        :key="index"
      >
        <div class="mt-10 w-1/2" v-if="value.title == 'How this app work'">
          <div class="flex justify-center">
            <h1 class="text-xl font-bold">
              <strong>{{ value.title }}</strong>
            </h1>
          </div>
          <div class="text-center text-sm font-normal text-gray-600">
            {{ value.content }}
          </div>
        </div>
      </div>
    </div>
    <div class="button flex justify-center flex-wrap mt-12">
      <button
        class="bg-gray-400 text-lg font-semibold py-2 px-4 pl-10 pr-10 m-2 rounded items-center"
      >
        <span>BidNow</span>
      </button>
      <button
        style="background: #00a3ff"
        class="text-white font-semibold text-lg py-2 px-4 pl-12 pr-12 m-2 rounded items-center"
      >
        <span>User</span>
      </button>
    </div>
    <div class="flex justify-center">
      <div
        class="grid grid-cols-1 sm:grid-cols-2 gap-2 md:grid-cols-2 lg:grid-cols-2"
      >
        <div class="">
          <img class="" src="/images/appWork.png" alt="" />
        </div>
        <!-- left side -->
        <div
          class="mt-7 text-left flex flex-wrap justify-center md:justify-start"
        >
          <div class="" v-for="(value, index) in appWorks" :key="index">
            <div v-if="value.title != 'How this app work'">
              <div class="flex justify-center md:justify-start">
                <span
                  style="background: #b2e0fa; color: #00a3ff"
                  class="p-4 m-1 rounded-xl text-lg font-semibold"
                  >0{{ index }}</span
                >
              </div>
              <div class="m-1 text-center md:text-start">
                <h2
                  class="text-lg font-semibold flex justify-center md:justify-start"
                >
                  <strong>{{ value.title }}</strong>
                </h2>
                <div class="w-60 font-normal text-sm text-gray-600">
                  {{ value.content }}
                </div>
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
let userManual = datas._rawValue;
let appWorks = [];
for (let value of userManual) {
  if (value.category_id == 12) {
    appWorks.push(value);
  }
}

</script>
<style scoped></style>
