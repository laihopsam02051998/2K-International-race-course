import { ADD_PRODUCT, GET_PRODUCT_CAR } from "../types/productType";

const initProductState = {
  product: [],
};

const ProductReducer = (state = initProductState, action) => {
  switch (action.type) {
    case ADD_PRODUCT: {
      state.product = [...state.product, action.addProduct];

      return { ...state };
    }
    case GET_PRODUCT_CAR: {
      state.product = [...action.payload];

      return { ...state };
    }
    default:
      break;
  }

  return { ...state };
};

export default ProductReducer;
