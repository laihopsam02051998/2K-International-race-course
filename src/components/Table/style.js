import { createUseStyles } from "react-jss";

export const useStyleTable = createUseStyles({
  tableCart: {
    marginRight: "1rem",
    "& table": {
      border: "none",
      borderRadius: "10px",
      backgroundColor: "white",
      boxShadow: "0 0 40px #C0C0C0",
      padding: "0rem 1rem",
    },
    "& td, th": {
      //   border: "1px solid black",
      borderCollapse: "collapse",
      padding: "1rem",
    },
  },
  productName: {
    width: "30rem",
    height: "100%",
    "& rem": {
      fontSize: "1.5rem",
      margin: "0rem",
    },
  },
  productType: {
    color: "gray",
  },
});
