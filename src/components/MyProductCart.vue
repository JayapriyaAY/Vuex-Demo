<template>
    <div class="col-3 mt-3">
      <div class="card h-100">
        <div class="p-2 text-center">
          <img :src="cart.img" alt style="height: 200px; width: 200px" />
        </div>
        <div class="card-body">
          <h4 class="card-title">
            <router-link :to="{ name: 'product', params: { id: cart.id } }"
              >{{ cart.title }}
            </router-link>
          </h4>
          <br />
          <div class="card-text">
            <strong>₹ {{ cart.price }}</strong>
          </div>
          <p class="card-text">{{ cart.description }}</p>
        </div>
        <div class="px-4 pb-3">
          <button
            class="btn btn-secondary"
            @click.prevent="removeProductFromCart(cart)"
          >
            Remove from Cart
          </button>
        </div>
      </div>
    </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "MyProductCart",
  props: ["cart"],

  methods: {
    ...mapActions("cart", ["removeProductFromCart"]),
  },
};
</script>
