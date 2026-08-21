import React, { useState } from 'react'
import ShadowList from './ShadowList/ShadowList'
import BoxPanel from './BoxPanel/BoxPanel'


export default function LeftContainer() {

    const [tabs, setTabs] = useState(0)

    const tabsList = [
        {name: 'Shadow', component: <ShadowList/>},
        {name: 'BoxPanel', component: <BoxPanel/>},
    ]


  return (
    <div className='relative z-10 mt-20  mx-2 min-w-[360px] w-[600px] h-[550px] border rounded-b bg-white bg-clip-padding backdrop-filter backdrop-blur-lg  bg-opacity-60  rounded-tr border-gray-300 shadow-xl md:mt-0'>
        <div className='flex absolute -translate-y-full -left-[1px]'>
            {tabsList.map((tab, index) => (
                <button 
                key={index}
                onClick={() => setTabs(index)}
                className='min-w-[125px] py-2 px-3 mr-4 font-bold border-t border-x border-gray-300 rounded-t
                bg-white  bg-opacity-60  hover:bg-slate-200 focus:outline-none active:bg-white'>
                    {tab.name}
                </button>
            ))}
        </div>
        <div className='overflow-auto h-full'>
            {tabsList[tabs].component}
        </div>
    </div>
  )
}
