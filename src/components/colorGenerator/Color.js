import React, { useState, useEffect } from "react";

const Color = ({ rgb, weight, index, hexColor }) => {
  const [copy, setCopy] = useState(false);
  useEffect(() => {
    const hiddparagraph = setInterval(() => {
      setCopy(false);
    }, 4000);
    return () => {
      clearInterval(hiddparagraph);
    };
  }, [copy]);
  const bcg = rgb.join(",");
  const hexValue = `#${hexColor}`;
  const copyHex = () => {
    setCopy(true);
    navigator.clipboard.writeText(hexValue);
  };
  const style = {
    backgroundColor: `rgb(${bcg})`,
    minHeight: 176,
    textAlign: "center",
    padding: 30,
    color: `${index > 10 ? "#fff" : "black"}`,
  };
  return (
    <div style={style} onClick={copyHex}>
      <p>{weight}</p>
      <p>{hexValue}</p>
      {copy && <p>copy rgb to clipborad</p>}
    </div>
  );
};

export default Color;
