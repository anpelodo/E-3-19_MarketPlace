<template>
  <!-- <router-view></router-view> -->
  <Admin/>
  <add-product/>
  <delete-product/>
  <edit-product/>
</template>

<script>
// import Counter from './components/Counter.vue'
import Admin from './modules/admin/components/Admin.vue'
import AddProduct from './modules/admin/components/AddProduct.vue'
import DeleteProduct from './modules/admin/components/DeleteProduct.vue'
import EditProduct from './modules/admin/components/EditProduct.vue'



export default {
  
  name: 'App',
  components: {
    //Counter,
    Admin,
    AddProduct,
    DeleteProduct,
    EditProduct
   

  }
  
}
</script>