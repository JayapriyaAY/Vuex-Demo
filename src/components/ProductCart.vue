<template>
       <div class="col-3 mt-3">
    <div class="card h-100 ">
      <div class="p-2 text-center">
      <img  :src="product.img" alt style="height : 200px; width : 200px" /> 
      </div>
      <!-- :src="product.image" -->
      <div class="card-body" >
        <h4 class="card-title text-left">
          <router-link :to="{name: 'product', params: {id: product.id}}"> {{product.title}} </router-link>
        </h4>
        <br>
       <div class="card-text"> <strong >₹ {{product.price}}</strong></div>
        <p class="card-text">{{product.description}}</p>
      </div>
      <div class="px-4 pb-3">
        <button class="btn btn-secondary" @click="addToCart" >Add to Cart</button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
name : 'ProductCart',
props : ["product"],
methods : {
  ...mapActions('cart',['addProductToCart']),
    addToCart () {
this.addProductToCart( {product : this.product, quantity : 1})
  }

}
// methods : {
//   addToCart () {
//     this.$store.dispatch("addProductToCart" ,{
//       product : this.product,
//       quantity : 1
//     })
//   }
// }
}
</script>

