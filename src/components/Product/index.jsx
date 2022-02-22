import React from "react";
import useStyleProduct from "./style";
import { ButtonHover } from "../Button/Button";
import { Link } from "react-router-dom";
import { TiTleProduct } from "../Typography";
import { Date } from "./../Typography";

function Product({ course, changeNew }) {
  const classes = useStyleProduct();
  return (
    <div className={classes.product}>
      <div className={classes.product__image}>
        <img src={course.postImage} alt={course.postName} srcSet />
      </div>
      <div>
        <Date>{course.postDate}</Date>
      </div>
      <div className={classes.productTitle}>
        <TiTleProduct>{course.postName}</TiTleProduct>
      </div>
      <div className={classes.productContentButton}>
        <Link
          to={`/NewDetail/${course.id}`}
          onClick={() => changeNew(course.id)}
        >
          <ButtonHover backgroundColor={"#202020"}>Xem chi tiết </ButtonHover>
        </Link>
      </div>
    </div>
  );
}
export default Product;
