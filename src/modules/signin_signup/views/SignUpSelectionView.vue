<template>
  <div class="sign-container">
    <div class="selection-container">
      <h3>Crear una cuenta es gratis.</h3>
      <button @click="$router.push({ name: 'sign-form' })" class="continue">
        <i class="far fa-envelope"></i>
        Continuar con correo
      </button>
      <small class="conditions"
        >Si continúas, indicas que estás de acuerdo con los Términos de Uso y
        confirmas que has leído las Política de Privacidad.</small
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.sign-container {
  display: flex;
  justify-content: center;

  .selection-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 89vh;
    justify-content: center;
    gap: 2rem;
    max-width: 30rem;

    .conditions {
      color: #999;
    }

    .continue {
      width: 100%;
      border: 1px solid var(--orange);
      background: var(--white);
      font-size: 1.5rem;
      display: flex;
      justify-content: center;
      gap: 2rem;

      i {
        height: 100%;
        display: flex;
        align-items: center;
      }

      &:hover {
        background: var(--orange);
        color: var(--white);
        transition: 0.3s;
      }
    }
  }
}
</style>