import { createUseStyles } from "react-jss";

const useStyleFooter = createUseStyles({
  footer: {
    padding: {
      top: "2rem",
      left: "0rem",
      right: "2rem",
      bottom: "2rem",
    },
    boxSizing: "border-box",
    backgroundColor: "#181818",
    display: "flex",
    justifyContent: "space-between",
    textAlign: "center",
    alignItems: "center",
    color: "white",
    height: "100%",
    width: "100%",
  },
  footer__left: {
    width: "65%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "left",
  },
  footer__leftList: {
    width: "100%",
    "& ul": {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      "& li": {
        listStyle: "none",
        "& a": {
          color: "white",
          textDecoration: "none",
        },
      },
    },
  },
  footer__leftContent: {
    margin: {
      top: "3rem",
      left: "3.5rem",
    },
    textAlign: "left",
    lineHeight: "2rem",
  },
  footer__right: {
    padding: {
      top: "2rem",
      left: "2rem",
      right: "2rem",
      bottom: "2rem",
    },
    width: "35%",
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    textAlign: "center",
    alignItems: "center",
    "& i": {
      fontSize: "1.4rem",
      marginLeft: "20px",
      cursor: "pointer",
    },
  },
  "@media screen and (max-width: 1200px)": {
    footer: {
      lineHeight: "1.5rem",
      padding: {
        top: "2rem",
        left: "0rem",
        right: "0.7rem",
        bottom: "2rem",
      },
      display: "block",
    },
    footer__leftList: {
      textAlign: "left",
      width: "100%",
      "& ul": {
        display: "block",
        "& li": {
          margin: "0.5rem",
          display: "inline-block",
        },
      },
    },
    footer__leftContent: {
      display: "none",
    },
    footer__right: {
      padding: {
        top: "0rem",
        left: "0rem",
        right: "0rem",
        bottom: "0rem",
      },
      width: "100%",
      height: "100%",
      display: "block",

      "& i": {
        fontSize: "2rem",
        marginLeft: "20px",
        cursor: "pointer",
      },
    },
  },
});

export default useStyleFooter;
