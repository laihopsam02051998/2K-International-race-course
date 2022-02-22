import React from "react";
import styleIcon from "./style";

export function FB() {
  const classes = styleIcon();
  return (
    <div className={classes.container}>
      {/* <i class="fa fa-share-square"></i> */}
      <i class="fab fa-facebook-square"></i>
    </div>
  );
}
export function Youtube() {
  const classes = styleIcon();
  return (
    <div className={classes.containerYoutube}>
      {/* <i class="fa fa-share-square"></i> */}
      <i class="fab fa-youtube"></i>
    </div>
  );
}

export function Share() {
  const classes = styleIcon();
  return (
    <div className={classes.containerShare}>
      <i class="fa fa-share-square"></i>
    </div>
  );
}
