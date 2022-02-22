import React from "react";
import Video from "../../components/Video";
import News from "../News";
import useHomeStyle from "./style";

function Home() {
  const classes = useHomeStyle();

  return (
    <div className={classes.homeContainer}>
      <Video />
      <div style={{ textAlign: "center" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "2rem",
          }}
        >
          NHÀ TÀI TRỢ
        </h2>
        <marquee
          width="90%"
          height="90px"
          behavior="scroll"
          bgcolor="#fff"
          scrollamount="10"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Gulf_logo.png/660px-Gulf_logo.png"
            max-width="100%"
            height="90px"
            style={{ margin: "0px 20px" }}
          />
          <img
            src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/240826802_106725735069818_6763023369899966862_n.jpg?_nc_cat=108&_nc_rgb565=1&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=oxY3HjN7c7cAX-0W7cZ&_nc_ht=scontent.fsgn5-5.fna&oh=00_AT8L501N31iyS56ochjgEJYvvazv7i9UEdUOTlzEu5_PXg&oe=61C5E10D"
            max-width="100%"
            height="90px"
            style={{ margin: "0px 20px" }}
          />
          <img
            src="https://xetv.vn/wp-content/uploads/2019/07/tim-hieu-motul.jpg"
            max-width="100%"
            height="90px"
            style={{ margin: "0px 20px" }}
          />
          <img
            src="https://www.motor2k.com/upload/web_logo/852ey9A0332dUj2TT8yb8IjiIuYBjxQgWWhGSRG9.png"
            max-width="100%"
            height="90px"
            style={{ margin: "0px 20px" }}
          />
          <img
            src="https://cf.shopee.vn/file/de2861af142ed3d5fcd030fcedbc2eed"
            max-width="100%"
            height="90px"
            style={{ margin: "0px 20px" }}
          />
          <img
            src="https://i.pinimg.com/originals/75/fe/27/75fe27444fc747bb7459adba9b797d34.jpg"
            max-width="100%"
            height="90px"
            style={{ margin: "0px 20px" }}
          />
        </marquee>
      </div>
      <div>
        <News />
      </div>
    </div>
  );
}
export default Home;
