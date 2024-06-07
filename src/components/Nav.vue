<script setup></script>

<template>
  <nav>
    <div class="logo"><span>Val.</span></div>
    <div class="nav-links">
      <ul>
        <li class="nav-link">
          <router-link to="/" active-class="active">Home</router-link>
        </li>
        <li class="nav-link">
          <router-link to="/fotografia" active-class="active"
            >Fotografía</router-link
          >
        </li>
        <li class="nav-link">
          <router-link to="/editorial" active-class="active"
            >Editorial</router-link
          >
        </li>
        <li class="nav-link">
          <router-link to="/identidad-de-marca" active-class="active"
            >Identidad de marca</router-link
          >
        </li>
        <li class="nav-link">
          <router-link to="/about-me" active-class="active"
            >About me</router-link
          >
        </li>
      </ul>
    </div>
    <div class="nav-links-mobile">
      <ul>
        <li class="nav-link">
          <router-link to="/" active-class="active"><img src="../assets/icons/home.png" alt=""></router-link>
        </li>
        <li class="nav-link">
          <router-link to="/fotografia" active-class="active"
            ><img src="../assets/icons/fotos.png" alt=""></router-link
          >
        </li>
        <li class="nav-link">
          <router-link to="/editorial" active-class="active"
            ><img src="../assets/icons/editorial.png" alt=""></router-link
          >
        </li>
        <li class="nav-link">
          <router-link to="/identidad-de-marca" active-class="active"
            ><img src="../assets/icons/identidad.png" alt=""></router-link
          >
        </li>
        <li class="nav-link">
          <router-link to="/about-me" active-class="active"
            ><img src="../assets/icons/me.png" alt=""></router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid black;
  box-shadow: 0px 0px 5px gray;
}

.logo span {
  font-weight: bold;
}

.nav-links-mobile{
  display: none;
}

.nav-links ul, .nav-links-mobile ul {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 20px;
}

.nav-links-mobile ul li img{
  width: 24px;
  height: 24px;
}

.active {
  border-bottom: 2px solid black;
}

@media (max-width: 400px) {
  .nav-links {
    display: none;
  }

  .nav-links-mobile{
  display: initial;
}
}
</style>
