import React from "react";
import ModalBtn from "./Modal/ModalBtn";
import getBoxShadowValue from "../../utils/getBoxShadowValue";
import { useSelector } from "react-redux";
import BgPanel from "../Background/BgPanel";

export default function Visualization() {
  const shadowValues = useSelector((state) => state.shadow);
  const boxProperties = useSelector((state) => state.boxProperties);

  return (
    <div className="flex flex-col p-5 lg:ml-10 lg:md-28">
      <BgPanel />
      <div
        className="w-[250px] h-[250px] rounded-xel bg-white mb-1 mx-auto lg:mb-5"
        style={{
          boxShadow: `${getBoxShadowValue(shadowValues).slice(0, -1)}`,
          borderRadius: `${boxProperties[0].value}px`,
          height: `${boxProperties[1].value}px`,
          width: `${boxProperties[2].value}px`,
          backgroundColor: `${boxProperties[3].value}`,
        }}
      ></div>
      <ModalBtn />
    </div>
  );
}
