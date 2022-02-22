import React, { useState } from "react";
import { ContainerButton, SquareButton } from "./Button";

function IncreaseButton() {
  const [increaseButton, setIncreaseButton] = useState(1);
  return (
    <ContainerButton>
      <div>
        <SquareButton
          disabled={increaseButton === 1 ? true : false}
          backgroundColor={"gray"}
          onClick={() => {
            setIncreaseButton(increaseButton - 1);
          }}
        >
          -
        </SquareButton>
      </div>
      <div>
        <p>{increaseButton}</p>
      </div>
      <div>
        <SquareButton
          backgroundColor={"gray"}
          onClick={() => setIncreaseButton(increaseButton + 1)}
        >
          +
        </SquareButton>
      </div>
    </ContainerButton>
  );
}
export default IncreaseButton;
