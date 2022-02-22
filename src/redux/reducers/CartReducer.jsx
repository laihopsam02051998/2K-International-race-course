const stateCart = {
  cart: [
    {
      id: "ps0182",
      productName: "laihopsam",
      quanlity: 10,
      priceSale: 2000,
      price: 4000,
    },
  ],
};

const CartReducer = (state = stateCart, action) => {
  return { ...state };
};

export default CartReducer;
