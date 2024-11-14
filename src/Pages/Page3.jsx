import React from 'react'
import image5 from '../assets/Images/Image5.webp'
import video1 from '../assets/Videos/video1.mp4'

const Page3 = () => {
    return (
        <>
            <>
                <div className='h-screen relative flex items-center justify-center bg-white'>
                    <img className='absolute h-[80vh] z-20' src={image5} alt="" />
                    <video autoPlay loop muted className='h-[70vh] w-[48vw] z-10 relative object-cover' src={video1}></video>
                    <div className="h-[2px] w-[58vw] top-[43%] z-0 absolute bg-[#6a6a6a]"></div>
                    <div className="h-[2px] w-[85vw] top-[60%] z-0 absolute bg-[#6a6a6a]"></div>
                    <div className="h-[2px] w-[100vw] top-[76%] z-0 absolute bg-[#6a6a6a]"></div>
                </div>
            </>
        </>
    )
}

export default Page3