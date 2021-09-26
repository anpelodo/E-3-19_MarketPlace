<template>
  <nav class="marketplace_nav">
    <div class="nav_left">
      <a class="bars pointer">
        <i class="fas fa-bars"></i>
        <!-- <span>categorias</span> -->
      </a>
      <a class="pointer">
        <img class="img" :src="require('/src/assets/Logo.png')" alt="">
      </a>
    </div>

    <input type="text" placeholder="Buscar en Marketplace" />

    <div class="nav_right">
      <a class="pointer">
        <i class="fas fa-shopping-cart"></i>
      </a>
      <a class="pointer">
        <i class="fas fa-user-circle"></i>
      </a>
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

.marketplace_nav input {
  border-radius: 1rem;
  border: none;
  height: 2rem;
  outline: none;
  padding: 0rem 1rem;
  width: 35rem;

  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 24px;
}

.marketplace_nav i {
  color: var(--white);
  font-size: 2rem;
}

.marketplace_nav .nav_left i {
  margin-right: 1rem;
}

.marketplace_nav .nav_right i {
  margin-left: 1rem;
}

.nav_left,
.nav_right {
  display: flex;
  flex-wrap: nowrap;
}

.nav_left {
  margin-left: 2rem;
}

.nav_right {
  margin-right: 2rem;
}

// .marketplace_nav .bars {
//   display: flex;
//   flex-direction: column;
//   flex-wrap: nowrap;
//   height: 2rem;
//   align-items: center;
// }

// .marketplace_nav .bars i {
//   font-size: 1rem;
// }

// .bars span {
//   font-size: 0.8rem;
// }
</style>