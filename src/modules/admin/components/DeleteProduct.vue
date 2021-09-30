<template>
   <!-- Modal -->
  <div class="modal fade" id="deleteProduct" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Eliminar Producto</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="formGroupExampleInput" class="form-label">¿Desea eliminar este producto?</label>
                
          </div>
             
        </div>
            
        <div class="modal-footer">
          <button type="button" class="boton  " data-bs-dismiss="modal">Cancelar</button>
          <button type="button" class="boton  ">Eliminar</button>
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
   .modal-header {
      background-color: #FF7A00;
      color: white;
  }

  .boton {
      background-color: #FF7A00  ;
      color: white;
      border-radius: 8px;
      box-shadow: none;
      border: 0;
      width: 100px;
      height: auto;
    
  }
</style>