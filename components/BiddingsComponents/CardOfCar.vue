<template>
  <div
    class="rounded width m-h-64 m-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300 shadow-lg"
  >
    <div>
      <span
        class="price relative top rounded-tl font-normal text-white text-price"
        ><slot name="price"></slot
      ></span>

      <div class="linkOfCar">
        <slot name="cardDetail"></slot>
      </div>
      <div class="bg-color">
        <div class="px-4 py-2">
          <div class="font-semibold text-lg mb-2 color">
            <slot name="model"></slot>
          </div>
        </div>
        <div
          class="px-4 pt-2 pb-2 text-sm font-semibold flex justify-between text-color"
        >
          <span class="inline-block mr-2 mb-2"><slot name="date"></slot></span>
          <span class="inline-block mr-2 mb-2"><slot name="time"></slot></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.top {
  top: 25.5px;
  padding: 4px;
}
.bg-color {
  background-color: rgba(198, 201, 192, 0.5);
}
.price {
  background-color: rgba(38, 164, 229, 0.75);
  color: rgba(255, 255, 255, 0.75);
}
.width {
  width: 250px;
}
.color {
  color: #26a4e5;
}

.font-text {
  color: rgba(16, 16, 16, 0.5);
}
.font-title {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
}
.color-blue {
  color: rgba(32, 139, 203, 0.75);
}
</style>
