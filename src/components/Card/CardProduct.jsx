// import { display } from "@mui/system";
import React from "react";
import { styleNews } from "./style";
import { Link } from "react-router-dom";
function CardProduct(props) {
  const classes = styleNews();

  return (
    <article className={classes.cardProduct}>
      <Link
        to={`/DetailCar/${props.car.id}`}
        style={{ textDecoration: "none" }}
      >
        <div className={classes.imageProduct}>
          <img src={props.car.hinhAnh} alt={props.car.titleProduct} />
        </div>
        <div className={classes.contentProduct}>
          <div className={classes.productCategory}>
            <p>{props.car.categoryCar}</p>
            <p>{props.car.nameProduct}</p>
            <p
              style={{ display: props.car.goiDo === null ? "none" : "inline" }}
            >
              {props.car.goiDo}
            </p>
          </div>
          <div className={classes.productName}>
            <rem>{props.car.titleProduct}</rem>
          </div>
        </div>
      </Link>
    </article>
  );
}
export default CardProduct;
