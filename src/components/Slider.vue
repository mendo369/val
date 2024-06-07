<script setup>
// Importar componentes y módulos de Swiper
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

// Definir los módulos para Swiper
const modules = [Navigation];
</script>

<template>
  <swiper :rewind="true" :navigation="true" :modules="modules">
    <swiper-slide style="height: 100%">
      <img src="../assets/images/fotos/slide/IMG_1363.jpg" alt=""></swiper-slide>
      <!-- image  -->
    ><swiper-slide>
      <img src="../assets/images/fotos/slide/IMG_1699.jpg" alt="">
      <!-- image -->
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/images/fotos/slide/IMG_2425.jpg" alt="">
      <!-- image -->
    </swiper-slide>
  </swiper>
</template>

<style scoped>
.swiper {
  width: 100%;
  height: 400px;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: fill;
}

.swiper-button-next{
    color: #fff;
}

@media(max-width:400px){
    .swiper{
        height: 300px;
    }

    .swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
}
</style>
