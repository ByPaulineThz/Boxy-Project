import React, { useState, useEffect } from 'react';
import chevron from '../../assets/chevron.svg';
import { useSelector } from 'react-redux';
import ShadowRange from './ShadowRange';
import ShadowColorPicker from './ShadowColorPicker';
import ShadowCheckBox from './ShadowCheckBox';
import { removeShadow } from '../../features/shadows';
import { useDispatch } from 'react-redux';

export default function Shadow({ panelNumber, shadow }) {
	const dispatch = useDispatch();
	const [toggleShadow, setToggleShadow] = useState(false);

	useEffect(() => {
		if (panelNumber == 1) {
			setToggleShadow(true);
		} else {
			setToggleShadow(false);
		}
	}, []);

	const shadowInputs = shadow.inputs.map((input, index) => {
		if (input.type == 'range') {
			return <ShadowRange key={index} inputData={shadow.inputs[index]} shadowID={shadow.id} />;
		} else {
			return <ShadowColorPicker key={index} inputData={shadow.inputs[index]} shadowID={shadow.id} />;
		}
	});

	return (
		<li className="bg-gray-50 border-b border-gray-300 rounded hover:rounded lg:m-7  ">
			<button className="px-6 py-4 flex justify-between items-center rounded hover:bg-gray-100 w-full" onClick={() => setToggleShadow(!toggleShadow)}>
				<span>Shadow {panelNumber}</span>
				<img
					src={chevron}
					onClick={() => setToggleShadow(!toggleShadow)}
					style={{
						transform: `${toggleShadow ? 'rotate(90deg)' : 'rotate(0)'}`,
					}}
					className="font-bold w-5"
					alt=""
				/>
			</button>
			{toggleShadow && (
				<>
					<div className="flex items-center px-6 pt-4 ">
						<ShadowCheckBox name={'active'} shadowID={shadow.id} />
						<ShadowCheckBox name={'inset'} shadowID={shadow.id} />
					 

						<button onClick={() => dispatch(removeShadow(shadow.id))} className="ml-auto w-fit relative inline-flex items-center justify-center  h-fit px-2 lg:py-1 overflow-hidden text-sm  lg:text-md font-medium text-red-600 transition duration-300 ease-out border-2 border-red-500 rounded-full group ">
							<span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-red-500 group-hover:translate-x-0 ease">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash2-icon lucide-trash-2">
									<path d="M10 11v6" />
									<path d="M14 11v6" />
									<path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
									<path d="M3 6h18" />
									<path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
								</svg>{' '}
							</span>
							<span class="absolute flex items-center justify-center w-full h-full text-red-500 transition-all duration-300 transform group-hover:translate-x-full ease">Remove</span>
							<span class="relative invisible">Remove</span>
						</button>
					</div>
					<div className="px-6 py-4">{shadowInputs}</div>
				</>
			)}
		</li>
	);
}
