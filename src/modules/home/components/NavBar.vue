<template>
  <nav class="home__navbar" style="color: #fffff3">
    <div class="left pointer">
      <i class="fab fa-xing-square icono"></i>
      <a class="title">Marketplace</a>
    </div>
    <div class="right pointer">
      <i class="far fa-user"></i>
      <a style="margin-left: 10px">Login</a>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.home__navbar {
  width: 100%;
  height: 60px;
  background: #404040;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.left {
  margin-left: 30px;
}

.right {
  margin-right: 30px;
}

a {
  text-decoration: none;
  color: #fffff3;
}

.icono,
.title {
  font-size: 40px;
  margin-right: 3px;
}
</style>