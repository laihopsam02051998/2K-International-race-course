import React from "react";
import Banner from "../../components/Banner";
import BannerL from "../../components/Banner/BannerL";
import BlockCenterLayout from "../../components/Layout/BlockCenterLayout";
import {
  TiTleProduct,
  Content,
  ContentQuestion,
} from "../../components/Typography";
import styleActivity from "./style";

function Activity() {
  const classes = styleActivity();
  return (
    <div className={classes.containerAdvertisement}>
      <Banner
        imageBanner={
          "https://www.formula1.com/content/dam/fom-website/manual/Misc/Commercial/_2ST4334_CP_FINAL.jpg"
        }
        titleBanner={"QUẢNG CÁO"}
      />

      <section className={classes.productAdvertisement}>
        <TiTleProduct>TỔ CHỨC SỰ KIỆN : GIỚI THIỆU SẢN PHẨM</TiTleProduct>
        <Content>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
          quasi at. Aspernatur dignissimos sunt voluptates provident laborum
          inventore excepturi atque culpa, eum earum distinctio explicabo magnam
          veritatis ab totam quasi! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Laborum, quasi at. Aspernatur dignissimos sunt
          voluptates provident laborum inventore excepturi atque culpa, eum
          earum distinctio explicabo magnam veritatis ab totam quasi!
        </Content>
      </section>
      <BannerL
        image={
          "https://ligasetra.com/wp-content/uploads/2020/07/GULF-BANNER-5c.jpg"
        }
      />

      <section className={classes.advertisementBoard}>
        <TiTleProduct>ĐẶT BẢNG QUẢNG CÁO</TiTleProduct>
        <Content>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
          quasi at. Aspernatur dignissimos sunt voluptates provident laborum
          inventore excepturi atque culpa, eum earum distinctio explicabo magnam
          veritatis ab totam quasi! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Laborum, quasi at. Aspernatur dignissimos sunt
          voluptates provident laborum inventore excepturi atque culpa, eum
          earum distinctio explicabo magnam veritatis ab totam quasi!
        </Content>
      </section>
      <BlockCenterLayout
        image1={
          "https://xefun.vn/wp-content/uploads/2021/05/Tr%C3%ACnh-di%E1%BB%85n-b%E1%BB%91c-%C4%91%E1%BA%A7u-v%C3%A0-b%E1%BB%91c-%C4%91%C3%ADt-c%E1%BB%A7a-biker-Trang-H%E1%BB%AFu-L%E1%BB%99c-t%E1%BA%A1i-Tr%C6%B0%E1%BB%9Dng-%C4%91ua-%C4%90%E1%BA%A1i-Nam-Xefun.jpg"
        }
        image2={
          "https://cdn-img.thethao247.vn/upload/quy/2017/12/13/IMG_0054.JPG"
        }
      />
      <section className={classes.propductDistribution}>
        <TiTleProduct>PHÂN PHỐI SẢN PHẨM</TiTleProduct>
        <Content>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
          quasi at. Aspernatur dignissimos sunt voluptates provident laborum
          inventore excepturi atque culpa, eum earum distinctio explicabo magnam
          veritatis ab totam quasi! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Laborum, quasi at. Aspernatur dignissimos sunt
          voluptates provident laborum inventore excepturi atque culpa, eum
          earum distinctio explicabo magnam veritatis ab totam quasi!
        </Content>
      </section>

      <BlockCenterLayout
        image1={
          "https://xefun.vn/wp-content/uploads/2021/04/Gulf-Oil-Viet-Nam_xefun-37.jpg"
        }
        image2={
          "https://www.gulfoilltd.com/wp-content/uploads/2018/04/DZy6E4XXkAIHiCv.jpg"
        }
      />
      <section className={classes.propductDistribution}>
        <TiTleProduct>LIÊN HỆ QUẢNG CÁO</TiTleProduct>
        <Content>
          <ContentQuestion>
            Tôi có thể gặp bạn trực tiếp ở đâu ?
          </ContentQuestion>
          <br />
          <Content>
            - Võ Văn Kiệt, Định Hoà, Tp. Thủ Dầu Một, Bình Dương
          </Content>
          <Content>
            - 204 Chợ Lớn, Phường 11, Quận 6, Thành phố Hồ Chí Minh
          </Content>
          <ContentQuestion>
            Tôi có thể liên hệ với bạn qua phương tiện nào
          </ContentQuestion>
          <Content>- Số điện thoại: 093 620 00 61</Content>
          <Content>
            - Fanpage:{" "}
            <a href="https://www.facebook.com/2Kinternationalcircuit">
              Trường đua 2k
            </a>
          </Content>
        </Content>
      </section>
    </div>
  );
}
export default Activity;
