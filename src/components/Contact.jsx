import React from 'react'
import LiImage from '../assets/imgs/Li Pf.jpg'
import gitHubPf from '../assets/imgs/GithubPf.jpg'
import { KittenEyes } from './KittenEyes'
import { IoMdOpen } from 'react-icons/io'
import { Link } from 'react-router-dom'


const Contact = () => {
  return (
    <section id='contact' >
      <div className=' h-screen flex relative items-center'>
        <div className=' z-20 absolute  overflow-visible left-28 w-[70%] h-[90%] grid grid-cols-4 gap-5 bg-transparent'>
          <div className=' relative transition-all duration-500 hover:border-zinc-700 border-transparent group border-4   rounded-3xl max-h-full bg-yellow-200 flex justify-center'>
            <div className="absolute top-[12%] left-[0%] w-[72.1%] rounded-full h-[2.5%] bg-zinc-700 transition-all duration-500 opacity-0 group-hover:opacity-100 transform rotate-45 origin-top-left"></div>
            <div className="absolute top-[12%] right-[0%] w-[72.1%] rounded-full h-[2.5%] bg-zinc-700 transition-all duration-500 opacity-0 group-hover:opacity-100 transform -rotate-45 origin-top-right"></div>
            <div className=' absolute top-[26%] font-american text-xl'>
              Mail me!
            </div>
            <IoMdOpen className=' absolute top-[85%] left-[85%]' />
          </div>
          <div className=' relative rounded-3xl h-full bg-yellow-100 flex justify-center items-center '>
            <a className=' flex justify-center items-center absolute h-full w-full ' target='_blank' href={'/resume'} >
              RESUME
            </a>
          </div>
          <div className=' relative group opacity-70 duration-500 transition-all border-opacity-0 hover:border-opacity-100 border-4 border-zinc-700 rounded-3xl h-full  bg-blue-300 col-span-2 flex justify-center items-center'>
            <a className=' absolute z-10 w-full h-full cursor-default' target='_blank' href="https://www.linkedin.com/in/luis-lescano/" ></a>
            <img className=' absolute h-full w-[85%] object-cover ' src={LiImage} alt="" />
            <div className=' absolute opacity-0 group-hover:opacity-100 duration-300 text-3xl rounded-LG font-marcher bg text-sky-900 bg-opacity-60 bg-zinc-100'>
              Linked<span className=' text-zinc-50 bg-sky-900 rounded-lg px-1'>in</span>
            </div>
          </div>
          <div className=' relative group opacity-70 duration-500 transition-all border-opacity-0 hover:border-opacity-100 border-4 border-zinc-700 rounded-3xl h-full  bg-blue-300 col-span-2 flex justify-center items-center'>
            <a className=' absolute z-10 w-full h-full cursor-default' target='_blank' href="https://github.com/LuisLescano988" ></a>
            <img className=' absolute h-full w-[94%] object-cover ' src={gitHubPf} alt="" />
            <div className=' absolute opacity-0 group-hover:opacity-100 duration-300 text-3xl rounded-lg font-marcher bg text-zinc-950 bg-opacity-100 bg-white'>
              GitHub
            </div>
          </div>
          <div className='   rounded-3xl h-full  bg-blue-300 col-span-2 row-span-2 flex justify-center items-center'>
            <p className=' px-28'>
              NON PROFIT PROYECTS (location animals, students & proffessors app)
            </p>
          </div>
          <div className=' relative rounded-3xl bg-yellow-200'>
            <KittenEyes />
          </div>
          <div className=' relative rounded-3xl bg-yellow-100 flex justify-center items-center '>
            SLACK
          </div>
        </div>
        <div className=' z-0 absolute bg-purple-300 w-[88%] h-screen left-0'></div>
      </div>
    </section>
  )
}

export default Contact