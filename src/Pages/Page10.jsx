import React from 'react';
import video6 from '../assets/Videos/video6.mp4';
import video7 from '../assets/Videos/video7.mp4';

const Page10 = () => {
    return (
        <>
            <div className='h-screen relative p-3 bg-white'>
                <div className='h-full w-full bg-black rounded-[0.6vw] overflow-hidden relative flex items-center justify-center'>

                    <video
                        className="w-full h-full object-cover opacity-50 absolute top-0 left-0"
                        autoPlay
                        muted
                        loop
                        src={video6}>
                    </video>
                    <video
                        className="w-[33vw] absolute right-[10vw] top-1/2 transform -translate-y-1/2 rounded-full"
                        autoPlay
                        muted
                        loop
                        src={video7}>
                    </video>

                    <div className="absolute p-10 flex flex-col items-center text-white top-[2.5vw] space-y-10">
                        <div className="text-[13vw] font-[anzo4] text-center leading-[5.2vw]">
                            PERSONAL
                            <div className="font-[anzo2] text-[1.2vw] text-[#9b9b9b]">
                                Honesty, Communication, Punctuality</div>
                        </div>
                        <div className="text-[13vw] font-[anzo4] text-center leading-[5.2vw]">
                            PROFESSIONAL
                            <div className="font-[anzo2] text-[1.2vw] text-[#9b9b9b]">Photoshop, Wix Studio, Figma</div>
                        </div>
                        <div className="text-[13vw] font-[anzo4] text-center leading-[5.2vw]">
                            ADDITIONAL
                            <div className="font-[anzo2] text-[1.2vw] text-[#9b9b9b]">Business Development, Branding, SEO</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Page10;
