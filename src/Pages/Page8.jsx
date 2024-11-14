import React from 'react';
import video4 from '../assets/Videos/video4.mp4';
import video5 from '../assets/Videos/video5.mp4';

const Page8 = () => {
  return (
    <>
      <div className='h-screen relative p-3 bg-white'>
        <div className='h-full w-full bg-black rounded-[0.6vw] overflow-hidden relative flex items-center justify-center'>

          <video
            className="w-full h-full object-cover opacity-50 absolute top-0 left-0"
            autoPlay
            muted
            loop
            src={video4}>
          </video>
          <video
            className="w-[30vw] absolute left-20 top-1/2 transform -translate-y-1/2 rounded-full"
            autoPlay
            muted
            loop
            src={video5}>
          </video>
          <div className="absolute p-10 flex flex-col items-center text-white top-[1vw] space-y-10">
            <div className="text-[13vw] font-[anzo4] text-center leading-[5.2vw]">
              PERSONAL
              <div className="font-[anzo2] text-[1.2vw] text-[#9b9b9b]">Intuition, Imagination, Discipline</div>
            </div>
            <div className="text-[13vw] font-[anzo4] text-center leading-[5.2vw]">
              PROFESSIONAL
              <div className="font-[anzo2] text-[1.2vw] text-[#9b9b9b]">Time Management, Multitasking, Creativity</div>
            </div>
            <div className="text-[13vw] font-[anzo4] text-center leading-[5.2vw]">
              ADDITIONAL
              <div className="font-[anzo2] text-[1.2vw] text-[#9b9b9b]">3D, Animation, AI Tools</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page8;
