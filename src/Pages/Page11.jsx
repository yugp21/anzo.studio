import React from 'react';
import image8 from '../assets/Images/Image8.webp';
import image9 from '../assets/Images/Image9.webp';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'


const Page11 = () => {


    // useGSAP(() => {
    //     gsap.to('#lastImage img', {
    //         rotate: 360,
    //         duration: 5,
    //         repeat: -1,
    //         ease: 'linear'
    //     })
    // })


    return (
        <div className="h-full relative p-3 mb-2 bg-white">
            <div
                className="h-full w-full rounded-[0.8vw] overflow-hidden relative bg-cover bg-center"
                style={{ backgroundImage: `url(${image9})` }}
            >
                <div className="px-[5vw] text-white font-[anzo4]">
                    <div className="text-[20vw] mt-[-3vw]">
                        GOT <span className="text-[#9b9b9b]">AN</span>
                    </div>
                    <div className="text-[20vw] leading-[2vw]">
                        IDEA
                    </div>
                </div>

                <div className="text-white tracking-wide px-[5vw] mt-[6.3vw] pb-[3vw]">
                    <p className="font-[anzo3] text-[#6c6c6c] leading-3">IT IS NOT JUST ABOUT SOLVING THE PROBLEM</p>
                    <p className="font-[anzo3] text-[#6c6c6c]">BUT <span className='font-[anzo2]'>OFFERING THE TRANSFORMATIOIN!</span></p>
                </div>

                <div className="absolute top-[15vw] left-[15vw] inset-0 flex items-center justify-center space-x-8">
                    <div id='lastImage' className="text-white">
                        <img src={image8} alt="Icon" className="h-[6.5vw] border-r-[1px] pr-10 border-white" />
                    </div>
                    <div className="text-white pl-2 text-left space-y-[-0.3vw]">
                        <p className="font-[anzo3] text-gray-400">WORLD SERVICE</p>
                        <p className="font-[anzo5]">I CAN COME TO WHENEVER YOU ARE.</p>
                        <p className="text-gray-400 font-[anzo3] mt-4">+91 9737284671</p>
                    </div>
                </div>


                <div className="absolute bottom-2 right-3 text-white font-[anzo3] text-[1vw] opacity-90">
                    CREATED BY <span className='text-[#FFD700]'>YUG</span>
                </div>
            </div>
        </div>
    );
};

export default Page11;
