<template>
  <div class="container">
    <div class="flex justify-center">
      <div class="">
        <div class="flex justify-center">
          <h1 class="text-xl font-bold">
            <strong>User Manual</strong>
          </h1>
        </div>
        <div class="text-center font-normal text-sm text-gray-600 w-4/5 m-auto">
          <p>
            Download BidNow Kh App from Google Play Store and App store,Create
            account use app to BidNow car and sell your car.
          </p>
        </div>
      </div>
    </div>

    <div class="flex justify-around flex-wrap mt-10">
      <!-- left side -->
      <div
        class="m-5 text-right grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-1"
      >
        <div v-for="(value, index) in dataUser" :key="index">
          <div class="" v-if="value.title == 'Request A Trip'">
            <div class="flex justify-center md:justify-end">
              <span
                style="background: #b2e0fa; color: #00a3ff"
                class="p-4 m-5 rounded-xl font-semibold text-lg"
                >01</span
              >
            </div>
            <div class="">
              <h2
                class="font-semibold text-lg flex justify-center md:justify-end"
              >
                <strong>{{ value.title }}</strong>
              </h2>
              <div class="">
                <div
                  class="w-60 font-normal text-sm text-gray-600 text-center md:text-end"
                >
                  {{ value.content }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-for="(value, index) in dataUser" :key="index">
          <div class="" v-if="value.title == 'Enjoy Your Bid'">
            <div class="flex justify-center md:justify-end">
              <span
                style="background: #b2e0fa; color: #00a3ff"
                class="p-4 m-5 rounded-xl font-semibold text-lg"
                >03</span
              >
            </div>
            <div class="">
              <h2
                class="font-semibold text-lg flex justify-center md:justify-end"
              >
                <strong> {{ value.title }}</strong>
              </h2>
              <div class="text-center md:text-end">
                <div class="w-60 font-normal text-sm text-gray-600 t">
                  {{ value.content }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center flex-wrap">
        <img width="200" src="/images/appManual.png" alt="" />
      </div>

      <div>
        <!-- right side -->
        <div
          class="m-5 text-left grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-1"
        >
          <div v-for="(value, index) in dataUser" :key="index">
            <div class="" v-if="value.title == 'Match with a BidNow'">
              <div class="flex justify-center md:justify-start">
                <span
                  style="background: #b2e0fa; color: #00a3ff"
                  class="p-4 m-5 rounded-xl font-semibold text-lg"
                  >02</span
                >
              </div>
              <div class="m-5">
                <h2
                  class="font-semibold text-lg flex justify-center md:justify-start"
                >
                  <strong>{{ value.title }}</strong>
                </h2>
                <div
                  class="w-60 font-normal text-sm text-gray-600 text-center md:text-start"
                >
                  {{ value.content }}
                </div>
              </div>
            </div>
          </div>
          <div v-for="(value, index) in dataUser" :key="index">
            <div class="" v-if="value.title == 'Pay and Rate'">
              <div class="flex justify-center md:justify-start">
                <span
                  style="background: #b2e0fa; color: #00a3ff"
                  class="p-4 m-5 rounded-xl font-semibold text-lg"
                  >04</span
                >
              </div>
              <div class="m-5">
                <h2
                  class="font-semibold text-lg flex justify-center md:justify-start"
                >
                  <strong> {{ value.title }}</strong>
                </h2>

                <div
                  class="w-60 font-normal text-sm text-gray-600 text-center md:text-start"
                >
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
let dataUser = [];
for (let value of userManual) {
  if (value.category_id == 11) {
    dataUser.push(value);
  }
}
</script>

<style scoped>
.container {
  width: 80%;
  margin: auto;
}
</style>
