<template>
<div>
   <!-- <notifications-list></notifications-list> -->
  <div class="d-flex align-items-stretch flax-wrap row">
    <product-cart v-for="product in products" :key="product.id" :product="product"> </product-cart> 
  
  </div>
</div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
// import NotificationsList from './NotificationsList.vue'
import ProductCart from "./ProductCart.vue";
export default {
  name: "ProductList",
  components: {
    ProductCart,
    // NotificationsList
  },
  computed : {
    // without using module
    // ...mapState(['products'])
    //using module
    // ...mapState({
    //   products : state => state.product.products
    // })
    ...mapState('product',['products'])
  },
  mounted () {
      this.getProducts()
  },
  methods : {
    ...mapActions('product', ['getProducts'])
  }
  // computed : {
  //   products () {
  //     return this.$store.state.products
  //   }
  // },
  // mounted () {
  //   this.$store.dispatch('getProducts')
  // }
};
</script>