import React, { useEffect } from 'react'

export const KittenEyes = () => {

  useEffect(() => {
    const handleMouseMove = (event) => {
      const pupil = document.querySelectorAll('.pupil');

      const x = event.clientX / window.innerWidth >= 0.29 ? '100%' : event.clientX * 330 / (window.innerWidth) + "%";
      const y = event.clientY * 30 / (window.innerHeight / 2.5) + "%";

      pupil.forEach(p => {
        p.style.left = x;
        p.style.top = y;
        p.style.transform = 'translate(-' + x + ',-' + y + ')';
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className=' absolute cursor-default bg-stone-500 h-[80px] w-[74px] md:bottom-1/2 bottom-12 left-1 md:left-1/3 rounded-full'>
      <div className=' w-full absolute text-center flex flex-row justify-center top-1/4'>
        <div className='relative mx-1'>
          <div className='absolute w-0 h-0 rotate-12 border-t-[14px] border-t-transparent border-l-[30px] border-stone-500 border-b-[30px] border-b-transparent bottom-3 left-[1px]'></div>
        </div>
        <div className=' relative bg-white inline-block overflow-hidden mx-1 h-6 w-6 rounded-full'>
          <div id='pupil' style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} className='pupil absolute bg-black self-center w-[21%] h-[55%] rounded-3xl'>
          </div>
        </div>
        <div className=' relative bg-white inline-block overflow-hidden mx-1 h-6 w-6 rounded-full'>
          <div id='pupil' style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} className='pupil absolute bg-black self-center w-[21%] h-[55%] rounded-3xl'>
          </div>
        </div>
        <div className='relative mx-1'>
          <div className='absolute w-0 h-0 -rotate-12 border-t-[14px] border-t-transparent border-r-[30px] border-stone-500 border-b-[30px] border-b-transparent bottom-3 -left-[31px]'></div>
        </div>
      </div>
      <div className='relative'>
        <div className=" absolute top-12 rounded-lg left-[30.5px] w-4 h-20 border-t-[8px] border-t-pink-300 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent"></div>
      </div>
      <div className=' relative'>
        <div className=' absolute font-semibold rotate-180 top-[51px] left-[34px] text-black z-30'>T</div>
        <div className=' absolute font-semibold rotate-180 top-[55px] -left-[1px] text-black z-30'>
          <div className=' absolute -rotate-12 -top-2'>____</div>
          <div className=' '>____</div>
        </div>
        <div className=' absolute font-semibold rotate-180 top-[55px] left-[47px] text-black z-30'>
          <div className=' absolute rotate-12 -top-2'>____</div>
          <div className=' '>____</div>
        </div>
      </div>
      <div className=' md:absolute hidden md:inline bg-stone-500 rounded-t-full top-14 -left-[5px] w-[84px] h-[100px]'>
        <div className=' absolute bottom-0 left-[19px] h-12 w-4 border-l-2 border-r-2 border-black'></div>
        <div className=' absolute bottom-0 left-[19px] h-2 w-4 border border-black rounded-t-full'></div>
        <div className=' absolute bottom-0 left-[49px] h-12 w-4 border-l-2 border-r-2 border-black'></div>
        <div className=' absolute bottom-0 left-[49px] h-2 w-4 border border-black rounded-t-full'></div>
      </div>
    </div>
  )
}
