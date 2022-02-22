import { createUseStyles } from "react-jss";

const useStatiscalStyle = createUseStyles({
  statisticalList: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
  },
  StatisticalItem: {
    "& p": {
      fontSize: "2rem",
    },
    "& strong": {
      fontSize: "5rem",
    },
  },
});

export default useStatiscalStyle;
