import Footer from './components/Footer';
import Visualization from './layouts/Visualization/Visualization';
import LeftContainer from './layouts/LeftContainer';
import getBgValue from './utils/getBgValue';
import { useSelector } from 'react-redux';
import bgImage from './assets/fond.png';
import lune from './assets/lune.png';
import planet1 from './assets/planet-1.png';
import planet2 from './assets/planet-2.png';

function App() {
	var backgroundColor = useSelector((state) => state.backgroundColor);

	return (
		<div
			className="min-h-screen flex flex-col "
			style={{
				background: `url(${bgImage}) center bottom / 130% no-repeat, ${getBgValue(backgroundColor)}`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: '130%',
				backgroundPosition: 'center bottom',
			}}
		>
			<h1 className="text-3xl z-20 lg:text-5xl mt-14 text-center uppercase font-semibold " style={{ color: 'white', mixBlendMode: 'difference' }}>
				Boxy Generator
			</h1>

			<main
				className="flex flex-wrap  overflow-x-hidden
        justify-center items-center flex-grow px-10 md:flex-nowrap"
			>
				<LeftContainer />
				<Visualization />

				<img src={planet1} alt="" className="absolute top-[20%] left-[75%] object-cover z-0 animation-float-6" />
				<img src={planet2} alt="" className="absolute top-[35%] lg:top-[10%] left-[10%] object-cover z-0 animation-float-12" />
				<img src={lune} alt="" className="absolute  top-[50%] lg:top-[30%] left-[40%] object-cover z-index-10 animation-orbit" />
			</main>
			<Footer />

			<script src="../node_modules/flyonui/flyonui.js"></script>
		</div>
	);
}

export default App;
