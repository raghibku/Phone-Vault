const getStoredCart = () => {
    const storedCartString = localStorage.getItem('cart');
    if(storedCartString){
        return JSON.parse(storedCartString);
    }
    return [];
}

const getStoredOrder = () => {
    const storedOrderString = localStorage.getItem('order');
    if(storedOrderString){
        return JSON.parse(storedOrderString);
    }
    return [];
}

const saveCartToLS = cart => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart',cartStringified);
}

const saveOrderToLS = order => {
    const orderStringified = JSON.stringify(order);
    console.log(orderStringified)
    localStorage.setItem('order',orderStringified);
}

const addToLS = id => {
    const cart = getStoredCart();
    cart.push(id);
    saveCartToLS(cart);
}

const addOrderToLS = () => {
    const prevOrder= getStoredOrder();
    const cart = getStoredCart();
    const order =[...prevOrder,...cart];
    
    console.log(cart);
    console.log(order);
    
    saveOrderToLS(order);
}


const removeFromLS = id => {
    const cart = getStoredCart();
    const remaining = cart.filter((idx => idx.slug !== id.slug));
    saveCartToLS(remaining);
}


export { addToLS , getStoredCart ,removeFromLS, getStoredOrder, addOrderToLS }