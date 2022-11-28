<template>
  <!-- DISPLAY ON FOLDER PAGES AND FILE index.vue  -->
  <!-- CARD GROUP ALL TEAM -->
  <div class="card relative bottom-60">
    <!-- title -->
    <div class="flex justify-center">
      <div class="team flex justify-center">
        <p class="text-xl font-bold ">OUR TEAM</p>
      </div>
    </div>
    <!-- CARD TEAM NAME EMAIL AND POSITION -->
    <div class="flex flex-wrap justify-center">
      <div
        class="profile-image-border m-5"
        v-for="(value, index) in teams"
        :key="index"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <div
          class="flex justify-center hover:scale-90 transition-all duration-500 cursor-pointer"
        >
          <div class="relative">
            <!-- images -->
            <span class="flex rounded-lg w-full"
              ><img
                class="rounded-lg imges mt-10 object-cover"
                :src="value.img"
            /></span>
            <i
              class="fa fa-long-arrow-left absolute top-4 left-4 text-white"
            ></i>
            <!-- name -->
            <p class="text-name text-center text-white text-xl">
              {{ value.name }}
            </p>
          </div>
        </div>
        <div class="body flex ml-10 mt-5">
          <div>
            <!-- position -->
            <div class="text-lg font-semibold font-color-blue">
              {{ value.position }}
            </div>
            <!-- email -->
            <div class="text-sm font-normal text-gray-600">
              {{ value.email }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      teams: [
        {
          name: "Monyneath Mol",
          position: "Mobile Developer",
          email: "mol.monyneath@renet.com.kh",
          img: "/images/noavatar.png",
        },
        {
          name: "Bunchheang CHHUOY",
          position: "Project Manager",
          email: "chhuoy.bunchheang@renet.com.kh",
          img: "/images/bunchhean.png",
        },
        {
          name: "Keo Chanthy",
          position: "iT Admin",
          email: "keo.chanthy@renet.com.kh",
          img: "/images/chanthy.png",
        },
        {
          name: "Theara Rit",
          position: "Software Developer",
          email: "rit.theara@renet.com.kh",
          img: "/images/theara.png",
        },
        {
          name: "Somnak kalan",
          position: "Software Developer",
          email: "kalan.somnak@renet.com.kh",
          img: "/images/somnak.png",
        },
      ],
    };
  },
};
</script>

<style scoped>
.profile-image-border {
  width: 300px;
  height: 400px;
  background: #ffffff;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25), 0px 0px 2px rgba(0, 0, 0, 0.25);
}
.font-color-blue {
  color: #26a4e5;
}
.text-name {
  position: absolute;
  left: 0px;
  right: 0px;
  top: 280px;
  background: rgba(0, 0, 0, 0.548);
  padding-bottom: 7px;
  border-radius: 0px 0px 5px 5px;
}
.imges {
  background: rgb(168, 167, 167);
}
.team{
  border: solid 2px #26a4e5   ;
  padding: 5px;
}
</style>
