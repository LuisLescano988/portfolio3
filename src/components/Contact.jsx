import React from 'react'
import LiImage from '../assets/imgs/Li Pf.jpg'
import gitHubPf from '../assets/imgs/GithubPf.jpg'
import { KittenEyes } from './KittenEyes'
import { IoMdOpen } from 'react-icons/io'
import iconResume from '../assets/imgs/resume icon.jpg'


const Contact = ({ currentLighted, setCurrentLighted }) => {
  return (
    <section id='contact' >
      <div className={` h-screen flex relative items-center transition-all ${currentLighted ? 'bg-zinc-600 text-orange-800' : 'bg-slate-50 text-blue-800'}`}>
        <div className=' z-20 absolute  overflow-visible left-28 w-[70%] h-[90%] grid grid-cols-4 gap-5 bg-transparent'>
          <div className={` relative transition-all duration-500 hover:border-zinc-500 border-transparent group border-4   rounded-3xl max-h-full ${currentLighted ? 'bg-rose-300' : 'bg-yellow-200'} flex justify-center`}>
            <div className="absolute top-[12%] left-[0%] w-[72.1%] rounded-full h-[2.5%] bg-zinc-500 transition-all duration-500 opacity-0 group-hover:opacity-100 transform rotate-45 origin-top-left"></div>
            <div className="absolute top-[12%] right-[0%] w-[72.1%] rounded-full h-[2.5%] bg-zinc-500 transition-all duration-500 opacity-0 group-hover:opacity-100 transform -rotate-45 origin-top-right"></div>
            <div className=' absolute top-[26%]  text-xl'>
              Mail me!
            </div>
            <a className=' absolute cursor-default h-[99%] w-[99%]' href="mailto:alfredoluislescano@gmail.com" rel="noreferrer" target="_blank">
            </a>
            <IoMdOpen className=' absolute top-[85%] left-[85%]' />
          </div>
          <div className={` border-transparent z-10 hover:border-zinc-500 duration-700 border-4 transition-opacity relative rounded-3xl h-full ${!currentLighted ? 'bg-yellow-100' : 'bg-rose-200'} flex flex-row justify-center items-center  group`}>
            <div className=' absolute w-auto flex flex-col justify-center text-center group-hover:-translate-x-16 duration-700'>
              <img className=' z-30 md:w-20 w-28 h-auto group-hover:w-20 ease-in transition-all mb-1' src={iconResume} alt="" />
              RESUME
              <div className=' absolute z-0 group-hover:z-40 opacity-0 duration-700 group-hover:hover:opacity-100 group-hover:opacity-20 tracking-widest transition-all group-hover:translate-x-24 group-hover:-translate-y-8 font-marcher'>
                <a className='flex flex-row h-full w-full cursor-default' target='_blank' href={'https://portfolio3-ruddy.vercel.app/resume'}>
                  English
                  <IoMdOpen className=' ' />
                </a>
              </div>
              <div className=' absolute z-0 group-hover:z-40 opacity-0 duration-700 group-hover:hover:opacity-100 group-hover:opacity-20 tracking-widest transition-all group-hover:translate-x-24 group-hover:translate-y-2 font-marcher'>
                <a className=' h-full w-full cursor-default flex flex-row' target='_blank' href={'/curriculum'}>
                  Español
                  <IoMdOpen className=' ' />
                </a>
              </div>
            </div>
          </div>
          <div className={` relative group opacity-70 duration-500 transition-all border-opacity-0 hover:border-opacity-100 border-4 border-zinc-700 rounded-3xl h-full  ${currentLighted ? 'bg-teal-400' : 'bg-blue-300'} col-span-2 flex justify-center items-center`}>
            <a className=' absolute z-10 w-full h-full cursor-default' target='_blank' href="https://www.linkedin.com/in/luis-lescano/" ></a>
            <img className=' absolute h-full w-[85%] object-cover ' src={LiImage} alt="" />
            <div className=' absolute opacity-0 group-hover:opacity-100 duration-300 text-3xl rounded-LG font-marcher bg text-sky-900 bg-opacity-60 bg-zinc-100'>
              Linked<span className=' text-zinc-50 bg-sky-900 rounded-lg px-1'>in</span>
            </div>
          </div>
          <div className={` relative group opacity-70 duration-500 transition-all border-opacity-0 hover:border-opacity-100 border-4 border-zinc-700 rounded-3xl h-full  ${currentLighted ? 'bg-teal-400' : 'bg-blue-300'} col-span-2 flex justify-center items-center`}>
            <a className=' absolute z-10 w-full h-full cursor-default' target='_blank' href="https://github.com/LuisLescano988" ></a>
            <img className=' absolute h-full w-[94%] object-cover ' src={gitHubPf} alt="" />
            <div className=' absolute opacity-0 group-hover:opacity-100 duration-300 text-3xl rounded-lg font-marcher bg text-zinc-950 bg-opacity-100 bg-white'>
              GitHub
            </div>
          </div>
          <div className={` rounded-3xl h-full ${currentLighted ? 'bg-teal-500' : 'bg-blue-300'} col-span-2 row-span-2 flex justify-center items-center`}>
            <p className=' px-28'>
              NON PROFIT PROYECTS (location animals, students & proffessors app)
            </p>
          </div>
          <div className={` relative rounded-3xl transition-all duration-500 ${currentLighted ? 'bg-rose-300' : 'bg-yellow-200'}`}>
            <KittenEyes />
          </div>
          <div className={` relative rounded-3xl ${currentLighted ? 'bg-rose-200' : 'bg-yellow-100'} flex justify-center items-center `}>
            SLACK
          </div>
        </div>
        <div className={` z-0 absolute ${currentLighted ? 'bg-violet-950' : 'bg-purple-300'} w-[88%] h-screen left-0`}></div>
      </div>
    </section>
  )
}

export default Contact