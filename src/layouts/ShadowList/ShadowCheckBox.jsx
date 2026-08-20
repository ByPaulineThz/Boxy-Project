import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCheckbox } from "../../features/shadows";

export default function ShadowCheckBox({ name, shadowID }) {
  const dispatch = useDispatch();
  const checkboxShadow = useSelector((state) =>
    state.shadow.find((shadow) => shadow.id === shadowID),
  );
console.log(checkboxShadow);

  return (
    <>
      <input
        onChange={() => dispatch(updateCheckbox({ name, shadowID }))}
        checked={checkboxShadow[name]}
        id={`checkbox-${name}-${shadowID}`}
        className="h-4 w-4 border-gray-300 rounded mr-2 accent-black"
        type="checkbox"
      />
      <label
        className="leading-4 mr-5"
        htmlFor={`checkbox-${name}-${shadowID}`}
      >
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </label>
    </>
  );
}
