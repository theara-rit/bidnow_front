<template>
  <div v-for="(value, index) in details.data" :key="index">
    <div v-if="value.id == id">
      <BiddingsComponentsCarDetail :cars="value" />
    </div>
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";
const route = useRoute();
const config = useRuntimeConfig();
const URL_PRODUCTION = config.API_PRODUCTION_URL;
const { data: details } = await useFetch(
  URL_PRODUCTION +
    "biddings/completed?type=1&offset=0&limit=10&filter_by=future"
);
const id = computed(() => {
  return `${route.params.car_id}`;
});
</script>

<style></style>
