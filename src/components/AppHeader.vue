<template>
  <div>
      
  <nav class=" navbar navbar-expand  navbar-dark">
      <div class="container" >
                         <!-- Left navbar links -->
              <div class="nav navbar-nav">
                      <!-- <ul > -->
      <!-- <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
      </li> -->
      <!-- <li class="nav-item d-none d-sm-inline-block"> -->
        <router-link to="/" class="nav-item nav-link">Home</router-link>
      <!-- </li>
      <li class="nav-item d-none d-sm-inline-block"> -->
        <router-link to="/product" class="nav-item nav-link">Product</router-link>
      <!-- </li> -->
    <!-- </ul> -->
              </div>
                          <div class="navbar-nav ml-auto" >
<div class="dropdown open">
      <button
      class="btn btn-secondary btn-toggle"
      id="triggerId"
      type="button"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      {{cartItemCount}} Cart
    </button>
    <div  @click="$event.stopPropagation()">
<mini-cart ></mini-cart>
    </div>
</div>
                          </div>
       

      </div>


  </nav>
  </div>
</template>
<script>
import {  mapGetters } from 'vuex'
import MiniCart from './MiniCart.vue'

export default {
    name : 'AppHeader',
    components : {
MiniCart
    },
    // computed : {
    //   cartItemCount() {
    //     return this.$store.getters.cartItemCount
    //   }
    // }
    // computed : mapGetters (['cartItemCount'])
    computed : {
   
      ...mapGetters('cart',['cartItemCount'])
    }
}
        
</script>
