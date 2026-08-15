import React from "react";
import { useDispatch } from "react-redux";
import { updateBgValue } from "../../features/backgroundColor";

export default function BgColorPicker({inputData}) {
    const dispatch = useDispatch()
  
    function handleInputs(e){
      dispatch(updateBgValue({
        inputNumber: inputData.inputNumber,
        value: e.target.value
      }))
    }
  return (
    <div>
      <p className="font-bold">{inputData.name}</p>
      <div className="flex mt-2">
        <input type="text"  className="flex-grow border py-1 px-2 focus:outline-1 outline-gray-400"
        value={inputData.value} onChange={handleInputs}/>
        <input type="color" className="cursor-pointer h-[40px]"  value={inputData.value} onChange={handleInputs}/>
      </div>
    </div>
  );
}
