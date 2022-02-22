import React from "react";
import useStyleFooter from "./style.js";

function Footer() {
  const classes = useStyleFooter();
  return (
    <section className={classes.footer}>
      <div className={classes.footer__left}>
        <div className={classes.footer__leftList}>
          <ul>
            <li>
              <a href="">COMPANY</a>
            </li>
            <li>
              <a href="">CAREERS</a>
            </li>
            <li>
              <a href="">CONTACT US</a>
            </li>
            <li>
              <a href="">MEDIA CENTER</a>
            </li>
            <li>
              <a href="">PRIVACY & LEGAL</a>
            </li>
            <li>
              <a href="">SITEMAP</a>
            </li>
            <li>
              <a href="">NEWSLETTER</a>
            </li>
          </ul>
        </div>
        <div className={classes.footer__leftContent}>
          <p>
            Copyright © 2021 Automobili Lamborghini S.p.A. a sole shareholder
            company part of Audi Group. All rights reserved. VAT no. IT
            00591801204
          </p>
        </div>
      </div>
      <div className={classes.footer__right}>
        <i class="fab fa-facebook-f"></i>
        <i class="fab fa-twitter"></i>
        <i class="fab fa-youtube"></i>
        <i class="fab fa-instagram"></i>
        <i class="fab fa-weebly"></i>
        <i class="fab fa-weibo"></i>
        <i class="fab fa-weixin"></i>
      </div>
    </section>
  );
}
export default Footer;
