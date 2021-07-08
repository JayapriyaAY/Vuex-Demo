<template>
  <div>
    <!-- <li class="nav-item dropdown"> -->

    <div
      class="dropdown-menu dropdown-menu-lg dropdown-menu-right align-center"
      style="width: 250px"
    >
      <div v-for="item in cart" :key="item.product.id">
        <a href="#" class="dropdown-item">
          <!-- Message Start -->
          <div class="media">
            <div class="media-body">
              <h3 class="dropdown-item-title">
                {{ item.product.title }}
                <br />
                {{ item.quantity }} x ₹ {{ item.product.price }}
              </h3>
              <a
                href="#"
                class="budge budge-secondary float-right"
                @click.prevent="removeProductFromCart(item.product)"
                >remove</a
              >
            </div>
          </div>
          <!-- Message End -->
        </a>
        <div class="dropdown-divider"></div>
      </div>

      <router-link to="/" class="dropdown-item">
        <div class="media">
          <div class="media-body">
            <span>Total: ₹ {{ cartTotalPrice }} </span>

            <a href="#" class="float-right" @click="clearCartItems"
              >Clear Cart</a
            >
          </div>
        </div>
        <!-- <div class="d-flux justify-content-between"> -->

        <!-- </div> -->

        <!-- Message End -->
      </router-link>
    </div>
    <!-- </li> -->
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  name: "MiniCart",
  computed: {
    ...mapState({
      cart: (state) => state.cart.cart,
    }),
    ...mapGetters("cart", ["cartTotalPrice"]),
    // ...mapGetters({
    //   cartTotalPrice : 'cart/cartTotalPrice'
    // })
    // ...mapState(['cart']),
    // ...mapGetters(['cartTotalPrice'])
  },
  methods: {
    ...mapActions("cart", ["removeProductFromCart", "clearCartItems"]),

  },
  // computed: {
  //   cart() {
  //     return this.$store.state.cart;
  //   },
  //   cartTotalPrice() {
  //     return this.$store.getters.cartTotalPrice;
  //   },
  // },

  // methods: {
  //   removeProductFromCart(product) {
  //     this.$store.dispatch("removeProductFromCart", product);
  //   },
  //   clearCartItems() {
  //     this.$store.dispatch("clearCartItems");
  //   },
  // },
};
</script>