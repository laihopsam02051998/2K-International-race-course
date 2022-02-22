import React from "react";
import StatisticalItem from ".";
import useStatiscalStyle from "./style";

function StatisticalList(props) {
  const classes = useStatiscalStyle();

  return (
    <div className={classes.statisticalList}>
      <StatisticalItem />
    </div>
  );
}

export default StatisticalList;
