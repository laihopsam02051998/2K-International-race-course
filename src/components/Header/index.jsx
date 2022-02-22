import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "./../assets/img/logo-light-145x30.png";
import useStyleHeader from "./style";

function Header() {
  const classes = useStyleHeader();
  const info = JSON.parse(localStorage.getItem("credential"));
  // CHOOSE TAB IN HEADER
  const [isTouch, setIsTouch] = useState(false);
  const [avatarContent, setAvatarContent] = useState(false);
  const [isLogin, setIsLogin] = useState(null);

  const admin = useSelector((state) => {
    return state.UserReducer.credentials;
  });

  useEffect(() => {
    document.getElementById("Touch").classList.toggle("active");
  }, [isTouch]);

  useEffect(() => {
    info !== null ? setIsLogin(info) : setIsLogin(admin);
  }, [admin]);

  return (
    <section className={classes.header}>
      <div className={classes.header__menu}>
        <div className={classes.header__left}>
          <ul>
            <li>
              <Link to="/">
                <img src={logo} alt />
              </Link>
            </li>
            <li id="menuModel">
              <Link to="/BookingService">TỔ CHỨC SỰ KIỆN</Link>
            </li>
            <li>
              <Link to="/Advertisement">QUẢNG CÁO</Link>
            </li>
            <li>
              <Link to="/AboutUs">VỀ CHÚNG TÔI</Link>
            </li>
          </ul>
        </div>
        <div className={classes.header__right}>
          <ul>
            <li>
              <Link to="/News">TIN TỨC</Link>
            </li>
            <li id="menuActivity">
              <a href="https://www.motogp.com/" target={"_blank"}>
                GIẢI ĐẤU
              </a>
            </li>
            <li>
              <Link to="/Contact">LIÊN HỆ</Link>
            </li>
            <li>
              <div id="svgNumber">
                <p id="svgNumbers" />
              </div>
              <Link to="/Cart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  height="26px"
                  width="26px"
                  viewBox="0 0 21.48 20.219"
                >
                  <g transform="translate(-700.152 -165)">
                    <g transform="translate(700.152 165)">
                      <path
                        d="M706.44,182.9l-2.03,2.034a.737.737,0,0,1-.661.276.775.775,0,0,1-.319-.663c.011-.535,0-1.069,0-1.628l-.3-.019a8.058,8.058,0,0,1-1.168-.083,2.3,2.3,0,0,1-1.8-2.257c0-1.842.025-3.685-.01-5.527a2.4,2.4,0,0,1,2.386-2.411c.2,0,.389,0,.614,0v-.288q0-2.141,0-4.281A3,3,0,0,1,706.2,165q6.218,0,12.436,0a2.971,2.971,0,0,1,2.975,2.867c.035,1.546.013,3.094.012,4.642,0,1.124.009,2.25-.016,3.374a2.988,2.988,0,0,1-2.59,2.724c-.5.04-1.01.029-1.515.041-.1,0-.2,0-.328,0v.283q0,1.122,0,2.243c0,.2.045.442-.2.529a.644.644,0,0,1-.683-.177c-.706-.692-1.4-1.4-2.1-2.1-.052-.05-.107-.1-.2-.183,0,.45,0,.853,0,1.257a2.368,2.368,0,0,1-1.886,2.341,2.9,2.9,0,0,1-.608.052q-2.378.007-4.757,0Zm9.852-2.84c0-.656,0-1.242,0-1.83,0-.4.176-.578.58-.582.513,0,1.027,0,1.54,0a3.664,3.664,0,0,0,.676-.031,2,2,0,0,0,1.645-2.01c0-2.514-.015-5.029.009-7.542a2.073,2.073,0,0,0-2.112-2.093q-6.2.005-12.39.006a2.354,2.354,0,0,0-.58.073,2.032,2.032,0,0,0-1.531,2.044q0,3.148.018,6.3c0,.438,0,.876.006,1.314a2.031,2.031,0,0,0,2.053,1.946c2.393-.02,4.787-.006,7.18-.007a1.1,1.1,0,0,1,.845.345C714.892,178.671,715.57,179.337,716.292,180.061Zm-3.182-1.406h-.322q-3.16,0-6.319,0a6.871,6.871,0,0,1-.743-.043,3.012,3.012,0,0,1-2.574-2.855c0-.627,0-1.253,0-1.88,0-.08-.007-.159-.011-.251-.222,0-.418,0-.613,0a1.385,1.385,0,0,0-1.393,1.417q0,2.719,0,5.436a1.3,1.3,0,0,0,1.1,1.373,6.592,6.592,0,0,0,1.419.045.7.7,0,0,1,.785.789c-.024.295,0,.592,0,.891l1.59-1.561c.1-.006.193-.016.289-.016h2.628c.952,0,1.9.007,2.854-.008a1.318,1.318,0,0,0,1.284-1.15c.05-.546.026-1.1.034-1.65C713.112,179.019,713.11,178.847,713.11,178.655Z"
                        transform="translate(-700.152 -165)"
                      ></path>
                    </g>
                  </g>
                </svg>
              </Link>
            </li>
            <li
              style={
                isLogin !== null ? { display: "none" } : { display: "block" }
              }
            >
              <Link to="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="25px"
                  width="25px"
                  fill="white"
                  viewBox="0 0 17.283 18.023"
                >
                  <g transform="translate(-1463.392 -389.942)">
                    <g>
                      <path d="M1470.762,390.983a6.426,6.426,0,1,0,6.425,6.425,6.432,6.432,0,0,0-6.425-6.425m0,13.7a7.37,7.37,0,1,1,7.37-7.37,7.379,7.379,0,0,1-7.37,7.37"></path>
                    </g>
                    <rect
                      width="0.944"
                      height="7.181"
                      transform="translate(1475.069 402.736) rotate(-43.24)"
                    ></rect>
                  </g>
                </svg>
              </Link>
            </li>
            <li>
              <div
                className={classes.Touch}
                onClick={() => setIsTouch(!isTouch)}
                id="Touch"
              />
            </li>
          </ul>
        </div>
      </div>
      <div
        className={
          isTouch === true ? classes.touchContent : classes.touchContentHide
        }
      >
        <div className={classes.serviceHeader}>
          <h2>DỊCH VỤ</h2>
          <Link to="/ModelProduct" onClick={() => setIsTouch(false)}>
            <p> DRAG</p>
          </Link>
          <Link to="/ModelProduct" onClick={() => setIsTouch(false)}>
            <p> TRACK</p>
          </Link>

          <Link to="/PaintProtection" onClick={() => setIsTouch(false)}>
            <p> GOKART</p>
          </Link>
          <Link to="/PaintProtection" onClick={() => setIsTouch(false)}>
            <p> MEETING</p>
          </Link>
        </div>
        <div className={classes.serviceHeader}>
          <h2>HỢP TÁC</h2>
          <p>QUẢNG BÁ SẢN PHẨM</p>
          <p>ĐẶT BẢNG QUẢNG CÁO</p>
          <p>QUẢNG PHỐI SẢN PHẨM</p>
        </div>
        <div className={classes.serviceHeader}>
          <h2>SHOP</h2>
          <p>PHỤ KIỆN LƯU NIỆM</p>
          <p>LINH KIỆN XE</p>
        </div>
        <div className={classes.serviceHeader}>
          <h2>DRAG</h2>
          <p>KỶ LỤC</p>
          <Link to="/DetailAccessory" onClick={() => setIsTouch(false)}>
            <p>CÂU LẠC BỘ</p>
          </Link>
          <Link to="/NewDetail" onClick={() => setIsTouch(false)}>
            <p>TIN TỨC</p>
          </Link>
        </div>
        <div className={classes.laguageHeader}>
          <h2>NGÔN NGỮ</h2>
          <p>VIETNAM</p>
          <p>ENGLISH</p>
        </div>
      </div>
    </section>
  );
}
export default Header;
