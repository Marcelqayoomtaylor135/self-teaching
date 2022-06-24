var app = new Vue({
    el: '#app',
    data: {
        prevPage: "https://www.google.com/",
        image: "vmSocks-green-onWhite.jpg",
        product: 'Socks',
        description: 'The comfiest socks you will ever wear in your life!',
        inventory: 6,
        onSale: true,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor: "green",
                variantImage: "vmSocks-green-onWhite.jpg"
            },
            {
                variantId: 2235,
                variantColor: "blue",
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
        updateProduct(variantImage) {
            this.image = variantImage
        },
        
    }
})