import { createUseStyles } from "react-jss";

export const styleModel = createUseStyles({
  containButton: {
    textAlign: "center",
    padding: "4rem 0rem",
    "& button": {
      width: "15%",
    },
  },
  listCar: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    padding: "0rem 4rem",
  },
});
