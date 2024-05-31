import React, { useEffect, useState } from 'react'
import lamp from '../assets/imgs/lamp.png'
import deskatop from '../assets/imgs/desktop-img.png'
import ligth from '../assets/imgs/ligth.png'

const Intro = ({currentLighted, setCurrentLighted}) => {
    const adjetives = [' a cat lover', ' an amateur cheff', ' a field hockey player', ' a football fan']

    const [adjetive, setAdjetive] = useState(adjetives[0])

    const toggleLigthed = () => {
        setCurrentLighted(!currentLighted)
    };

    useEffect(() => {
        let index = 1;

        const intervalId = setInterval(() => {
            setAdjetive(adjetives[index]);
            index = (index + 1) % adjetives.length;
        }, 4000);

        return () => clearInterval(intervalId);
    }, []);


    return (
        <section id='home' className={` snap-center h-screen overflow-hidden `}>
            <div className=' flex flex-row'>
                <div className={` flex pl-2 justify-center items-center h-screen w-2/3 bg-yellow-100' ${!currentLighted?'bg-yellow-100':' bg-pink-600'}`}>
                    <div className=' md:w-8/12 w-10/12 md:h-fit h-1/2'>
                        <div className={` mb-2 font-recipes h-fit md:w-full text-4xl ${currentLighted?'text-lime-400':'text-blue-900'} font-extrabold `}>😀 Hi, I'm Luis </div>
                        <p className={` relative font-marcher md:text-5xl text-3xl text-transparent ${!currentLighted==true?'text-stroke-3':'text-stroke-4'} `}>
                            I'm a Web Developer who likes to craft interactive things with code and also
                            <span className={`animate-fade-in-out text-stroke-3 ${adjetive.includes('cat') || adjetive.includes('field') ? 'text-lime-400' : ' text-purple-500'}`}>
                                {adjetive}
                            </span>
                        </p>
                    </div>
                </div>
                <div className={` flex justify-center relative items-center h-screen w-1/3 transition-colors ${!currentLighted?'bg-slate-50':'bg-zinc-600'}`}>
                    <div className=' relative w-screen -left-28 bottom-[10%]'>
                        <div className=' xl:flex hidden flex-row relative'>
                            <button className=' z-30 absolute xl:mt-[8%] xl:ml-[25%] 2xl:mt-[10%] 2xl:ml-[28%] lg:text-4xl   font-black'
                                onClick={()=>toggleLigthed()} >.</button>
                            <div className=' '>
                                <img className=' z-0 absolute top-0 left-0 w-4/12 xl:w-[50.6%] 2xl:w-[56.2%] ' src={lamp} alt="" />
                                <img className={` z-20 absolute opacity-50 xl:w-[71.7%] 2xl:w-[79.6%] ${currentLighted==true?'block':'hidden'}`}
                                    src={ligth} alt="" />
                            </div>
                            <img className=' z-10 absolute xl:w-[90%] 2xl:w-[100%]' src={deskatop} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Intro