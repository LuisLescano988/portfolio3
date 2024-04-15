import React, { useState } from 'react'
import LiImage from '../assets/imgs/Li Pf.jpg'
import gitHubPf from '../assets/imgs/GithubPf.jpg'
import { KittenEyes } from './KittenEyes'
import { IoMdOpen } from 'react-icons/io'
import { FaXTwitter } from "react-icons/fa6";
import iconResume from '../assets/imgs/resume icon.jpg'
import { NavLink } from 'react-router-dom'


const Contact = ({ currentLighted, setCurrentLighted }) => {

  const [profitDiv, setProfitDiv] = useState('false')

  return (
    <section id='contact' >
      <div className={` h-screen flex relative items-center transition-all ${currentLighted ? 'bg-zinc-600 text-orange-800' : 'bg-slate-50 text-blue-800'}`}>
        <div className=' z-20 absolute  overflow-visible left-28 w-[70%] h-[90%] grid grid-cols-4 gap-5 bg-transparent'>
          <div className={` relative transition-all duration-500 hover:border-zinc-500 border-transparent group border-4   rounded-3xl max-h-full ${currentLighted ? 'bg-rose-300' : 'bg-yellow-200'} flex justify-center`}>
            <div className="absolute top-[12%] left-[0%] w-[72.1%] rounded-full h-[2.5%] bg-zinc-500 transition-all duration-500 opacity-0 group-hover:opacity-100 transform rotate-45 origin-top-left"></div>
            <div className="absolute top-[12%] right-[0%] w-[72.1%] rounded-full h-[2.5%] bg-zinc-500 transition-all duration-500 opacity-0 group-hover:opacity-100 transform -rotate-45 origin-top-right"></div>
            <div className=' absolute top-[26%] font-american text-xl'>
              Mail me!
            </div>
            <a className=' absolute cursor-default h-[99%] w-[99%]' href="mailto:alfredoluislescano@gmail.com" rel="noreferrer" target="_blank">
            </a>
            <IoMdOpen className=' absolute top-[85%] left-[85%]' />
          </div>
          <div className={` border-transparent z-10 hover:border-zinc-500 duration-700 border-4 transition-opacity relative rounded-3xl h-full ${!currentLighted ? 'bg-yellow-100' : 'bg-rose-200'} flex flex-row justify-center items-center  group`}>
            <div className=' absolute w-auto flex flex-col justify-center text-center group-hover:-translate-x-16 duration-700 '>
              <img className=' z-30 md:w-20 w-28 h-auto group-hover:w-20 ease-in transition-all mb-1' src={iconResume} alt="" />
              RESUME
              <div className=' absolute z-0 group-hover:z-40 opacity-0 duration-700 group-hover:hover:opacity-100 group-hover:opacity-20 tracking-widest transition-all group-hover:translate-x-24 group-hover:-translate-y-8 font-marcher'>
                <NavLink className='flex flex-row h-full w-full italic cursor-default' target='_blank' to={'/resume'}>
                  English
                  <IoMdOpen className=' ' />
                </NavLink>
              </div>
              <div className=' absolute z-0 group-hover:z-40 opacity-0 duration-700 group-hover:hover:opacity-100 group-hover:opacity-20 tracking-widest transition-all group-hover:translate-x-24 group-hover:translate-y-2 font-marcher'>
                <NavLink className=' h-full w-full italic cursor-default flex flex-row' target='_blank' to={'/curriculum'}>
                  Español
                  <IoMdOpen className=' ' />
                </NavLink>
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
          <div className={` flex flex-col items-center group border-transparent border-4 hover:border-zinc-500 transition-colors duration-500 relative rounded-3xl  h-full ${currentLighted ? 'bg-teal-500' : 'bg-blue-300'} col-span-2 row-span-2`}>
            <div className='absolute text-center group-hover:top-[5%] top-[35%] transition-all duration-700'>
              <div className='text-2xl font-extrabold italic'>
                NON PROFIT PROYECTS
              </div>
              <div>
                with friends
              </div>
              < div className=' text-xs'>(Soon - Work in progress)</div>
            </div>
            <div className='absolute top-[37%] group-hover:left-[10%] left-[45%] flex flex-col group-hover:opacity-100 opacity-0 transition-all duration-700'>
              <div className=' transition-all duration-500 font-bold mb-0 w-[85%] group-hover:mb-[10%] -mt-[15%]'>Pet founder
              <div className=' opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-normal '>Web to locate stray or injured animals through geolocation, for people or animal associations to use it as a free tool</div>
              </div>
              <div className=' transition-all duration-500 font-bold mb-0 w-[85%] '>Student monitoring
              <div className=' opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-normal '>application to carry out personalized tracking of homework and grades of students, to have information of the academic situation</div>
              </div>
            </div>
          </div>
          <div className={` relative rounded-3xl transition-all duration-500 ${currentLighted ? 'bg-rose-300' : 'bg-yellow-200'}`}>
            <KittenEyes />
          </div>
          <a className={` relative rounded-3xl ${currentLighted ? 'bg-rose-200' : 'bg-yellow-100'} cursor-default group border-transparent border-4 hover:border-zinc-500 transition-all duration-500 flex justify-center items-center text-5xl `}
            href={'https://twitter.com/LuisLes988'} target='_blank'>
            <FaXTwitter className=' text-blue-100 group-hover:text-blue-800 transition-all duration-500 ' onMouseEnter={() => handleNonProfit} />
          </a>
        </div>
        <div className={` z-0 absolute ${currentLighted ? 'bg-violet-950' : 'bg-purple-300'} w-[88%] h-screen left-0`}>
        </div>
      </div>
    </section>
  )
}

export default Contact