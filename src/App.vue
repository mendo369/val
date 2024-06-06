<script setup>
import Nav from "./components/Nav.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <main class="val">
    <Nav />
    <div class="render">
      <router-view></router-view>
    </div>
    <Footer/>
  </main>
</template>

<style scoped>
.val {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

.render {
  width: 100%;
  height: 100%;
}
</style>
