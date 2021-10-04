<template>
   <!-- Modal -->
  <div class="modal fade" id="editProduct" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Editar Producto</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="formGroupExampleInput" class="form-label">Código</label>
            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Ingrese código">
          </div>
          <div class="mb-3">
            <label for="formGroupExampleInput2" class="form-label">Nombre del Producto</label>
            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Ingrese nombre del producto">
          </div>
          <div class="mb-3">
            <label for="formGroupExampleInput2" class="form-label">Precio</label>
            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Ingrese precio">
          </div>
          <div class="mb-3">
            <label for="formGroupExampleInput2" class="form-label">Categoría</label>
            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Ingrese la categoría del producto">
          </div>
          <div class="mb-3">
            <label for="formGroupExampleInput2" class="form-label">Stock</label>
            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Ingrese stock">
          </div>
          <div class="mb-3">
            <label for="formGroupExampleInput2" class="form-label">Añadir imagen</label>
            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Añadir imagen">
          </div>
          <div class="mb-3">
            <label for="formGroupExampleInput2" class="form-label">Descripción</label>
            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Ingrese la descripción del producto">
          </div>
        </div>
            
        <div class="modal-footer">
          <button type="button" class="boton  " data-bs-dismiss="modal">Cancelar</button>
          <button type="button" class="boton  ">Editar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>