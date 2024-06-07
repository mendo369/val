<!-- <script setup></script>

<template>
  <nav>
    <div class="logo" @click="()=>$router.push('/')"><span>Val.</span></div>
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
</style> -->
<script setup>
import { ref } from 'vue';

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>

<template>
  <nav>
    <div class="logo" @click="() => $router.push('/')"><span>Val.</span></div>
    <div class="hamburger" @click="toggleMobileMenu">
      <div :class="{'line': true, 'open': isMobileMenuOpen}"></div>
      <div :class="{'line': true, 'open': isMobileMenuOpen}"></div>
      <div :class="{'line': true, 'open': isMobileMenuOpen}"></div>
    </div>
    <div :class="['nav-links', { 'open': isMobileMenuOpen }]">
      <ul>
        <li class="nav-link">
          <router-link to="/" active-class="active">Home</router-link>
        </li>
        <li class="nav-link">
          <router-link to="/fotografia" active-class="active">Fotografía</router-link>
        </li>
        <li class="nav-link">
          <router-link to="/editorial" active-class="active">Editorial</router-link>
        </li>
        <li class="nav-link">
          <router-link to="/identidad-de-marca" active-class="active">Identidad de marca</router-link>
        </li>
        <li class="nav-link">
          <router-link to="/about-me" active-class="active">About me</router-link>
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
  cursor: pointer;
}

.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 5px;
}

.hamburger .line {
  width: 25px;
  height: 3px;
  background-color: black;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.hamburger .line.open:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.hamburger .line.open:nth-child(2) {
  opacity: 0;
}

.hamburger .line.open:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 20px;
}

.nav-links ul {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 20px;
}

.nav-link .active {
  border-bottom: 2px solid black;
}

@media (max-width: 400px) {
  .hamburger {
    display: flex;
  }

  .nav-links {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: white;
    padding: 20px 0;
    box-shadow: 0px 0px 5px gray;
  }

  .nav-links.open {
    display: flex;
    z-index: 1000;
  }

  .nav-links ul {
    flex-direction: column;
    gap: 10px;
  }
}
</style>
