import React from "react";
import { useState } from "react";
import { createPortal } from "react-dom";
import ModalResult from "./ModalResult";

export default function ModalBtn() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button 
      onClick={() => setShowModal(!showModal)}
      className="mx-auto mb-5 mt-2 py-1 px-3 text-base rounded border-[2px] border-solid border-white  bg-black text-white hover:bg-blue-900 cursor-pointer">
        ModalBtn
      </button>
      {showModal &&
        createPortal(
          <ModalResult closeModal={() => setShowModal(!showModal)} />,
          document.body
        )}
    </>
  );
}
