import React, { useState } from "react";
import Banner from "../../components/Banner";
import { ButtonHover } from "../../components/Button/Button";

import Dropdown from "../../components/Dropdown";
import car from "../../data/car.json";
import { styleModel } from "./style";
import CardProduct from "../../components/Card/CardProduct";
function ModelProduct() {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const carArr = car.car.carArr;
  const classes = styleModel();

  return (
    <div style={{ backgroundColor: "#F5EEDC" }}>
      <Banner />
      <Dropdown handleChange={handleChange} age={age} />
      <div className={classes.listCar}>
        {carArr.map((sp) => {
          return <CardProduct car={sp} key={sp.id} />;
        })}
      </div>

      <div className={classes.containButton}>
        <ButtonHover>Xem thêm</ButtonHover>
      </div>
    </div>
  );
}
export default ModelProduct;
