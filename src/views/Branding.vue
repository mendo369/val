<script setup>
</script>

<template>
    <section class="branding">
        <div class="title">
            <h1>IDENTIDAD DE MARCA</h1>
        </div>
        <div class="description">
            <p>Cada identidad visual está diseñada para conectar profundamente con el público.</p>
        </div>
        <div class="images">
            <div class="image"><img src="../assets/images/identidad/PORTADABOLI.png" alt=""></div>
            <div class="image"><img src="../assets/images/identidad/PORTADA CORONA.png" alt=""></div>
            <div class="image"><img src="../assets/images/identidad/PORTADA NUCITA.png" alt=""></div>
            <div class="image"><img src="../assets/images/identidad/Levael-03.jpg" alt=""></div>
            <div class="image"><img src="../assets/images/identidad/Ultima-Gelicu.jpg" alt=""></div>
        </div>
    </section>
</template>

<style scoped>
.branding{
    display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
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
</style>