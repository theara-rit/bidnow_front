
<template>
  <div class="container mx-auto">
    <div
      class="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-20 md:grid-cols-2 lg:grid-cols-2"
    >
      <div class="flex justify-center">
        <div class="w-3/2">
          <div class="img-1">
            <slot name="bannerimages"></slot>
          </div>
          <div class="img-detail w-full grid grid-cols-5 gap-4 mt-4">
            <img src="/images/car.webp" alt="" />
            <img src="/images/car.webp" alt="" />
            <img src="/images/car.webp" alt="" />
            <img src="/images/car.webp" alt="" />
            <img src="/images/car.webp" alt="" />
          </div>
          <div class="detail-car w-full text-center grid grid-cols-2 divide-y">
            <div>Model</div>
            <div><slot name="model"></slot></div>
            <div>Brand</div>
            <div><slot name="brand"></slot></div>
            <div>Year</div>
            <div><slot name="year"></slot></div>
            <div>Body Type</div>
            <div><slot name="bodytype"></slot></div>
            <div>Vihicle Type</div>
            <div><slot name="vihicletype"></slot></div>
            <div>Color</div>
            <div><slot name="color"></slot></div>
            >
            <div>Engine Type</div>
            <div><slot name="enginetype"></slot></div>
            <div>Drive</div>
            <div><slot name="drive"></slot></div>
            <div>Cyclinders</div>
            <div><slot name="cyclinder"></slot></div>
            <div>Transmission</div>
            <div><slot name="transmission"></slot></div>
            <div>Plate Number</div>
            <div><slot name="platenumber"></slot></div>
            <div>Document</div>
            <div><slot name="document"></slot></div>
          </div>
        </div>
      </div>
      <div class="flex justify-center">
        <div class="location w-3/2">
          <div class="bid bg-sky-600 ml-4">
            <div class="text text-center py-4">
              <h2 class="font-bold text-2xl text-gray-600 uppercase">
                How to bid
              </h2>
              <span class="text-sm">download our app</span>
            </div>
            <p class="text-center">
              Google Translate is a multilingual neural machine translation
              service developed by Google to translate text,
            </p>
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
            <div class="loc-1 ml-8">
              <div class="flex mt-4">
                <div class="img">
                  <img src="/images/Vector.png" width="30px" />
                </div>
                <p class="ml-4">
                  Location: Tali Village, Sangkat Dangkor, Khan Dangkor, Phnom
                  Penh
                </p>
              </div>
              <div class="flex mt-2">
                <div class="img">
                  <img src="/images/Vector.png" width="25px" />
                </div>
                <p class="ml-4">Tel: 066 505 981,098 407 333</p>
              </div>
              <div class="flex mt-2">
                <div class="img">
                  <img src="/images/Vector.png" width="25px" />
                </div>
                <p class="ml-4">Lorem ipsum dolor sit amet.</p>
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
  </div>
</template>

<script setup>
const props = defineProps({ cars: Object });
</script>

<style scoped>
.container {
  width: 80%;
}
</style>
>
