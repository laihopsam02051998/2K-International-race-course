import React from "react";
import TriangleLeftTwoLayout from "../../components/Layout/TriangleLeftTwoLayout";
import ShortVideo from "../../components/Video/ShortVideo";
import TriangleRightTwoLayout from "./../../components/Layout/TriangleRightTwoLayout";
import Banner from "./../../components/Banner";
import CarouselBanner from "./../../components/Carousel/CarouselBanner";
function DetailAccessory() {
  return (
    <div>
      <Banner
        titleBanner={"ACCESSORIES"}
        imageBanner={
          "https://wrapstylevietnam.com/Uploads/images/WS-Ryft%20Exhaust1.jpg"
        }
      />
      <div style={{ padding: "4rem" }}>
        <ShortVideo video={"null"} />
      </div>
      <TriangleRightTwoLayout />
      <TriangleLeftTwoLayout />
      <CarouselBanner />
    </div>
  );
}
export default DetailAccessory;
