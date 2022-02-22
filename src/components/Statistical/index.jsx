import React from "react";
import useStatiscalStyle from "./style";

function StatisticalItem() {
  const classes = useStatiscalStyle();
  return (
    <div className={classes.StatisticalItem}>
      <p>INSTAGRAM</p>
      <strong>999</strong>
    </div>
  );
}
export default StatisticalItem;
