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

          <button  onClick={() => dispatch(addShadow())} className=" w-fit relative inline-flex items-center justify-center  h-fit px-2 lg:py-1 overflow-hidden text-sm  lg:text-md font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full group ">
            <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-icon lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
            </span>
            <span class="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Add a shadow</span>
            <span class="relative invisible">Add a shadow</span>
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
