import React from "react";
import HexagonButton from "../../components/Button/HexagonButton";

import CarouselBanner from "../../components/Carousel/CarouselBanner";
import TriangleLeftLayout from "../../components/Layout/TriangleLeftLayout";
import BlockCenterLayout from "../../components/Layout/BlockCenterLayout";
import car from "../../data/car.json";
import ShortVideo from "../../components/Video/ShortVideo";
import Layout from "./../../components/Layout";
import { BannerFull } from "../../components/Banner/BannerFull";
import BlockLayout from "../../components/Layout/BlockLayout";

function DetailCar(props) {
  const carArr = car.car.carArr;
  const carDetail = carArr.filter((sp) => {
    return sp.id === props.match.params.Id;
  });

  return (
    <div>
      <div style={{ padding: "0rem" }}>
        <BannerFull
          image={carDetail[0].hinhAnh}
          title={carDetail[0].titleProduct}
        />
      </div>
      <TriangleLeftLayout
        content={carDetail[0].foreword}
        image={carDetail[0].hinhAnh}
      />
      <div style={{ padding: "4rem" }}>
        <ShortVideo
          video={carDetail[0].video.linkVideo}
          poster={carDetail[0].video.videoPoster}
        />
      </div>
      <Layout
        status={carDetail[0].firstImageBody.status}
        images={carDetail[0].firstImageBody}
        content={carDetail[0].firstContentBody}
      />
      <Layout
        status={carDetail[0].secondImageBody.status}
        images={carDetail[0].secondImageBody}
        content={carDetail[0].secondContentBody}
      />
      <BlockLayout
        status={carDetail[0].second2ImageBody.status}
        content={carDetail[0].secondContentBody}
        images={carDetail[0].second2ImageBody}
      />

      <HexagonButton />
      <CarouselBanner Slider={carDetail[0].Slide} />
    </div>
  );
}
export default DetailCar;
