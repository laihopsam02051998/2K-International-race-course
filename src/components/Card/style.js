import { createUseStyles } from "react-jss";

export const styleNews = createUseStyles({
  containerListCard: {
    display: "grid",
    gridTemplateColumns: "repeat(1, 1fr)",
  },
  cardNew: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    margin: "2rem",
    height: "300px",
  },
  imageNew: {
    "& img": {
      width: "508px",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center center",
      margin: "0rem 2rem",
    },
  },
  contentNew: {
    textAlign: "left",
    boxSizing: "border-box",
    display: "flex",
    flexWrap: "wrap",
    alignContent: "space-between",
    "& h1": {
      fontSize: "2.1rem",
    },
  },
  contentTimeNew: {
    "& p": {
      margin: "0rem",
    },
  },
  contentTitleNew: {
    fontSize: "1.3rem",
    letterSpacing: "0.0064rem",
  },
  contentButtonNew: {},

  // --------------------------------
  cardProduct: {
    width: "23rem",
    height: "30rem",
    margin: "1rem 0.5rem",
    backgroundColor: "white",
    overflow: "hidden",
    borderRadius: "10px",
    cursor: "pointer",
  },
  imageProduct: {
    "& img": {
      width: "100%",
      height: "15rem",
      objectFit: "cover",
      objectPosition: "center center",
      display: "block",
    },
  },
  contentProduct: {
    padding: "0rem 2rem",

    "& rem": {
      fontSize: "1.5rem",
      overflow: "hidden",
      display: "-webkit-box",
      WebkitLineClamp: "4",
      WebkitBoxOrient: "vertical",
      color: "#181D31",
    },
    "& p": {
      display: "inline-block",
      borderRadius: "7px",
      backgroundColor: "#FF7800",
      padding: "0.2rem 0.5rem",
      marginRight: "2px",
      color: "white",
    },
  },
  productCategory: {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
});
