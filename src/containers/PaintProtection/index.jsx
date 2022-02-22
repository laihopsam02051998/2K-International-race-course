import React from "react";
import Banner from "../../components/Banner";
import BlockCenterLayout from "../../components/Layout/BlockCenterLayout";
import TriangleLeftTwoLayout from "./../../components/Layout/TriangleLeftTwoLayout";
import TriangleRightTwoLayout from "./../../components/Layout/TriangleRightTwoLayout";
import ShortVideo from "../../components/Video/ShortVideo";
function PaintProtection() {
  return (
    <div>
      <Banner
        imageBanner={
          "https://cdn.shopify.com/s/files/1/1678/0501/products/AdobeStock_169260090_669x447.jpg?v=1614121653"
        }
        titleBanner={"CAR PROTECTION"}
      />
      <div style={{ padding: "4rem" }}>
        <ShortVideo />
      </div>
      <TriangleRightTwoLayout />
      <TriangleLeftTwoLayout />
      <BlockCenterLayout
        image1={"https://wrapstylevietnam.com/images/media/50.jpg"}
        image2={"https://wrapstylevietnam.com/images/media/50.jpg"}
      />
    </div>
  );
}
export default PaintProtection;
