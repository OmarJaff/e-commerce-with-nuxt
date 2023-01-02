import { defineStore } from "pinia";

const shop = defineStore('shop', {
    state() {
        return {
            allProducts: [],
            featuredProducts: [],
            menProducts: [],
            womenProducts: [],
            cartItems: [],
        }
    },

    actions: {
         addItemToCart(cartItem) {
            this.cartItems.push(cartItem);
        },
        removeItemFromCart(id) {
            this.cartItems.splice(this.cartItems.findIndex((el) => el.id === id),1)
        }
    }
})