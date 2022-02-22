import React from "react";
import { ContainerFlex } from "../../components/Container";
import { Content, TiTle, TiTlePage } from "../../components/Typography";
import { styleHiring } from "./style";

function Hiring() {
  const classes = styleHiring();
  return (
    <div>
      <section className={classes.contact}>
        <div className={classes.contactEmail}>
          <TiTlePage>Liên hệ tại địa chỉ</TiTlePage>
          <ContainerFlex alignItems="center">
            <i class="fa fa-map-marker-alt"></i>
            <Content>
              Võ Văn Kiệt, Định Hoà, Tp. Thủ Dầu Một, Bình Dương
            </Content>
          </ContainerFlex>
        </div>

        <div className={classes.contactInfomation}>
          <div className={classes.callUs}>
            <TiTle>Số điện thoại</TiTle>
            <ContainerFlex alignItems="center">
              <i class="fa fa-phone"></i>
              <p>093 620 00 61</p>
            </ContainerFlex>
          </div>

          <div className={classes.visitUs}>
            <TiTle>Email: </TiTle>
            <ContainerFlex alignItems="center">
              <i class="fa fa-envelope"></i>
              <Content>truongdua2k@gmail.com</Content>
            </ContainerFlex>
          </div>

          <div className={classes.socialNetwork}>
            <TiTle>Mạng xã hội</TiTle>
            <ContainerFlex alignItems="center">
              <i class="fab fa-facebook-f"></i>
              <a
                href="https://www.facebook.com/2Kinternationalcircuit"
                style={{ textDecoration: "none" }}
              >
                <Content>2K International Circuit</Content>
              </a>
            </ContainerFlex>
          </div>
        </div>
      </section>

      {/* START HIRING POSITION  */}
      <section className={classes.hiringposition}>
        <div className={classes.hiringpositionTitle}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.950087378472!2d106.66331731428895!3d11.04236915724923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d1daa750bcef%3A0x7d32a2378847113e!2zVHLGsOG7nW5nIMSRdWEgMks!5e0!3m2!1svi!2s!4v1640758881232!5m2!1svi!2s"
            width="100%"
            height={450}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </div>
      </section>
      {/* END HIRING POSITION   */}
    </div>
  );
}
export default Hiring;
