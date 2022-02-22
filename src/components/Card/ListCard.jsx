import React from "react";
import CardNews from "./CardNews";
import { styleNews } from "./style";

function ListCard() {
  const classes = styleNews();
  return (
    <div className={classes.containerListCard}>
      <CardNews />
    </div>
  );
}
export default ListCard;
