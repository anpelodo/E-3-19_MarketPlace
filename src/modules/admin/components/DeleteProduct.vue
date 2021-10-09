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
            <label for="formGroupExampleInput" class="form-label">¿Desea eliminar este producto ?</label>
                
          </div>
             
        </div>
            
        <div class="modal-footer">
          <button type="button" class="boton  "  data-bs-dismiss="modal">Cancelar</button>
          <button type="button" class="boton  " data-bs-dismiss="modal" @click="deleteProduct(id)">Eliminar</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>


export default {
  props:[
    
    "id"
  ],
  data() {
    return {

      productos:[]

    }
  },
  created() {
    this.listarProductos();
  

  },

  methods: {

    listarProductos(){
      this.axios.get('/producto')
      .then(res=>{
        this.productos=res.data;


      })
      .catch(e=>{

        console.log(e.response)

      })

    },
     deleteProduct(id){
       
      
        console.log(id)
         this.axios.delete(`/producto/${id}`)
        .then(res=>{
          console.log(res.data._id);
          const {id:newId, status } = res.data;
          if (status){

            const index = this.productos.findIndex(item=> item._id===newId);
            this.productos.splice(index, 1);
            this.mensaje.texto="Producto Eliminado";
            this.alert= true;
            setTimeout(() => this.alert = false, 2000);
          }
          /*res.data._id*/
        
  
         })
        .catch(e => {
  
          console.log(e.response)
        })
      


    },

  }
   

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