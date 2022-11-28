<template>
  <div>
    <div>
      <BiddingsComponentsCarDetail :id="id" />
    </div>
  </div>
  <div>
    <div class="mt-20">
      <NavigationsFooter />
    </div>
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
const id = computed(() => {
  return `${route.params.car_id}`;
});
</script>

<style></style>
