import { useState } from 'react'
import profile from './images/image-victor.jpg';
import patronCircle from './images/bg-pattern-card.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Container of the page */}
      <div className='images '>

        {/* Container of the card */}
        <div className='w-[320px] h-auto flex flex-col justify-center items-center text-center bg-white rounded-[13px]'>
          {/* Image container */}
          <div className=''>
            <img className='rounded-t-[13px]' src={patronCircle} alt="" />
          </div>
          {/* Text container */}
          <div className=''>
          <div className='flex justify-center '>
            <img className='rounded-[50%] relative bg- bottom-[53px] border-8 border-white' src={profile} alt="" />
          </div>
          <div className='relative  bottom-10'>
            <h1 className='text-[20px] font-bold text-Very-dark-desaturated-blue'>Victor Crest  <span className=' text-Dark-gray font-normal'>26</span></h1>
            <h2 className='text-Dark-grayish-blue text-[15px] font-normal border-b-[1px] pb-6 pt-2 tracking-wide '>London</h2>
          </div>
          {/* Container of the stats */}
          <div className='relative bottom-4 flex flex-row text-center justify-evenly  w-[320px]'>
            <div className=' text-[20px]'>
              <h3  className='font-bold'>80K</h3>
              <span className='text-Dark-grayish-blue text-[13px] tracking-wide relative bottom-2'>Followers</span>
            </div>
            <div className=' text-[20px]'>
              <h3 className='font-bold'>803K</h3>
              <span className='text-Dark-grayish-blue text-[13px] tracking-wide relative bottom-2'>Likes</span>
            </div>
            <div className='text-[20px]'>
              <h3 className='font-bold'>1.4K</h3>
              <span className=' text-Dark-grayish-blue text-[13px] tracking-wide relative bottom-2'>Photos</span>
            </div>
          </div>
        </div>
      </div>
    </div >
    </>
  )
}

export default App
