import { createUseStyles } from "react-jss";

export const styleHiring = createUseStyles({
  contact: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "left",
    padding: "0rem 4rem",
    "& i": {
      color: "orange",
      margin: "0rem 1rem",
    },
  },
  contactEmail: {
    width: "60%",
    padding: "3rem 0rem",
    borderRight: "2px solid gray",
  },
  contactInfomation: {
    width: "40%",
    padding: "0rem 3rem",
  },
  hiringpositionTitle: {
    display: "flex",
    padding: "4rem 4rem",
    "& h3": {
      fontWeight: "normal",
    },
  },
});
