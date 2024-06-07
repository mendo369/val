<script setup></script>

<template>
  <section class="about-me">
    <div class="me">
      <div class="title title-mobile">
          <h1>ABOUT ME</h1>
        </div>
      <div class="image">
        <img src="../assets/images/about/val.jpg" alt="" />
      </div>
      <div class="text">
        <div class="title title-visible">
          <h1>ABOUT ME</h1>
        </div>
        <div class="description">
          <p>
            Auxiliar en comunicación gráfica y publicitaria / Diseñadora /
            Fotográfa. Me encanta sumergirme en el mundo del diseño y la
            fotografía para crear cosas asombrosas que realmente cautiven a la
            audiencia. Soy una persona responsable y proactiva. También me
            considero una persona sociable y me encanta trabajar en equipo. Me
            gusta la moda, la animación, el cine y la música, y siempre busco
            formas de incorporar estos elementos en mis diseños y fotografías.
          </p>
        </div>
      </div>
    </div>
    <div class="education">
      <div class="text">
        <div class="title"><h1>FORMACIÓN ACADÉMICA</h1></div>
        <div class="description">
          <p>Fundación Univarsitarí Los Libertadores Diseño Gráfico</p>
          <span>Sexto Semestre</span>
          <br />
          <br />
          <p>
            Universitaria de Colombia<br />Técnico Aux. en comunicación Gráfica
            y Publicitaria
          </p>
          <span>2021</span>
          <br />
          <br />
          <p>Siete Fotógrafos<br />Curso básico de Fotografía</p>
          <span>2019</span>
        </div>
      </div>
      <div class="image">
        <img src="../assets/images/about/IMG_1604.jpg" alt="" />
      </div>
    </div>
    <div class="skills">
      <div class="image image-hiden" style="width: 100vw; height: 200px;">
        <img src="../assets/images/about/IMG_1917.jpg" alt="" />
      </div>
      <div class="image">
        <img src="../assets/images/about/Val-03.png" alt="" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-me {
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
span{
    font-weight: bold;
}

.title-mobile{
  display: none;
}

.image-hiden{
  display: none;
}

.me,
.education {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.image {
  width: 40vw;
  height: 50vw;
}

.text{
  width: 55vw;
}

.skills .image {
  width: 400px;
  height: 400px;
}

.image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.description p {
  text-align: justify;
}

@media (max-width: 400px) {
  .description p {
    padding: 10px;
  }

  .title-visible{
    display: none;
  }

  .title-mobile{
    display: initial;
    width: 100vw;
  }
  .text{
    width: 100%;
  }

  .image-hiden{
  display: block;
}

  .me{
    flex-direction: column;
  }
  

  .education .image{
    width: 90vw;
    margin-right: -10vw;
  }

  .skills .image {
  width: 90vw;
  height: auto;
}


}
</style>
