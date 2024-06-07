<script setup></script>

<template>
  <section class="editorial">
    <div class="title">
      <h1>EDITORIAL</h1>
    </div>
    <div class="description">
      <p>
        Cada proyecto editorial refleja un enfoque único y una dedicación al
        arte visual.
      </p>
    </div>
    <div class="images">
        <div class="image" id="pliego-first">
            <img src="../assets/images/editorial/PROYECTO1/pliego-09.jpg" alt="">
        </div>
        <div class="image" id="pliego">
            <img src="../assets/images/editorial/PROYECTO1/pliego-07.jpg" alt="">
        </div>
        <div class="image">
            <img src="../assets/images/editorial/PROYECTO1/pliego-04.jpg" alt="">
        </div>
        <div class="image" id="vw">
            <img src="../assets/images/editorial/PROYECTO1/pliego-02.jpg" alt="">
        </div>
        <div class="image">
            <img src="../assets/images/editorial/PROYECTO1/pliego-03.jpg" alt="">
        </div>
        <div class="image">
            <img src="../assets/images/editorial/PROYECTO1/pliego-05.jpg" alt="">
        </div>
        <div class="image">
            <img src="../assets/images/editorial/PROYECTO1/pliego-06.jpg" alt="">
        </div>
    </div>
  </section>
</template>

<style scoped>
.editorial {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}

#pliego{
  display: none;
}

#vw{
  width: 60vw;
}

.images{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}

.image{
  width: 90vw;
}

.image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media(max-width:400px){
  .image{
    width: 98vw;
  }

  #vw{
    width: 98vw;
  }

  #pliego{
  display: initial;
}
  #pliego-first{
  display: none;
}
}
</style>
