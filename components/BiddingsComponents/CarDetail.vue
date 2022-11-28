<template>
  <div class="container mx-auto">
        <div
          class="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-20 md:grid-cols-2 lg:grid-cols-2"
        >
          <div class="flex justify-center">
            <div class="w-3/2">
              <div class="">
                <img class="rounded-lg shadow-lg" :src="images" alt="" />
              </div>
              <div class="w-full grid grid-cols-5 gap-4 mt-4">
                <img
                  class="rounded-lg shadow-lg"
                  v-for="(value, index) in galleries"
                  :key="index"
                  :src="value.image_url"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="">
            <div>
              <div class="text-xl font-bold font-sans m-3">
                {{ title }}
              </div>
              <div class="flex font-sans font-semibold text-sm m-3">
                <span class="mt-4">From </span>
                <span class="m-3 text-xl"> {{ start_price }}</span>
              </div>
              <div class="flex font-sans font-semibold text-sm">
                <div class="flex">
                  <span class="m-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                      />
                    </svg>
                  </span>
                  <span class="m-4">
                    {{ bidding_schedule }}
                  </span>
                </div>
                <div class="flex">
                  <span class="m-3">
                    <svg
                      class="h-8 w-8 text-black"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <polyline points="12 8 12 12 14 14" />
                      <path d="M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5" />
                    </svg>
                  </span>
                  <span class="m-4">
                    {{ available_time }}
                  </span>
                </div>
              </div>
              <div class="">
                <div class="flex">
                  <span class="m-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </span>
                  <span class="m-3">
                    {{ view }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-20 md:grid-cols-2 lg:grid-cols-2"
        >
          <div class="mt-10 w-full text-justify grid grid-cols-2">
            <div class="border-bottom pt-2 pb-2">Model</div>
            <div class="border-bottom pt-2 pb-2">
              {{ model }}
            </div>
            <div class="border-bottom pt-2 pb-2">Brand</div>
            <div class="border-bottom pt-2 pb-2">
              {{ brand }}
            </div>
            <div class="border-bottom pt-2 pb-2">Year</div>
            <div class="border-bottom pt-2 pb-2">
              {{ year }}
            </div>
            <div class="border-bottom pt-2 pb-2">Body Type</div>
            <div class="border-bottom pt-2 pb-2">
              {{ body_type }}
            </div>
            <div class="border-bottom pt-2 pb-2">Vihicle Type</div>
            <div class="border-bottom pt-2 pb-2">
              {{ vehicle_type }}
            </div>
            <div class="border-bottom pt-2 pb-2">Color</div>
            <div class="border-bottom pt-2 pb-2">
              {{ color }}
            </div>
            <div class="border-bottom pt-2 pb-2">Engine Type</div>
            <div class="border-bottom pt-2 pb-2">
              {{ engine_type }}
            </div>
            <div class="border-bottom pt-2 pb-2">Drive</div>
            <div class="border-bottom pt-2 pb-2">
              {{ drive }}
            </div>
            <div class="border-bottom pt-2 pb-2">Cyclinders</div>
            <div class="border-bottom pt-2 pb-2">
              {{ cilinder }}
            </div>
            <div class="border-bottom pt-2 pb-2">Transmission</div>
            <div class="border-bottom pt-2 pb-2">
              {{ transmission }}
            </div>
            <div class="border-bottom pt-2 pb-2">Fuel</div>
            <div class="border-bottom pt-2 pb-2">
              {{ fuel }}
            </div>
            <div class="border-bottom pt-2 pb-2">Plate Number</div>
            <div class="border-bottom pt-2 pb-2">
              {{ plat_number }}
            </div>
            <div class="border-bottom pt-2 pb-2">Document</div>
            <div class="border-bottom pt-2 pb-2">N/A</div>
            <div class="border-bottom pt-2 pb-2">Condition</div>
            <div class="border-bottom pt-2 pb-2">
              {{ condition }}
            </div>
            <div class="border-bottom pt-2 pb-2">Other</div>
            <div class="border-bottom pt-2 pb-2"></div>
          </div>
          <div class="location w-3/2">
            <div class="bid bg-sky-600 ml-4 rounded-lg shadow-lg">
              <div class="text text-center py-4">
                <h2 class="font-bold text-2xl text-white uppercase">
                  How to bid
                </h2>
              </div>
              <div class="flex justify-center">
                <p class="text-center w-4/5">
                  Please install our application on your mobile to join our
                  bidding
                </p>
              </div>
              <div class="img-2 flex justify-center p-2">
                <img
                  class="mr-4"
                  src="/images/download_appstore.png"
                  width="130px"
                />
                <img src="/images/download_googleplay.png" width="130px" />
              </div>
              <div class="qr justify-center flex py-4">
                <img src="/images/QR CODE.png" width="98px" />
              </div>
            </div>
            <div class="contact">
              <h2 class="text-center font-bold text-gray-600 mt-6">
                CHEACK CAR QUALITY
              </h2>
              <div class="ml-8">
                <div class="flex mt-4">
                  <div class="img">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#2FBDFF"
                      class="w-8 h-8"
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
                  <p class="ml-4">
                    {{ address }}
                  </p>
                </div>
                <div class="flex mt-2">
                  <div class="img">
                    <svg
                      class="w-8 h-8 m-1"
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
                  <p class="ml-4">
                    {{ mobile }}
                  </p>
                </div>
                <div class="flex mt-2">
                  <div class="img">
                    <svg
                      class="w-8 h-8 m-1"
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
                  </div>
                  <p class="ml-4">{{ email }}</p>
                </div>
              </div>
            </div>
            <div class="map mt-6">
              <iframe
                class="ml-6"
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d31274.068756494024!2d104.895101627416!3d11.533298395243886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1smap!5e0!3m2!1sen!2skh!4v1667458908457!5m2!1sen!2skh"
                width="450"
                height="250"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
import axios from "axios";
// const props = defineProps({ id: null });
export default {
  props: ["id"],
  data() {
    return {
      // URL_PRODUCTION : config.API_PRODUCTION_URL,
      posts: {},
      images: null,
      galleries: [],
      title: null,
      start_price: null,
      bidding_schedule: null,
      available_time: null,
      // -----------
      model: null,
      brand: null,
      body_type: null,
      vehicle_type: null,
      color: null,
      engine_type: null,
      drive: null,
      cilinder: null,
      transmission: null,
      fuel: null,
      plat_number: null,
      condition: null,
      // -----------
      email: null,
      mobile: null,
      address: null,
    };
  },
  methods: {
    async getData() {
      let res = await axios.get(
        "https://api.bidnowkh.com/api/v1/" +
          "biddings/bidding_detail?bidding_id=" +
          this.id
      );
      this.posts = res.data;
      this.images = this.posts.data.bidding.thumbnail;
      this.title = this.posts.data.bidding.title;
      this.start_price = this.posts.data.bidding.start_price;
      this.bidding_schedule = this.posts.data.bidding.bidding_schedule;
      this.available_time = this.posts.data.bidding.available_time[0];
      this.view = this.posts.data.bidding.view;
      this.galleries = this.posts.data.galleries;
      // -------------
      this.model = this.posts.data.bidding.model;
      this.brand = this.posts.data.bidding.brand;
      this.year = this.posts.data.bidding.year;
      this.body_type = this.posts.data.bidding.body_type;
      this.vehicle_type = this.posts.data.bidding.vehicle_type;
      this.color = this.posts.data.bidding.color;
      this.engine_type = this.posts.data.bidding.engine_type;
      this.drive = this.posts.data.bidding.drive;
      this.cilinder = this.posts.data.bidding.cilinder;
      this.transmission = this.posts.data.bidding.transmission;
      this.fuel = this.posts.data.bidding.fuel;
      this.plat_number = this.posts.data.bidding.plat_number;
      this.condition = this.posts.data.bidding.condition;
      // -----------
      this.address = this.posts.data.bidding.warehouse.address;
      this.mobile = this.posts.data.bidding.warehouse.mobile;
      this.email = this.posts.data.bidding.warehouse.email;

      console.log(this.posts.data);
    },
  },
  computed: {},
  mounted() {
    this.getData();
  },
};
</script>

<style scoped>
.container {
  width: 80%;
}
.border-bottom {
  border-bottom: #26a4e5 2px solid;
}
</style>
>
