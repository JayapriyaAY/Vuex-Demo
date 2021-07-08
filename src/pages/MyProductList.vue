<template>
  <div>
      <div class="p-5 text-center" v-if="cart.length == 0">
        <h2>No Products Added Yet</h2>
      </div>
      <div v-else  class="d-flex align-items-stretch flax-wrap row">
        <my-product-cart v-for="item in cart" :key="item.product.id" :cart="item.product">
         
        </my-product-cart>
      </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import MyProductCart from '../components/MyProductCart.vue'
export default {
  name: "MyProductList",
  components : {
    MyProductCart
  },
  computed: {
    ...mapState({
      cart: (state) => state.cart.cart,
    }),
  },

};
</script>
