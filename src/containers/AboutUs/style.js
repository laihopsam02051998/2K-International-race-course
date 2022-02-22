import { createUseStyles } from "react-jss";

export const styleAboutUs = createUseStyles({
  aboutUs: {
    backgroundColor: "black",
    display: "flex",
    justifyContent: "space-around",
    textAlign: "center",
    alignItems: "center",
    padding: "2rem 5rem",
    width: "100%",
    height: "50vh",
    boxSizing: "border-box",
  },
  aboutUsContent: {
    textAlign: "center",
    "& h1": {
      fontSize: "2.5rem",
    },
  },
  aboutUsHeaderContent: {
    textAlign: "left",
    "& strong": {
      textTransform: "uppercase",
      color: "white",
      fontSize: "1.5rem",
    },
  },
  aboutUsHeaderImage: {
    height: "100%",
    minWidth: "40%",
    marginLeft: "4rem",
    "& img": {
      width: "100%",
      height: "100%",
      display: "block",
    },
  },
  contentHistory: {
    display: "flex",
    justifyContent: "space-around",
    textAlign: "left",
    alignItems: "center",
    padding: "2rem 1rem",
    boxSizing: "border-box",
    "& h2": {
      textTransform: "uppercase",
      margin: "1.5rem 0rem",
      fontSize: "2rem",
    },
  },
  imageHistory: {
    width: "100%",
    "& img": {
      width: "30rem",
      height: "18rem",
    },
  },
  noteHistory: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    height: "18rem",

    "& h3": {
      fontSize: "2rem",
      margin: "0rem",
    },
    "& p": {
      fontSize: "1rem",
      lineHeight: "1.5rem",
    },
  },

  aboutService: {
    "& h2": {
      fontSize: "2.5rem",
    },
  },

  aboutSocial: {
    margin: "2rem",
    "& h2": {
      fontSize: "2.5rem",
    },
  },

  contentSocial: {
    display: "flex",
    justifyContent: "space-around",
    textAlign: "center",
    alignItems: "center",
    "& p": {
      fontSize: "2rem",
    },
    "& strong": {
      fontSize: "5rem",
    },
  },
});
