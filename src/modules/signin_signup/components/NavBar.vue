<template>
  <nav class="marketplace_nav">
    <div class="nav_left">
      <a class="pointer">
        <img class="img" :src="require('/src/assets/Logo.png')" alt="" />
      </a>
    </div>

    <div class="nav_right">
      <p>¿Ya tienes una cuenta? <span class="pointer">Iniciar sesión</span></p>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.img {
  height: 2.5rem;
}

.marketplace_nav {
  align-items: center;
  background: var(--orange);
  display: flex;
  height: 3.5rem;
  justify-content: space-between;
  padding: 0.3rem 0rem;
}

.nav_left,
.nav_right {
  display: flex;
  flex-wrap: nowrap;
}

.nav_left {
  margin-left: 2rem;
}

p {
  margin: 0;
  color: var(--white);

  span {
    font-weight: bold;
  }
}

.nav_right {
  margin-right: 2rem;
  display: flex;
  align-items: center;
}
</style>