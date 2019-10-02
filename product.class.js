class Product {
    constructor(prmUrl) {
        this.getProduct(prmUrl).then((response) => {
            this.product = response; 
        })
    }

    getProduct(prmUrl) {
        return new Promise((resolve, reject) => {
            let request = new XMLHttpRequest(); 
            request.open('GET', prmUrl); 
            request.responseType = 'json'; 

            request.onload = () => {
                if(request.status === 200) {
                    resolve(request.response); 
                } else {
                    reject(Error(request.response)); 
                }
            }

            request.onerror = () => {
                reject(Error('There is a network error')); 
            }

            request.send(); 
        }); 
    }

    updateQuantity(prmQuantity) {
        return this.product.quantity += prmQuantity; 
    }

    updateQuantityOnDOM(prmQuantity, prmElement) {
        let element = document.querySelector(prmElement); 
        element.innerText = this.updateQuantity(prmQuantity); 
    }
}

module.exports = Product; 