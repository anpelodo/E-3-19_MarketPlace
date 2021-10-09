<template>
  <div> 
    <header>Administrar Productos</header> 

    <!-- <delete-product  :id="id"/> -->
    <div class="alert alert-success" role="alert" v-if="alert">
      {{mensaje.texto}} 
    </div>

    
   
    <div class="content-table">

        <table class="table">
            <thead>
              <tr>
                <th scope="col">Codigo</th>
                <th scope="col">Producto</th>
                <th scope="col">Categoria</th>
                <th scope="col">Stock</th>
                <th scope="col">Precio</th>
                <th scope="col"></th>
                
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in productos" :key="index" >
                <th scope="row">{{item._id}}</th>
                <td>{{item.nombre}}</td>
                <td>{{item.categoria}}</td>
                <td>{{item.stock}}</td>
                <td>${{item.precio}}</td>
                <td> 
                  <button class="editButton" type="button" data-bs-toggle="modal" data-bs-target="#editProduct" @click="activarEdicion(item._id)">
                    <i class="iconoEdit fas fa-pen"></i>
                  </button>
                  <button class="deleteButton" type="button" data-bs-toggle="modal" data-bs-target="#deleteProduct"  >
                    <i class="fas fa-trash"></i>
                  </button>
                  <!-- Modal delete-->
        
                  <div class="modal fade" id="deleteProduct" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">Eliminar Producto </h5>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                
        
                          <div class="mb-3">
                            <label for="formGroupExampleInput" class="form-label">¿Desea eliminar este producto <em>{{item.nombre}}</em> ?</label>
                      
                          </div>
                  
                        </div>
                  
                        <div class="modal-footer">
                          <button type="button" class="boton  "  data-bs-dismiss="modal">Cancelar</button>
                          <button type="button" class="boton  " data-bs-dismiss="modal" @click="deleteProduct(item._id)">Eliminar</button>
                        </div>
                      </div>
                    </div>
                  </div>
  
                </td>
                

               
              </tr>
             
    
  
            </tbody>
            
          </table>
      
      
    </div>
    <div class="container">
      <div class="btn-holder">
        <button type="button"  data-bs-toggle="modal" data-bs-target="#addProduct" class="circle" ><i class="fas fa-plus"></i></button>
      </div>
    </div>


    

  </div>
  <!-- Modal crear-->
 <form @submit.prevent="addProducto()" v-if="!alert">

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
         <button type="submit" class="boton  " data-bs-dismiss="modal">Agregar</button>
       </div>
     </div>
   </div>
 </div>
 </form>

   <!-- Modal Editar-->
  <form @submit.prevent="editarProducto(productoEdit)">

   <div class="modal fade " id="editProduct" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
     <div class="modal-dialog modal-dialog-scrollable">
       <form action=""></form>
       <div class="modal-content">
         <div class="modal-header">
           <h5 class="modal-title" id="exampleModalLabel">Editar Producto</h5>
           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
         </div>
         <div class="modal-body">
           <div class="mb-3">
             <label for="formGroupExampleInput" class="form-label">Código</label>
             <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Ingrese código" v-model="productoEdit.codigo">
           </div>
           <div class="mb-3">
             <label for="formGroupExampleInput2" class="form-label">Nombre del Producto</label>
             <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Ingrese nombre del producto" v-model="productoEdit.nombre">
           </div>
           <div class="mb-3">
             <label for="formGroupExampleInput2" class="form-label">Precio</label>
             <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Ingrese precio" v-model="productoEdit.precio">
           </div>
           <div class="mb-3">
             <label for="formGroupExampleInput2" class="form-label">Categoría</label>
             <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Ingrese la categoría del producto" v-model="productoEdit.categoria">
           </div>
           <div class="mb-3">
             <label for="formGroupExampleInput2" class="form-label">Stock</label>
             <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Ingrese stock" v-model="productoEdit.stock">
           </div>
           <div class="mb-3">
             <label for="formGroupExampleInput2" class="form-label">Añadir imagen</label>
             <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Añadir imagen" v-model="productoEdit.img">
           </div>
           <div class="mb-3">
             <label for="formGroupExampleInput2" class="form-label">Descripción</label>
             <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Ingrese la descripción del producto" v-model="productoEdit.descripcion">
           </div>
         </div>
         
         <div class="modal-footer">
           <button type="button" class="boton  " data-bs-dismiss="modal">Cancelar</button>
           <button type="submit" class="boton  " data-bs-dismiss="modal">Editar</button>
         </div>
       </div>
     </div>
   </div>
  </form>
 
</template>

<script>
// import DeleteProduct from "./DeleteProduct.vue"

export default {

  // components: {
  //   DeleteProduct
  // },
  
  data() {
    return {

      alert: false,

      mensaje: {color: 'success', texto: ''}, 

      id: null,
     
      productos:[],

      producto:{
      codigo:'',
      nombre:'',
      precio:'',
      categoria:'',
      stock:'',
      img:'',
      descripcion:''
      }, 

      productoEdit:{}

    }
  },
  created() {
    this.listarProductos();
    // this.addProducto();
  

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
        this.mensaje.texto="Producto Agregado";
        this.alert= true;
         setTimeout(() => this.alert = false, 2000);
      

      })
      .catch(e=>{

        console.log(e.response)

      })
     
    },

    deleteProduct(id){
        this.id = id;
      
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
    activarEdicion(id){
      this.axios.get(`/producto/${id}`)
      .then(res=>{
        this.productoEdit=res.data;


      })
      .catch(e=>{
        console.log(e.response);
      })
    },

    editarProducto(item){
      this.axios.put(`/producto/${item._id}` , item)
      .then(res=>{
        const index= this.productos.findIndex(n=> n._id===res.data._id);
        this.productos[index].codigo=res.data.codigo;
        this.productos[index].nombre=res.data.nombre;
        this.productos[index].precio=res.data.precio;
        this.productos[index].categoria=res.data.categoria;
        this.productos[index].stock=res.data.stock;
        this.productos[index].img=res.data.img;
        this.productos[index].descripcion=res.data.descripcion;
        this.mensaje.texto="Producto Actualizado";
        this.alert= true;
       setTimeout(() => this.alert = false, 2000);

    })
    .catch(e=>{
      console.log(e.response);

    })

  }
  }
  




}
</script>

<style>
  header {
      background: #FF7A00;
      height: 50px;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.75rem;
  }
  .content-table {
    
      margin: 50px 40px;
    
  }
  table {
    
      max-inline-size: 100%;
      margin-right: 100px;
    
  }

  thead {
      background: #C4C4C4;
  }

  tbody {
      background: #F6F6F6;
  }

  .iconoEdit {
      color: #DCD532;
  }


  .container {
      justify-content: space-between;
      flex-direction: column;
      height: 100vh;
      display: flex;
    }
    .container .btn-holder {
      justify-content: flex-end;
      display: flex;

 
    }

    .circle{
      background-color: #FF7A00;
      width: 70px;
      height: 70px;
      border-radius: 50%;
      color: white;

    }

    .editButton {
      border: none;
    }

    .deleteButton {
      border: none;
    }

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