import { useSelector} from 'react-redux';
import BgColorPicker from './BgColorPicker';

export default function BgPanel() {

  const bgState = useSelector(state => state.backgroundColor)

  const bgInputs = bgState.map((input, index) => {
  
      return <BgColorPicker  key={index} inputData={input}/>
    });

  return (

    <div className='border rounded-b border-gray-300 shadow-sm bg-gray-50 rounded-lg px-6 py-4 w-fit mx-auto mb-10 mt-0'>
      {bgInputs}
    </div>
  )
}
 