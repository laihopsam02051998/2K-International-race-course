import React from "react";
import imageAbout from "./../../components/assets/img/aboutimage.jpg";
import imageAbout2 from "./../../components/assets/img/about-Wrap-Style-Sydney.jpg";
import kingdrag from "./../../components/assets/img/kingdrag.jpg";
import upgrade from "./../../components/assets/img/upgrade.jpg";
import training from "./../../components/assets/img/training.jpg";
import raceCourse from "./../../components/assets/img/raceCourse.jpg";
import race from "./../../components/assets/img/race.jpg";
import { styleAboutUs } from "./style";
import { ButtonHover } from "../../components/Button/Button";

export default function AboutUs() {
  const classes = styleAboutUs();
  return (
    <div>
      <section className={classes.aboutUs}>
        <div className={classes.aboutUsHeaderContent}>
          <strong>chào mọi người , chúng tôi là trường đua 2k</strong>
        </div>
        <figure className={classes.aboutUsHeaderImage}>
          <img src={imageAbout} alt="showroom WrapStyle" />
        </figure>
      </section>
      <article className={classes.aboutUsContent}>
        <h1>VỀ CHÚNG TÔI</h1>
        {/* START HISTORY  */}
        <section className={classes.contentHistory}>
          <figure className={classes.imageHistory}>
            <img src={raceCourse} alt="showroom WrapStyle" />
          </figure>
          <figcaption className={classes.noteHistory}>
            <h2>LỊCH SỬ HÌNH THÀNH</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repudiandae a perspiciatis quo quam voluptatum molestiae porro
              dicta earum similique vel, magnam id tempora itaque soluta
              quibusdam est suscipit. Modi, harum!. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Repudiandae a perspiciatis quo quam
              voluptatum molestiae porro dicta earum similique vel, magnam id
              tempora itaque soluta quibusdam est suscipit. Modi, harum!
            </p>
          </figcaption>
        </section>
        {/* END HISTORY  */}
        {/* START SERVICE  */}
        <section className={classes.aboutService}>
          <h2>DỊCH VỤ</h2>
          {/* START KING DRAG  */}
          <section className={classes.contentHistory}>
            <figure className={classes.imageHistory}>
              <img src={kingdrag} alt="showroom WrapStyle" />
            </figure>
            <figcaption className={classes.noteHistory}>
              <h3>KING DRAG</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Repudiandae a perspiciatis quo quam voluptatum molestiae porro
                dicta earum similique vel, magnam id tempora itaque soluta
                quibusdam est suscipit. Modi, harum!. Lorem ipsum dolor, sit
                amet consectetur adipisicing elit. Repudiandae a perspiciatis
                quo quam voluptatum molestiae porro dicta earum similique vel,
                magnam id tempora itaque soluta quibusdam est suscipit. Modi,
                harum!
              </p>
              <ButtonHover>Xem chi tiết</ButtonHover>
            </figcaption>
          </section>
          {/* END KING DRAG  */}
          {/* START RACE  */}
          <section className={classes.contentHistory}>
            <figure className={classes.imageHistory}>
              <img src={race} alt="showroom WrapStyle" />
            </figure>
            <figcaption className={classes.noteHistory}>
              <h3>RACE</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Repudiandae a perspiciatis quo quam voluptatum molestiae porro
                dicta earum similique vel, magnam id tempora itaque soluta
                quibusdam est suscipit. Modi, harum!. Lorem ipsum dolor, sit
                amet consectetur adipisicing elit. Repudiandae a perspiciatis
                quo quam voluptatum molestiae porro dicta earum similique vel,
                magnam id tempora itaque soluta quibusdam est suscipit. Modi,
                harum!
              </p>
              <ButtonHover>Xem chi tiết</ButtonHover>
            </figcaption>
          </section>
          {/* END RACE  */}
          {/* START CARE MOTOR  */}
          <section className={classes.contentHistory}>
            <figure className={classes.imageHistory}>
              <img src={imageAbout2} alt="showroom WrapStyle" />
            </figure>
            <figcaption className={classes.noteHistory}>
              <h3>CHĂM SÓC & BẢO DƯỠNG</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Repudiandae a perspiciatis quo quam voluptatum molestiae porro
                dicta earum similique vel, magnam id tempora itaque soluta
                quibusdam est suscipit. Modi, harum!. Lorem ipsum dolor, sit
                amet consectetur adipisicing elit. Repudiandae a perspiciatis
                quo quam voluptatum molestiae porro dicta earum similique vel,
                magnam id tempora itaque soluta quibusdam est suscipit. Modi,
                harum!
              </p>
              <ButtonHover>Xem chi tiết</ButtonHover>
            </figcaption>
          </section>
          {/* END CARE MOTOR   */}
          {/* START TRAINING  */}
          <section className={classes.contentHistory}>
            <figure className={classes.imageHistory}>
              <img src={training} alt="showroom WrapStyle" />
            </figure>
            <figcaption className={classes.noteHistory}>
              <h3>ĐÀO TẠO HỌC VIÊN</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Repudiandae a perspiciatis quo quam voluptatum molestiae porro
                dicta earum similique vel, magnam id tempora itaque soluta
                quibusdam est suscipit. Modi, harum!. Lorem ipsum dolor, sit
                amet consectetur adipisicing elit. Repudiandae a perspiciatis
                quo quam voluptatum molestiae porro dicta earum similique vel,
                magnam id tempora itaque soluta quibusdam est suscipit. Modi,
                harum!
              </p>
              <ButtonHover>Xem chi tiết</ButtonHover>
            </figcaption>
          </section>
          {/* END TRAINING   */}
          {/* START UPGRADE  */}
          <section className={classes.contentHistory}>
            <figure className={classes.imageHistory}>
              <img src={upgrade} alt="showroom WrapStyle" />
            </figure>
            <figcaption className={classes.noteHistory}>
              <h3>NÂNG CẤP </h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Repudiandae a perspiciatis quo quam voluptatum molestiae porro
                dicta earum similique vel, magnam id tempora itaque soluta
                quibusdam est suscipit. Modi, harum!. Lorem ipsum dolor, sit
                amet consectetur adipisicing elit. Repudiandae a perspiciatis
                quo quam voluptatum molestiae porro dicta earum similique vel,
                magnam id tempora itaque soluta quibusdam est suscipit. Modi,
                harum!
              </p>
              <ButtonHover>Xem chi tiết</ButtonHover>
            </figcaption>
          </section>
          {/* END UPGRADE   */}
        </section>
        {/* START SERVICE  */}
        {/* START SOCIAL  */}
        <section className={classes.aboutSocial}>
          <h2>MẠNG XÃ HỘI</h2>
          <section className={classes.contentSocial}>
            <div className={classes.instagram}>
              <p>INSTAGRAM</p>
              <strong>999</strong>
            </div>
            <div className={classes.facebook}>
              <p>FACEBOOK</p>
              <strong>1002</strong>
            </div>
            <div className={classes.rate}>
              <p>ĐÁNH GIÁ </p>
              <strong>4,3</strong>
            </div>
            <div className={classes.rateFiveStar}>
              <p>ĐÁNH GIÁ 5 SAO</p>
              <strong>10203</strong>
            </div>
          </section>
        </section>
        {/* END SOCIAL  */}
      </article>
    </div>
  );
}
