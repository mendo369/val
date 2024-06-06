<script setup></script>

<template>
  <section class="home">
    <div class="slider"></div>
    <div class="photographs section-home">
      <div class="title"><h1>FOTOGRAFÍAS</h1></div>
      <div class="description">
        <p>
          Cada imagen captura la energía, la elegancia y la calidad de su
          respectivo campo. Desde la intensidad de la acción deportiva hasta la
          presentación de productos, cada foto cuenta una historia única.
        </p>
      </div>
      <div class="images">
        <div class="image">
          <img src="../assets/images/fotos/IMG_2395.jpg" alt="img1" />
        </div>
        <div class="image"><img src="" alt="img2" /></div>
        <div class="image"><img src="" alt="img3" /></div>
      </div>
      <div class="button">Ver</div>
    </div>
    <div class="editorial section-home">
      <div class="title"><h1>EDITORIAL</h1></div>
      <div class="description">
        <p>
          Cada pieza editorial está cuidadosamente compuesta para transmitir una
          narrativa visual impactante. Explorando este universo visual.
        </p>
      </div>
      <div class="images">
        <div class="image-editorial">
          <img
            src="../assets/images/editorial/PROYECTO1/pliego-04.jpg"
            alt=""
          />
        </div>
        <div class="image-editorial">
          <img
            src="../assets/images/editorial/PROYECTO2/pliego-09.jpg"
            alt=""
          />
        </div>
      </div>
      <div class="button">Ver</div>
    </div>
    <div class="branding section-home">
      <div class="title"><h1>IDENTIDAD DE MARCA</h1></div>
      <div class="description">
        <p>
          Cada proyecto representa la esencia única de una marca. Desde la
          dulzura y la diversión de campañas publicitarias , cada diseño refleja
          cuidadosamente los valores y la personalidad de la marca que
          representamos.
        </p>
      </div>
      <div class="images">
        <div class="image-editorial">
          <img
            src="../assets/images/identidad/Levael-03.jpg"
            alt=""
          />
        </div>
        <div class="image-editorial">
          <img src="../assets/images/identidad/PORTADABOLI.png" alt="" />
        </div>
      </div>
      <div class="button">Ver</div>
    </div>
  </section>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.slider {
  border: 2px solid green;
  min-height: 300px;
}

.section-home {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}

.title h1 {
  font-size: 60px;
  font-weight: 100;
}

.description {
  max-width: 1000px;
}

.description p {
  text-align: center;
  color: #b1b1b1;
  font-size: 18px;
}

.images {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  flex-wrap: wrap;
}

.image {
  width: 350px;
  height: 400px;
  background-color: rgb(152, 236, 236);
  overflow: hidden;
}

.image img,
.image-editorial img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-editorial {
  width: 500px;
  height: 350px;
  background-color: rgb(152, 236, 236);
  overflow: hidden;
}

.button {
  width: 150px;
  height: 50px;
  border: 2px solid #c8c8c6;
  color: #c8c8c6;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 400px) {
  .image-editorial img{
    object-fit: initial;
    
  }
}
</style>
