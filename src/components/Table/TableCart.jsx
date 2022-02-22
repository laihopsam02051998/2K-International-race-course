import React from "react";

import IncreaseButton from "../Button/IncreaseButton";

import { useStyleTable } from "./style";

function TableCart() {
  const classes = useStyleTable();
  return (
    <div className={classes.tableCart}>
      <table>
        <tr>
          <td>
            <i class="fa fa-trash"></i>
          </td>
          <td>
            <img src="https://picsum.photos/70/100" />
          </td>
          <td className={classes.partOfProductName}>
            <div className={classes.productName}>
              <rem>
                Hệ thống ống xả đua của Novitec dành cho Lamborghini Aventador
              </rem>
            </div>
            <div className={classes.productType}>
              <p>Frontend</p>
            </div>
          </td>
          <td>
            <IncreaseButton />
          </td>
          <td>
            2.000.000 <span>VND</span>
          </td>
        </tr>
        <tr>
          <td>
            <i class="fa fa-trash"></i>
          </td>
          <td>
            <img src="https://picsum.photos/70/100" />
          </td>
          <td className={classes.partOfProductName}>
            <div className={classes.productName}>
              <rem>
                Hệ thống ống xả đua của Novitec dành cho Lamborghini Aventador
              </rem>
            </div>
            <div className={classes.productType}>
              <p>Frontend</p>
            </div>
          </td>
          <td>
            <IncreaseButton />
          </td>
          <td>
            2.000.000 <span>VND</span>
          </td>
        </tr>
        <tr>
          <td>
            <i class="fa fa-trash"></i>
          </td>
          <td>
            <img src="https://picsum.photos/70/100" />
          </td>
          <td className={classes.partOfProductName}>
            <div className={classes.productName}>
              <rem>
                Hệ thống ống xả đua của Novitec dành cho Lamborghini Aventador
              </rem>
            </div>
            <div className={classes.productType}>
              <p>Frontend</p>
            </div>
          </td>
          <td>
            <IncreaseButton />
          </td>
          <td>
            2.000.000 <span>VND</span>
          </td>
        </tr>
      </table>
    </div>
  );
}
export default TableCart;
