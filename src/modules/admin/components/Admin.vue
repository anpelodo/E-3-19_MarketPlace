<template>
  <div> 
    <header>Administrar Productos</header> 
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
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">001</th>
                <td>text</td>
                <td>text</td>
                <td>10</td>
                <td>$100</td>
                <td> 
                  <button class="editButton" type="button" data-bs-toggle="modal" data-bs-target="#editProduct">
                    <i class="iconoEdit fas fa-pen"></i>
                  </button>
                </td>
                <td>
                  <button class="deleteButton" type="button" data-bs-toggle="modal" data-bs-target="#deleteProduct">
                    <i class="fas fa-trash"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">002</th>
                <td>text</td>
                <td>text</td>
                <td>10</td>
                <td>$100</td>
                <td> 
                  <button class="editButton" type="button" data-bs-toggle="modal" data-bs-target="#editProduct">
                    <i class="iconoEdit fas fa-pen"></i>
                  </button>
                </td>
                <td>
                  <button  class="deleteButton" type="button" data-bs-toggle="modal" data-bs-target="#deleteProduct">
                    <i class="fas fa-trash"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">003</th>
                <td>text</td>
                <td>text</td>
                <td>10</td>
                <td>$100</td>
                <td> 
                  <button class="editButton" type="button" data-bs-toggle="modal" data-bs-target="#editProduct">
                    <i class="iconoEdit fas fa-pen"></i>
                  </button>
                </td>
                <td>
                  <button class="deleteButton" type="button" data-bs-toggle="modal" data-bs-target="#deleteProduct">
                    <i class="fas fa-trash"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">004</th>
                <td>text</td>
                <td>text</td>
                <td>10</td>
                <td>$100</td>
                <td> 
                  <button class="editButton" type="button" data-bs-toggle="modal" data-bs-target="#editProduct">
                    <i class="iconoEdit fas fa-pen"></i>
                  </button>
                </td>
                <td>
                  <button class="deleteButton" type="button" data-bs-toggle="modal" data-bs-target="#deleteProduct">
                    <i class="fas fa-trash"></i>
                  </button>
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
</template>

<script>
export default {

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

</style>