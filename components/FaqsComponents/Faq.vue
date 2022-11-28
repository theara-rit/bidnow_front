<template>
  <div class="faq-component w-4/5 m-auto mb-4">
    <div class="text-center font-bold text-xl">How can I help you?</div>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-2 mt-6"
    >
      <!-- part images -->
      <div
        class="flex justify-center md:justify-start"
        data-aos="fade-right"
        data-aos-duration="1500"
      >
        <img class="md:w-96 sm:w-60" src="/images/Component 9.png" />
      </div>
      <div class="question-answer ml-4">
        <div
          class="relative w-[400px overflow-hidden m-3"
          v-for="(value, index) in faqs"
          :key="index"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <!-- use to click by input type checkbox -->
          <input
            type="checkbox"
            class="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
          />
          <!-- part display question -->
          <div class="color-board rounded-t h-12 w-full pl-5 flex items-center">
            <h1 class="text-lg font-semibold w-96 font-color-gray capitalize">
              {{ value.question }}
            </h1>
          </div>
          <!-- part icon to click  -->
          <div
            class="absolute top-3 right-3 text-white transition-transform duration-500 rotate-1 peer-checked:rotate-90"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
          <!-- part display text in faq -->
          <div
            class="rounded-b font-size-text color-board transition-all duration-500 max-h-0 peer-checked:max-h-40 font-normal font-sm text-gray-600"
          >
            <div class="p-4">
              <hr class="" />
              <p>
                {{ value.answer }}
              </p>
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
const { data: datas } = await useFetch(
  URL_PRODUCTION+"get_fqa?lang=en"
);
let faqs = datas._rawValue.data;
</script>
<style scoped>
svg {
  color: black;
  border: none;
}
.color-board {
  background: #d9d9d9;
}
hr {
  border: solid black 1px;
}
</style>
