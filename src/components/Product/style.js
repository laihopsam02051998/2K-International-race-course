import { createUseStyles } from "react-jss";

const useStyleProduct = createUseStyles({
  productContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    overflow: "hidden",
    boxSizing: "borderBox",
    backgroundColor: "white",
    padding: "0rem 1rem",
  },
  productTitle: {
    height: "8rem",
    "& h3": {
      overflow: "hidden",
      display: "-webkit-box",
      WebkitLineClamp: "4",
      WebkitBoxOrient: "vertical",
    },
  },
  product: {
    textAlign: "left",
    overflow: "hidden",
    height: "28rem",
    width: "22rem",
  },

  product__image: {
    height: "12rem",
    "& img": {
      width: "100%",
      height: "100%",
      display: "block",
      objectFit: "cover",
    },
  },

  productContentButton: {},
});
export default useStyleProduct;
