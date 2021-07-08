<template>
    <div>
   <div class="row mt-5" v-if="product">
       <div class="col-4">
           <img :src="product.img" class="w-100">
       </div>
       <div class="col-8">
           <h1>{{ product.title}} </h1>
           <h3>₹{{product.price}}</h3>
           <div class="row">
               <div class="col-1">
           <input type="text" v-model.number="quantity" class="form-control mr-2 p-1 text-center" >
               </div>
               <div class="col">
           <button class="btn btn-primary" @click="addToCart" >Add to cart </button>
               </div>
           </div>
           <p>{{ product.description}} </p>
       </div>
   </div>
    </div>
</template>
<script>
import { mapActions,mapState } from 'vuex'
export default {
name : 'Product',
props : ['id'],
data () {
    return {
        quantity : 1
    }
},
computed : {
    ...mapState('product',['product']),
    //   cart: (state) => state.cart.cart,
//  ...mapState({
//      product : state => state.product.product
//  })
},
mounted () {
    this.getProduct(this.id)
    console.log(  this.getProduct(this.id))
},
methods : {
    ...mapActions('product',['getProduct']),
      ...mapActions('cart',['addProductToCart']),
    addToCart() {
        this.addProductToCart({ product : this.product, quantity : this.quantity})
    }
},
// computed: {
//     product() {
//         return this.$store.state.product
//     }
// },
// mounted() {
//     this.$store.dispatch('getProduct',this.id)
// },
// methods: {
//     addToCart() {
//             this.$store.dispatch("addProductToCart" ,{
//       product : this.product,
//       quantity : 1
//     })
//     }
// }
}
</script>