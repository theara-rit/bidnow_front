<template>
  <!-- Container for demo purpose -->
  <div class="container my-24 px-6 mx-auto">
    <!-- Section: Design Block -->
    <section class="mb-10 text-gray-800">
      <div class="block rounded-lg box-shadow bg-white">
        <div class="flex flex-wrap items-center">
          <div
            class="grow-0 shrink-0 basis-auto block w-full lg:flex lg:w-6/12 xl:w-4/12"
          >
            <div class="map-container-2 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3909.2332741486443!2d104.9094826148077!3d11.535116891809412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951b0d43c12d9%3A0x7cc0e129f04ee685!2sRenet%20Japan%20Cambodia!5e0!3m2!1sen!2skh!4v1668567708572!5m2!1sen!2skh"
                class="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
            <div
              class="relative bottom-0 top-4 md:top-0 m-6 md:bottom-5 lg:bottom-10"
            >
              <div class="font-bold text-xl">Office Address</div>
            </div>
            <div
              class="flex flex-wrap pt-12 lg:pt-0"
              v-for="(value, index) in offices"
              :key="index"
            >
              <div
                class="mb-5 grow-0 shrink-0 basis-auto w-full md:w-6/12 lg:w-full xl:w-6/12 px-3 md:px-6 xl:px-12"
                v-if="value.title == 'Our Address'"
              >
                <div class="flex items-start">
                  <div class="shrink-0">
                    <div
                      class="p-4 hover-icon border rounded-md shadow-md w-14 h-14 flex items-center justify-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#2FBDFF"
                        class="w-10 h-10"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="grow ml-6">
                    <p class="font-semibold text-lg mb-1">{{ value.title }}</p>
                    <p class="text-gray-600 text-sm font-normal">
                      {{ value.content }}
                    </p>
                  </div>
                </div>
              </div>

              <div
                class="mb-5 grow-0 shrink-0 basis-auto w-full md:w-6/12 lg:w-full xl:w-6/12 px-3 md:px-6 xl:px-12"
                v-if="value.title == 'Contact Info'"
              >
                <div class="flex items-start">
                  <div class="shrink-0">
                    <div
                      class="p-4 border hover-icon rounded-md shadow-md w-14 h-14 flex items-center justify-center"
                    >
                      <svg
                        class="h-10 w-10"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="#2FBDFF"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <path
                          d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="grow ml-6">
                    <p class="font-semibold text-lg mb-1">{{ value.title }}</p>
                    <p class="text-gray-600 text-sm font-normal">
                      {{ value.content }}
                    </p>
                  </div>
                </div>
              </div>

              <div
                class="mb-5 grow-0 shrink-0 basis-auto w-full md:w-6/12 lg:w-full xl:w-6/12 px-3 md:px-6 xl:px-12"
                v-if="value.title == 'Email Address'"
              >
                <div class="flex align-start">
                  <div class="shrink-0">
                    <div
                      class="p-4 hover-icon border rounded-md shadow-md w-14 h-14 flex items-center justify-center"
                    >
                      <a href="mailto: Info@renethr.com.kh">
                        <svg
                          class="h-10 w-10"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="#2FBDFF"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <rect x="3" y="5" width="18" height="14" />
                          <polyline points="3 7 12 13 21 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div class="grow ml-6">
                    <p class="font-semibold text-lg mb-1">{{ value.title }}</p>
                    <p class="text-gray-600 text-sm font-normal">
                      {{ value.content }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Link API
const config = useRuntimeConfig();
const URL = config.API_BASE_URL;
const { data: datas } = await useFetch(URL + "posts");
let officesAddress = datas._rawValue;
const offices = [];
for (let value of officesAddress) {
  if (value.category_id == 16) {
    offices.push(value);
  }
}
</script>

<style scoped>
.map-container-2 {
  height: 350px;
}
.hover-icon:hover {
  background: #2fbdff;
  transition: 00.5s;
}
svg:hover {
  stroke: white;
}
.box-shadow {
  box-shadow: 0px 1px 1px rgba(9, 30, 66, 0.25),
    0px 0px 1px 1px rgba(9, 30, 66, 0.13);
}
.border {
  border: solid #2fbdff 2px;
}
</style>
