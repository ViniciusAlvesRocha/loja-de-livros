const INITIAL_STATE = {
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  console.log(`reducer:${action.payload?.item}`);
  switch (action.type) {
    case 'ADD_ITEM_TO_CART':
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload.item],
      }
    default:
      return state;
  }
};

export default cartReducer;
