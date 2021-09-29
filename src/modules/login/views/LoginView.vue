<template>
  <div class="signform-container">
    <h3>Bienvenido de nuevo.</h3>
    <form class="form-container">
      <div class="next-inputs">
        <input type="text" placeholder="Correo electronico" />
        <input type="password" placeholder="Contraseña" />
      </div>
      <button @click.prevent="" class="continue">Continuar</button>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.signform-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 89vh;

  .form-container {
    display: flex;
    flex-direction: column;
    width: 30rem;
    gap: 0.3rem;

    input,
    button {
      border: 1px solid var(--orange);
      height: 2.5rem;
      font-size: 1.3rem;
      outline: none;
    }

    input {
      padding: 0rem 0.5rem;
    }

    input:focus {
      border: 2px solid var(--orange);
    }

    .next-inputs {
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
    }

    .continue {
      background: var(--orange);
      border: var(--orange);
      color: white;

      &:hover {
        background: var(--hover);
      }
    }

    @media screen and (max-width: 680px) {
      padding: 0rem 2rem;
    }
  }
}
</style>