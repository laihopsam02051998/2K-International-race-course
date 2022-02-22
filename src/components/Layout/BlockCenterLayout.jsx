import React from "react";
import { ObjectFitImage } from "../Image";

import { ContainerLayout, HeaderTwoLeft, HeaderTwoRight } from "./styled";
function BlockCenterLayout({ image1, image2 }) {
  return (
    <ContainerLayout>
      <HeaderTwoLeft>
        <ObjectFitImage objectFit={"cover"} src={image1} />
      </HeaderTwoLeft>
      <HeaderTwoRight>
        <ObjectFitImage objectFit={"cover"} src={image2} />
      </HeaderTwoRight>
    </ContainerLayout>
  );
}
export default BlockCenterLayout;
