<template>
  <!-- here is we call navigation from components in folder Navigations-->

  <div class="fixed right-0 left-0 top-0 z-30 bg-black">
    <NavigationsNavigationBar  />
  </div>
  <main style="margin-top: 88px">

    <RouterView />
  </main>
</template>

<script>
export default {};
</script>

<style scoped></style>
