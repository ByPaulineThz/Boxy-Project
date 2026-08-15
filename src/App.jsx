import Header from "./components/Header";
import Footer from "./components/Footer";
import Visualization from "./layouts/Visualization/Visualization"
import LeftContainer from "./layouts/LeftContainer";
import getBgValue from "./utils/getBgValue";
import { useSelector } from "react-redux";
import BgPanel from "./layouts/Background/BgPanel";

function App() {
    const backgroundColor =  useSelector((state) => state.backgroundColor);

  return (
    <div className="min-h-screen flex flex-col ">
      <Header/>
      <main className="flex flex-wrap justify-center items-center flex-grow px-10 md:flex-nowrap"
      style={{
        backgroundColor:`${getBgValue(backgroundColor).slice(0, -1)}`,
      }}
      >   <LeftContainer/>
          <Visualization/>          
      </main>
      <Footer/>
    </div>
  );
}

export default App;
