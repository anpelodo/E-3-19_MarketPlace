<template>
  <div class="signform-container">
    <h3>Crear una cuenta es gratis.</h3>
    <form class="form-container">
      <div class="name-lastname">
        <input type="text" placeholder="Nombre" />
        <input type="text" placeholder="Apellido" />
      </div>
      <div class="next-inputs">
        <input type="text" placeholder="Nombre de usuario" />
        <input type="text" placeholder="Correo electronico" />
        <input type="password" placeholder="Contraseña" />
        <input type="date" />
      </div>
      <button @click.prevent="" class="continue">Continuar</button>
      <small
        >Si continúas, indicas que estás de acuerdo con los Términos de Uso y
        confirmas que has leído los Política de Privacidad.</small
      >
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

    .name-lastname {
      display: flex;
      justify-content: space-between;
      gap: 0.3rem;

      input {
        width: 50%;
      }

      @media screen and (max-width: 680px) {
        flex-wrap: wrap;

        input {
          width: 100%;
        }
      }
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

    small {
      color: #999;
    }

    @media screen and (max-width: 680px) {
      padding: 0rem 2rem;
    }
  }
}
</style>