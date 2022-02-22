import React from "react";
import { ObjectFitImage } from "../Image";
import { Content, ParagraphTitle } from "../Paragraph/styled";
import {
  TwoContainer,
  ContentContainer,
  LeftTwoImageAbove,
  LeftTwoImageUnder,
  TwoRightImageContainer,
} from "./styled";
function TriangleLeftTwoLayout() {
  return (
    <TwoContainer>
      <TwoRightImageContainer>
        <LeftTwoImageAbove>
          <ObjectFitImage
            objectFit={"cover"}
            src="https://wrapstylevietnam.com/images/media/50.jpg"
          />
        </LeftTwoImageAbove>
        <LeftTwoImageUnder>
          <ObjectFitImage
            objectFit={"cover"}
            src="https://wrapstylevietnam.com/images/media/50.jpg"
          />
        </LeftTwoImageUnder>
      </TwoRightImageContainer>
      <ContentContainer>
        <ParagraphTitle>TOUR OF THE PRODUCTION LINES</ParagraphTitle>
        <Content>
          From the historic entrance to the future: touring the production lines
          is a unique journey to witness the birth of the Lamborghini sports
          cars. From the V12 line where the Aventador’s engine and frame come
          together for the first time and on to the V10 line where the Huracán
          is born. The guided tours that start from Mudetec make the tour an
          unforgettable experience in search of the company’s most amazing
          places.
        </Content>
      </ContentContainer>
    </TwoContainer>
  );
}
export default TriangleLeftTwoLayout;
