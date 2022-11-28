<template>
  <div class="">
    <div class="text">
      <p class="font-bold text-xl uppercase text-center mt-6 text-gray-600">
        customer feedback
      </p>
    </div>
    <div
      class="mt-4 w-4/5 m-auto grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-4 width m-h-64 md:mt-5"
    >
      <div
        data-aos="zoom-in"
        data-aos-duration="500"
        class="max-w-sm rounded width shadow-lg"
        v-for="(customer, index) in services"
        :key="index"
      >
      <div     v-if="customer.category_id == 6">

        <img
      
          class="w-full"
          :src="'/images/' + customer.images"
        />

        <div
  
          class="px-6 py-4 text-sm text-gray-600 font-semibold"
        >
          <p>{{ customer.feedback }}</p>
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
let services = datas._rawValue;
console.log(services);
</script>
<script>
export default {
  data() {
    return {
      customers: [
        { img: "01.png", feedback: "Affordable price, plus only $100 to win." },
        {
          img: "02.png",
          feedback: "You still can bid your favorite car, even you're at work.",
        },
        { img: "03.png", feedback: "Win the bid, resell the car with profit." },
        { img: "04.png", feedback: "Good price, plan to bid other cars next." },
      ],
    };
  },
  methods:{
    
  },
 
};
</script>

<style scoped>
/* . {
  width: 250px;
} */
.height {
  height: 204px;
}
</style>
