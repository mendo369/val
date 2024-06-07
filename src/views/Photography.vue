<script setup></script>

<template>
  <section class="photography">
    <div class="title">
      <h1>FOTOGRAFÍAS</h1>
    </div>
    <div class="description">
      <p>
        Cada fotografía está diseñada para atraer e inspirar, ofreciendo una
        perspectiva única y cautivadora en cada toma
      </p>
    </div>
    <div class="images">
      <ul>
        <li class="image">
          <img src="../assets/images/fotos/IMG_4163.jpg" alt="" title="Competencia 2--1"/>
        </li>
        <li class="image">
          <img
            src="../assets/images/fotos/IMG_5212.jpg"
            alt=""
            style="object-fit: fill"
          />
        </li>
        <li class="image">
          <img src="../assets/images/fotos/IMG_2439.jpg" alt="" />
        </li>
        <li class="image">
          <img src="../assets/images/fotos/IMG_9436.jpg" alt="" />
        </li>
        <li class="image">
          <img src="../assets/images/fotos/IMG_2036.jpg" alt="" />
        </li>
        <li class="image">
          <img
            src="../assets/images/fotos/IMG_5621.jpg"
            alt=""
            style="object-fit: fill"
          />
        </li>
        <li class="image">
          <img src="../assets/images/fotos/IMG_9066.jpg" alt="" />
        </li>
        <li class="image">
          <img src="../assets/images/fotos/IMG_7417.jpg" alt="" />
        </li>
        <li class="image">
          <img src="../assets/images/fotos/IMG_2395.jpg" alt="" />
        </li>
        <li class="image">
          <img src="../assets/images/fotos/IMG_4722-2.jpg" alt="" />
        </li>
      </ul>
    </div>
    <!-- <div class="main-img">
          <img src="../assets/images/fotos/IMG_9066.jpg" alt="">
          <div class="img-text">
            <h3>Fotografía Deportiva</h3>
            <p>Carrera de Ciclismo Mtb, en campeonato distrital.</p>
            <p>Valpics 2023</p>
          </div>
        </div> -->
  </section>
</template>

<style scoped>
.photography {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}

/* .images{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
} */

.images ul {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.image {
  width: 45vw;
  height: 45vw;
  overflow: hidden;
}

.image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.main-img {
  width: 90vw;
  /* height: 600px; */
  /* overflow: hidden; */
  margin-bottom: 150px;
}

.main-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 400px) {
  .image {
    width: 350px;
    height: 350px;
  }
}
</style>
