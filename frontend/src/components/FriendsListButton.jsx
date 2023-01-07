import React, { useState } from "react";
import styles from "../index.module.css";

const FLButton = (props) => {
  const [btnState, setBtnState] = useState(false);

  function handleClick() {
    setBtnState((btnState) => !btnState);
  }

  return (
    <div className={`${styles.ony}`} onClick={handleClick}>
      <div className="border-b-[3px] py-[11px] border-[#4A99E9]">
        <span className="">{props.name}</span>
      </div>
    </div>
  );
};

export default FLButton;
