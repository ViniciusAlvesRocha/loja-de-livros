const addItemToCart = (item) => {
    console.log(item);
    return ({
    type: 'ADD_ITEM_TO_CART',
    payload: {
        item,
    }
});
}

export default addItemToCart;