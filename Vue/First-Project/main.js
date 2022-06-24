var app = new Vue({
    el: '#app',
    data: {
        prevPage: "https://www.google.com/",
        selectedVariant: 0,
        brand: 'Vue Mastery',
        product: 'Socks',
        description: 'The comfiest socks you will ever wear in your life!',
        inventory: 6,
        onSale: true,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor: "green",
                variantQuantity: 10,
                variantImage: "vmSocks-green-onWhite.jpg",
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantQuantity: 0,
                variantImage: "vmSocks-blue-onWhite.jpg",
            }
        ],
        sizes: ["small, medium, large"],
        cart: 0,
    },
    methods: {
        addToCart(){
            this.cart += 1
        },
        removeFromCart(){
            if (this.cart >= 1){
                this.cart -= 1
            }
        },
        updateProduct(index) {
            this.selectedVariant = index
        },
    },
    computed: {
        title() {
            return this.brand + " " + this.product
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity
        },
        sale(){
            if (this.onSale){
                return this.brand + ' ' + this.product + ' ' + 'are on sale!'
            } 
            
            return this.brand + ' ' + this.product + ' ' + 'are not on sale!'
        }
    }
})