const getProduct = {
    name: "Ponceuse",
    quantity: 1
}

class Product {
    constructor() {
        this.product = getProduct; 
    }

    updateQuantity(prmQuantity) {
        return this.product.quantity += prmQuantity; 
    }

    updateQuantityOnDOM(prmQuantity, prmElement) {
        let element = document.querySelector(prmElement); 
        element.value = this.updateQuantity(prmQuantity); 
    }
}

module.exports = Product; 