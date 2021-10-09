<template>


  <!-- Modal -->
  <form @submit.prevent="addProducto()">

  <div class="modal fade " id="addProduct" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable">
      <form action=""></form>
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Agregar Producto</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="formGroupExampleInput" class="form-label">Código</label>
            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Ingrese código" v-model="producto.codigo">
          </div>
          <div class="mb-3">
            <label for="formGroupExampleInput2" class="form-label">Nombre del Producto</label>
            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Ingrese nombre del producto" v-model="producto.nombre">
          </div>
          <div class="mb-3">
            <label for="formGroupExampleInput2" class="form-label">Precio</label>
            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Ingrese precio" v-model="producto.precio">
          </div>
          <div class="mb-3">
            <label for="formGroupExampleInput2" class="form-label">Categoría</label>
            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Ingrese la categoría del producto" v-model="producto.categoria">
          </div>
          <div class="mb-3">
            <label for="formGroupExampleInput2" class="form-label">Stock</label>
            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Ingrese stock" v-model="producto.stock">
          </div>
          <div class="mb-3">
            <label for="formGroupExampleInput2" class="form-label">Añadir imagen</label>
            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Añadir imagen" v-model="producto.img">
          </div>
          <div class="mb-3">
            <label for="formGroupExampleInput2" class="form-label">Descripción</label>
            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Ingrese la descripción del producto" v-model="producto.descripcion">
          </div>
        </div>
            
        <div class="modal-footer">
          <button type="button" class="boton  " data-bs-dismiss="modal">Cancelar</button>
          <button type="submit" class="boton  ">Agregar</button>
        </div>
      </div>
    </div>
  </div>
  </form>
</template>

<script>
export default {
  data() {
    return {

       productos:[],

      producto:{
        codigo:'',
        nombre:'',
        precio:'',
        categoria:'',
        stock:'',
        img:'',
        descripcion:''

      }

    }
  },
  created() {
    // this.listarProductos();
    this.addProducto();

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

    addProducto(){
      this.axios.post('/nuevo-producto', this.producto)
      .then(res=>{

        this.productos.push(res.data);
        this.producto.codigo="";
        this.producto.nombre="";
        this.producto.precio="";
        this.producto.categoria="";
        this.producto.stock="";
        this.producto.img="";
        this.producto.descripcion="";


      })
      .catch(e=>{

        console.log(e.response)

      })

    }

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