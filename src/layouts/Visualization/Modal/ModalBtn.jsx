import React from 'react';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import ModalResult from './ModalResult';

export default function ModalBtn() {
	const [showModal, setShowModal] = useState(false);

	return (
		<>
 
		<button onClick={() => setShowModal(!showModal)} className="mt-6 lg:mt-3 mx-auto w-fit px-5 py-2.5 relative rounded group font-medium text-white inline-block">
				<span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
				<span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
				<span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
				<span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
				<span className="relative">ModalBtn</span>
			</button>
			{showModal && createPortal(<ModalResult closeModal={() => setShowModal(!showModal)} />, document.body)}

      
		</>
	);
}
