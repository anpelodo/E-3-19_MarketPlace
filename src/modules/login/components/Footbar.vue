<template>
  <div class="footbar-container">
    <footer class="footer">
      <div class="contact">
        <h3>Contacto</h3>
        <div>
          <p>Persona 1</p>
          <p>email: persona@mail.com</p>
        </div>
        <div>
          <p>Persona 1</p>
          <p>email: persona@mail.com</p>
        </div>
      </div>
      <div class="about">
        <h3>Acerca de</h3>
        <p class="pointer">Acerca de marketplace</p>
        <p class="pointer">Condiciones de uso</p>
        <p class="pointer">Condiciones de uso</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footbar-container {
  margin-top: 2rem;
  border-top: 1px solid;
  border-color: #999999cc;
  min-height: 20vh;
}

.footer {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 9rem;
  justify-content: center;
  margin-top: 3rem;

  @media screen and (max-width: 680px) {
    align-items: center;
    flex-direction: column;
    gap: 0.5rem;
  }
}

.footer h3 {
  color: var(--orange);
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.footer p {
  color: #999;
}

.about p:hover {
  color: var(--orange);
}

.contact,
.about {
  padding: 1rem;
}
</style>