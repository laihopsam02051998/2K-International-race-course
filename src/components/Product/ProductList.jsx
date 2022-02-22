import { React } from "react";
import Product from ".";
import useStyleProduct from "./style";
import { useSelector } from "react-redux";
function ProductList(props) {
  const classes = useStyleProduct();

  let product = useSelector((state) => state.ProductReducer.product);

  return (
    <div className={classes.productContainer}>
      {product.map((item) => (
        <Product product={item} key={item.id} />
      ))}
    </div>
  );
}
// const mapStateToProp = (state) => {
//   return {
//     product: state.ProductReducer.product,
//   };
// };

export default ProductList;
