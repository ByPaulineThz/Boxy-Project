import React, { useState, useEffect } from "react";
import chevron from "../../assets/chevron.svg";
import { useSelector } from "react-redux";
import ShadowRange from "./ShadowRange";
import ShadowColorPicker from "./ShadowColorPicker";
import ShadowCheckBox from "./ShadowCheckBox";
import { removeShadow } from "../../features/shadows";
import { useDispatch } from "react-redux";

export default function Shadow({ panelNumber, shadow }) {
  const dispatch = useDispatch()
  const [toggleShadow, setToggleShadow] = useState(false);

  useEffect(() => {
    if (panelNumber == 1) {
      setToggleShadow(true);
    } else {
      setToggleShadow(false);
    }
  }, []);

  const shadowInputs = shadow.inputs.map((input, index) => {
    if (input.type == "range") {
      return (
        <ShadowRange
          key={index}
          inputData={shadow.inputs[index]}
          shadowID={shadow.id}
        />
      );
    } else {
      return (
        <ShadowColorPicker
          key={index}
          inputData={shadow.inputs[index]}
          shadowID={shadow.id}
        />
      );
    }
  });

  return (
    <li className="bg-gray-50 border-b border-gray-300 rounded hover:rounded m-7">
      <button
        className="px-6 py-4 flex justify-between items-center rounded hover:bg-gray-100 w-full"
        onClick={() => setToggleShadow(!toggleShadow)}
      >
        <span>Shadow {panelNumber}</span>
        <img
          src={chevron}
          onClick={() => setToggleShadow(!toggleShadow)}
          style={{
            transform: `${toggleShadow ? "rotate(90deg)" : "rotate(0)"}`,
          }}
          className="font-bold w-5"
          alt=""
        />
      </button>
      {toggleShadow && (
        <>
          <div className="flex items-end px-6 pt-4 ">
           <ShadowCheckBox name={'active'} shadowID={shadow.id}/>
           <ShadowCheckBox name={'inset'} shadowID={shadow.id}/>
            <button 
            onClick={() => dispatch(removeShadow(shadow.id))}
            className="ml-auto bg-red-700 text-sm text-white hover:bg-red-900  py-1 px-3 rounded">
              Remove
            </button>
          
          </div> 
           <div className="px-6 py-4">{shadowInputs}</div>
        </>
      )}
    </li>
  );
}
