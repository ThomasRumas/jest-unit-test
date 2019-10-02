const Product = require('../product.class'); 
jest.mock('../product.class'); 

var MyProduct = new Product("https://www.example.com/getProduct"); 

test('Test if product name is "Ponceuse" and that we have a Product instance', () => {
    expect(MyProduct).toBeInstanceOf(Product); 
    expect(MyProduct.product.name).toBe('Ponceuse'); 
});

test('Trying to add 6 to default quantity and verify it will be 7', () => {
    expect(MyProduct.updateQuantity(6)).toBe(7); 
});

test('Use Jest on DOM elemnt', () => {
    document.body.innerHTML =
    '<div>' +
    '  <input id="quantity" type="text" value="Michel"/>' +
    '  <button id="button" />' +
    '</div>';

    function eventFire(el, etype){
        if (el.fireEvent) {
            el.fireEvent('on' + etype);
        } else {
            var evObj = document.createEvent('Events');
            evObj.initEvent(etype, true, false);
            el.dispatchEvent(evObj);
        }
    }

    document.getElementById('button').addEventListener('click', function() {
        MyProduct.updateQuantityOnDOM(1,'#quantity'); 
    }); 

    eventFire(document.getElementById('button'), 'click');

    expect(document.getElementById('quantity').value).toEqual('8'); 
}); 
