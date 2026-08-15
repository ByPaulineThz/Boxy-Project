import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {addShadow} from "../../features/shadows";
import Shadow from "./Shadow";

export default function ShadowList() { 
  const dispatch = useDispatch();
  const shadows = useSelector((state) => state.shadow);
 
  return (
    <div>
      <div className="flex justify-between p-6 border-b border-gray-300">
        <p className="font-bold text-lg">Customize Shadows</p>
        <button 
       onClick={() => dispatch(addShadow())}
        className="text-white only:py-1 px-3 text-sm rounded bg-black focus:outline-none focus:ring-4 focus:ring-offset-2 hover:bg-blue-900">
          Add a shadow
        </button>
      </div>
      <ul>
        {shadows.map((shadow, index) => (
          <Shadow panelNumber={index + 1} shadow={shadow} key={shadow.id} />
        ))}
      </ul>
    </div>
  );
}
