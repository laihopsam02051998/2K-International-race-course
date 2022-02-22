import { createUseStyles } from "react-jss";

const styleManagementUser = createUseStyles({
  container: {
    padding: "2rem 0rem",
    textAlign: "center",
  },
  ManagementUserControl: {
    display: "flex",
    justifyContent: "space-around",
    padding: "0rem 2rem",
  },
  productControllerLeft: {
    width: "5%",
  },
  productControllerRight: {
    width: "95%",
    textAlign: "right",
  },
  ManagementUserTable: {
    padding: "2rem",
  },
});

export default styleManagementUser;
