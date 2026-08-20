import Header from "./components/Header";
import Footer from "./components/Footer";
import Visualization from "./layouts/Visualization/Visualization"
import LeftContainer from "./layouts/LeftContainer";
import getBgValue from "./utils/getBgValue";
import { useSelector } from "react-redux";
import BgPanel from "./layouts/Background/BgPanel";
import bgImage from './assets/bg-1.png'

function App() {
    const backgroundColor =  useSelector((state) => state.backgroundColor);

  return (
    <div className="min-h-screen flex flex-col ">
      <Header/>
      <main className="flex flex-wrap  
justify-center items-center flex-grow px-10 md:flex-nowrap"
      style={{
        background: `url(${bgImage}) center bottom / 130% no-repeat, ${getBgValue(backgroundColor)}`, 
        backrgoundRepeat: 'no-repeat',
        backgroundSize: '130%',
        backgroundPosition: 'center bottom',
      }}
      >   <LeftContainer/>
          <Visualization/>          
      </main>
      <Footer/>
      <script src="../node_modules/flyonui/flyonui.js"></script>
    </div>
  );
}

export default App;
