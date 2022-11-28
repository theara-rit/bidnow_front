<template>
  <div class="bg-white">
    <div class="container mx-auto">
      <div class="flex justify-center">
        <div class="hide-logo-above">
          <div class="">
            <img width="100" src="/images/bidnow-logo.png" alt="" />
          </div>
        </div>
        <!-- logo hamburgar here -->
        <div
          class="inline-flex fixed hideMenu right-5 items-center p-2 ml-3 text-sm rounded-lg"
        >
          <button
            @click="isOptionsExpanded = !isOptionsExpanded"
            @blur="isOptionsExpanded = false"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              :class="isOptionsExpanded"
              class="w-6 h-6 transform transition-transform duration-200 ease-in-out"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>
      <nav style="background: #ffffff" class="hide">
        <div class="show-sub-menu container">
          <ul class="flex m-0 p-0">
            <div class="flex ml-4 sub-padding">
              <span
                @click="onChangeLanguage($t('language'))"
                class="cursor-pointer"
                ><img
                  v-show="!isChangeLanguage"
                  width="30"
                  src="/images/kh.png"
                  alt=""
              /></span>
              <span
                @click="onChangeLanguage($t('language'))"
                class="cursor-pointer"
                ><img
                  width="30"
                  v-show="isChangeLanguage"
                  src="/images/en.png"
                  alt=""
              /></span>
            </div>
          </ul>
        </div>
      </nav>
      <div style="background: white" class="padding hide">
        <div class="lg:flex lg:justify-between md:block sm:block container">
          <!-- bidNow logo  -->
          <div class="hide">
            <div class="">
              <img width="100" src="/images/bidnow-logo.png" alt="" />
            </div>
          </div>
          <div class="">
            <nav class="show display-flex">
              <ul
                class="ml-12 text-color font-bold menu-hover"
                v-for="(value, index) in navigations"
                :key="index"
              >
                <nuxt-link
                  :to="value.to"
                  class="flex flex-wrap white-text-with-blue-shadow"
                  :class="{ active: value.to == nameMenu }"
                  @click="onClick(value.to)"
                  tag="nuxt-link"
                  >{{ $t(value.menu) }}</nuxt-link
                >
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <transition
        enter-active-class="transform transition duration-500 ease-custom"
        enter-class="-translate-y-1/2 scale-y-0 opacity-0"
        enter-to-class="translate-y-0 scale-y-100 opacity-100"
        leave-active-class="transform transition duration-300 ease-custom"
        leave-class="translate-y-0 scale-y-100 opacity-100"
        leave-to-class="-translate-y-1/2 scale-y-0 opacity-0"
      >
        <ul
          v-show="isOptionsExpanded"
          class="absolute left-0 right-0 mb-4 bg-white p-4"
        >
          <nav class="show display-flex">
            <ul
              class="ml-12 p-1 text-color font-bold"
              v-for="(value, index) in navigations"
              :key="index"
            >
              <nuxt-link
                :to="value.to"
                class="flex flex-wrap menu-hover white-text-with-blue-shadow"
                :class="{ active: value.to == nameMenu }"
                @click="onClick(value.to)"
                tag="nuxt-link"
                >{{ $t(value.menu) }}</nuxt-link
              >
            </ul>
          </nav>
        </ul>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isOptionsExpanded: false,
      navigations: [
        { menu: "home", to: "/" },
        { menu: "service", to: "/services/service" },
        { menu: "bidding", to: "/biddings/bidding" },
        { menu: "mobile_app", to: "/mobiles-app/mobile-app" },
        { menu: "new_event", to: "/newAndevents/newAndevent" },
        { menu: "faq", to: "/faqs/faq" },
        { menu: "contact", to: "/contacts/contact" },
      ],
      nameMenu: "",
      isChangeLanguage: false,
    };
  },
  methods: {
    setOption(option) {
      this.selectedOption = option;
      this.isOptionsExpanded = false;
    },
    onClick(menu) {
      this.nameMenu = menu;
    },
    onChangeLanguage(language) {
      this.isChangeLanguage = !this.isChangeLanguage;
      if (language == "En") {
        this.$i18n.locale = "km";
      } else if (language == "Km") {
        this.$i18n.locale = "en";
      }
    },
  },
};
</script>

<style>
.ease-custom {
  transition-timing-function: cubic-bezier(0.61, -0.53, 0.43, 1.43);
}
.font-weight {
  font-weight: bold;
}
.padding {
  padding-top: 5px;
  padding-bottom: 20px;
}
@media (max-width: 767px) {
  .hide {
    display: none;
  }
  .show {
    display: block;
  }
  #menu-toggle:checked + #menu {
    display: block;
  }
}
@media (min-width: 768px) {
  .hideMenu {
    display: none;
  }
  .show-sub-menu {
    display: flex;
    justify-content: flex-end;
  }
  .hide-logo-above {
    display: none;
  }
  .display-flex {
    display: flex;
    flex-wrap: wrap;
  }
}
.menu-hover:hover {
  border-bottom: solid 2px #208bcb;
  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  opacity: 9;
}

.active {
  color: rgba(32, 139, 203, 0.75);
}
.text-color {
  color: rgb(83, 83, 83);
}
.white-text-with-blue-shadow {
  text-shadow: 1px 1px #c7c5c5;
}
</style>
