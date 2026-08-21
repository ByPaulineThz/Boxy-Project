import React, { useEffect } from 'react';
import getBoxShadowValue from '../../../utils/getBoxShadowValue';
import { useSelector } from 'react-redux';

export default function ModalResult({ closeModal }) {
	const shadowValues = useSelector((state) => state.shadow);

	useEffect(() => {
		document.body.style.overflowY = 'hidden';
		return () => {
			document.body.style.overflowY = 'auto';
		};
	}, []);

	let runningAnimation = false;
	function handleCopy(e) {
		if (!runningAnimation) {
			runningAnimation = true;
			e.target.textContent = 'Copied!';

			setTimeout(() => {
				e.target.textContent = 'Copy';
				runningAnimation = false;
			}, 1250);
		}
		navigator.clipboard.writeText(`box-shadow: ${getBoxShadowValue(shadowValues)}`);
	}
	return (
		<div className="fixed z-10 inset-0 flex items-center justify-center bg-gray-900/75 ">
			<div class="fixed top-0 left-0 w-full h-full z-0">
				<div id="stars"></div>
				<div id="stars2"></div>
				<div id="stars3"></div>
				<div id="stars4"></div>
			</div>
			<div onClick={(e) => e.stopPropagation()} className="w-[300px] lg:w-fit max-w-[600px] relative z-9  rounded p-7 bg-gray-50 mb-[10vh]">
				<div className="flex items-center mb-5">
					<p className="font-semibold mr-1">Here is your code </p>
				
					<button onClick={closeModal} className=" text-sm  text-red-600 ml-auto rounded">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x">
							<path d="M18 6 6 18" />
							<path d="m6 6 12 12" />
						</svg>
					</button>
				</div>
				<p className="rounded bg-gray-100 p-5">
					<span className="font-semibold ">box-shadow:</span>
					<span> {getBoxShadowValue(shadowValues)}</span>
				</p>	
       

          <button onClick={handleCopy}  className="mt-6 p-6 lg:mt-3 mx-auto w-full  relative rounded group font-medium text-white inline-block">
				<span className=" absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
				<span className=" h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
				<span className=" absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
				<span className=" absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500 flex items-center justify-center">Copy</span>
 			</button>
			</div>
		</div>
	);
}
