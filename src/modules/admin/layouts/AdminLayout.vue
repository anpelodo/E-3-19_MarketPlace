<template>
  <!-- <router-view></router-view> -->
  <nav-bar/>
  <br>
  <Admin/>
  <!-- <add-product/> -->
  <!-- <delete-product/> -->
  <!-- <edit-product/> -->

</template>

<script>
// import Counter from './components/Counter.vue'
import Admin from '../components/Admin.vue'
// import AddProduct from '../components/AddProduct.vue'
// import DeleteProduct from '../components/DeleteProduct.vue'
// import EditProduct from '../components/EditProduct.vue'
import NavBar from '../components/NavBar.vue'




export default {
  
 
  components: {
    //Counter,
    Admin,
    
    NavBar
    
   

  }
  
}
</script>