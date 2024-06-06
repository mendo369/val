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

.nav-links ul {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 20px;
}

.active {
  border-bottom: 2px solid black;
}
</style>
