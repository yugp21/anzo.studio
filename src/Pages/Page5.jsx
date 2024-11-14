import video2 from '../assets/Videos/video2.mp4'

const Page5 = () => {
    return (
        <div className='h-screen relative p-3 bg-white'>
            <div className='h-full w-full bg-black rounded-[2.3vw] overflow-hidden'>
                <video autoPlay loop muted className='h-full w-full object-cover' src={video2}></video>
                <h1 className='font-[anzo4] text-[40vw] absolute left-20 bottom-[-28%] tracking-wide'>ABOUT</h1>
            </div>
        </div>
    );
};

export default Page5;
