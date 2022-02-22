import { createAction } from ".";
import { ADD_PRODUCT, GET_PRODUCT_CAR } from "../types/productType";
import product from "./../../data/accessory.json";
// cách tạo action nhanh rxaction
export const addProductAction = (addProduct) => ({
  type: ADD_PRODUCT,
  addProduct,
});

export const getProduct = () => {
  return (dispatch) => {
    dispatch(createAction(GET_PRODUCT_CAR, product.product.superCarArr));
  };
};
