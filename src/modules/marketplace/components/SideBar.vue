<template>
  <div class="home__sidebar pt-3">
    <div class="input">
      <span class="in">
        <i class="fas fa-search"></i>
        <input type="text" placeholder="Buscar" />
      </span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.home__sidebar {
  height: calc(100vh - 60px);
  background: #404040;
  color: #fffff3;
}

.input {
  display: flex;
  justify-content: center;
  align-items: center;
}

.in {
  border-radius: 15px;
  background-color: #c4c4c4;
}

i {
  margin-left: 5px;
}

input {
  margin-left: 5px;
  border: 0px;
  border-radius: 0 15px 15px 0;
  background-color: #c4c4c4;

  &:focus {
    outline: none;
  }
}
</style>