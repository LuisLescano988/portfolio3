import React, { useState } from 'react'
import games from '../assets/imgs/gamesPf.jpeg'
import arca from '../assets/imgs/arcaPf.jpeg'
import mestixa from '../assets/imgs/mestixaPf.jpeg'
import diagram from '../assets/imgs/diagramPf.png'
import { IoMdOpen } from 'react-icons/io'
import { useEffect } from 'react'
import { Transition } from '@tailwindui/react'

const Work = ({ currentLighted, setCurrentLighted }) => {

  const frontProjects = [
    {
      projectName: 'Mestixa',
      description: 'Restaurant Landing page, lightweight website, offers a smooth user experience, taking into account responsive design for multiple screen resolutions',
      intro: 'Restaurant Landing page...',
      image: mestixa,
      hover: true,
      techTools: ['React', 'Tailwind'],
      link: 'https://www.mestixarestaurant.com/'
    },
    {
      projectName: 'Arca Menu',
      description: 'Online menu, which offers its variety in a fast and intuitive way through a group of interactive selectors. It is mainly designed to fit mobile screens',
      intro: 'Online menu...',
      image: arca,
      hover: true,
      techTools: ['React', 'Tailwind'],
      link: 'https://new-menu-arca.vercel.app/'
    },
    // {
    //   projectName: 'Programming adventure',
    //   description: 'Mini web app in which the user can see a programming roadmap to learn, taking into account the current technologies and what is the objective to which he aspires',
    //   intro: 'Mini web app...',
    //   image: diagram,
    //   techTools: ['Vue', 'Tailwind'],
    //   link: 'inprocess'
    // }
  ]


  const backProjects = [
    {
      projectName: 'Games Trend',
      description: 'Fullstack SPA, fetching data from Rawg API with controlled form to post game info to database, filters by API/database or genre; sorts by name/score, also details of each game and searchbar',
      image: games,
      techTools: ['React', 'Redux', 'Node', 'PostgreSQL', 'Sequelize'],
      link: 'https://fullstack-video-games.vercel.app/'
    },
    // {
    //   projectName: "Nomad's logbook ",
    //   description: '',
    //   image: '',
    //   techTools: [],
    //   link: '/inprocess'
    // },

  ]

  const [hoverDesign, setHoverDesign] = useState(false)
  const [hoverEngineering, setHoverEngineering] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null);
  const [visi, setVisi] = useState('opacity-0')
  const [prev, setPrev] = useState('')


  const handleClick = (project) => {
    setSelectedProject(project);
    setTimeout(() => {
      visi == 'opacity-0' ? setVisi('opacity-100') : setVisi('opacity-0')
    }, 50);
  };

  const handlePrev = (project) => {
    if (project) {
      const currentIndex = frontProjects.findIndex(project => project.projectName === selectedProject.projectName);
      const previousIndex = (currentIndex - 1 + frontProjects.length) % frontProjects.length;
      setSelectedProject(frontProjects[previousIndex]);
    }
  }

  const handleNext = (project) => {
    if (project) {
      const currentIndex = frontProjects.findIndex(project => project.projectName === selectedProject.projectName);
      const previousIndex = (currentIndex + 1 + frontProjects.length) % frontProjects.length;
      setSelectedProject(frontProjects[previousIndex]);
    }
  }

  const handlePrevBack = (project) => {
    if (project) {
      const currentIndex = backProjects.findIndex(project => project.projectName === selectedProject.projectName);
      const previousIndex = (currentIndex - 1 + backProjects.length) % backProjects.length;
      setSelectedProject(backProjects[previousIndex]);
    }
  }

  const handleNextBack = (project) => {
    if (project) {
      const currentIndex = backProjects.findIndex(project => project.projectName === selectedProject.projectName);
      const previousIndex = (currentIndex + 1 + backProjects.length) % backProjects.length;
      setSelectedProject(backProjects[previousIndex]);
    }
  }


  return (
    <section id='work' className=' snap-center relative overflow-hidden '>
      {selectedProject ?
        <div
          className={` md:absolute md:inline hidden z-50 w-screen h-screen transition-all duration-700 delay-75 ${selectedProject ? visi : visi}`}>
          <div className='flex flex-row relative justify-center transition-all h-full bg-opacity-90 bg-black'>
            <div className=' rotate-90 object-cover md:text-2xl text-white   z-50'
              onClick={backProjects.find(project => project.projectName == selectedProject.projectName) ? () => handlePrevBack(selectedProject) : () => handlePrev(selectedProject)}
            >🅥</div>
            <Transition className=' flex flex-col relative justify-center items-center w-10/12 h-full'
              show={selectedProject ? true : false}
              enter='transition-opacity duration-700'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='transition-opacity duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <div className=' flex rounded-t-xl border-4 border-b-2 w-2/5 px-4 py-1 m-1 mb-0 text-zinc-300 border-white justify-between'>
                <span>
                  {selectedProject.projectName}
                </span>
                <span className=' flex flex-row'>
                  ⏺ ⏺
                  <span className=' ml-1'
                    onClick={() => handleClick('')}
                  >
                    🅧
                  </span>
                </span>
              </div>
              <div className=' grid grid-cols-4 grid-rows-3 rounded-b-xl border-4 border-t-2 px-8 py-4 w-2/5 h-3/6 border-white text-zinc-300'>
                <div className=' relative row-span-1 col-span-4 h-1/2'>
                  {selectedProject.description}
                </div>
                <div className=' row-span-2 col-span-3'>
                  <img className=' w-[99%] h-[95%] object-top object-cover ' src={selectedProject.image} alt="" />
                </div>
                <div className=' flex flex-col items-center row-span-2 col-span-1 '>
                  {selectedProject.techTools.map((fram, idx) => {
                    return <div key={idx} className=' flex flex-row'>
                      <div >{fram}</div>
                    </div>
                  }
                  )}
                  <div className=' '><a target='_blank' href={selectedProject.link}>Website <IoMdOpen /> </a></div>
                </div>
              </div>
            </Transition>
            <div className=' z-50 -rotate-90 text-2xl text-white  '
              onClick={backProjects.find(project => project.projectName == selectedProject.projectName) ? () => handleNextBack(selectedProject) : () => handleNext(selectedProject)}
            >🅥</div>
          </div>
        </div> :
        null
      }
      <div className={` h-screen relative flex justify-center transition-all duration-500 ${!currentLighted ? 'bg-purple-200' : ' bg-violet-950'}`}>
        <div
          className=' absolute flex md:flex-row flex-col mt-0 md:items-center w-full md:top-[11%] top-[14%] md:left-[9%] left-[4%] '
          onMouseLeave={() => setHoverDesign(false)}
        >
          <div className=' flex flex-col relative justify-center items-start h-2/3 md:w-[30%] z-10'
            onMouseOver={() => setHoverDesign(true)}
          >
            <p className={` font-marcher md:text-4xl text-2xl transition-all duration-1000 ${!currentLighted ? 'text-blue-800' : 'text-lime-300'}`}>
              Designing
            </p>
            <p className={` leading-loose text-sm md:text-base w-11/12 md:w-full md:mt-2 md:tracking-widest transition-all duration-700 ${!currentLighted ? 'text-blue-800' : 'text-neutral-400'}`}>
              I am an atypical programmer, committed to creating fluid user experiences and
              designing with contemporary and attractive styles. Always looking to share knowledge
              that brings new perspectives, always listening to clients to approach the work focused
              on the needs of today's market.
            </p>
          </div>
          <div
            className={` grid grid-cols-3 md:gap-3 gap-1 md:mx-4 h-[30%] md:w-[45%] z-0`}
          >
            {frontProjects.map((project, idx) => {
              return (
                <div
                  className={` md:inline md:px-3 md:py-1 rounded-3xl h-52 overflow-hidden transition-all duration-700 group
                    ${!hoverDesign ? ' md:-translate-x-[520px] md:h-48 md:opacity-0' : ' md:opacity-10 md:translate-x-0 hover:opacity-100'}
                    ${selectedProject === project.projectName ? ' hidden' : ''}`}
                  key={idx}
                >
                  <a className='md:hidden' target='_blank' href={selectedProject?.link}>
                    <img
                      onClick={() => handleClick(project)}
                      src={project.image}
                      className={` md:absolute md:bottom-0 inline -bottom-[58%] left-0 mt-2 opacity-90 transition-all duration-500 md:object-top object-cover md:h-full h-[57%] md:w-full w-[90%] rounded-2xl group-hover:opacity-100`}
                    />
                  </a>
                  <img
                    onClick={() => handleClick(project)}
                    src={project.image}
                    className={` md:absolute md:bottom-0 hidden md:inline -bottom-[58%] left-0 opacity-90 transition-all duration-500 md:object-top object-cover md:h-full h-[57%] w-full rounded-2xl group-hover:opacity-100`}
                  />
                </div>)
            })}
          </div>
        </div>
        <div className=' absolute flex md:flex-row flex-col w-full md:top-[55%] top-[27%] md:left-[6%] left-[4%]'
          onMouseLeave={() => setHoverEngineering(false)}
        >
          <div className=' grid grid-cols-3 md:mx-4 h-[30%] md:w-[45%] '
          >
            {backProjects.map((project, idx) => {
              return (
                <div
                  className={` col-start-2 md:px-3 py-1 rounded-3xl h-52 w-full md:flex justify-center transition-all duration-700 group
                ${!hoverEngineering ? ' md:translate-x-[93%] md:h-48 md:opacity-0 ' : ' md:opacity-10 md:-translate-x-[19%] hover:opacity-100  '}
                ${selectedProject === project.projectName ? ' hidden' : ''}`}
                  key={idx}
                >
                  <a className=' md:hidden ' target='_blank' href={selectedProject?.link}>
                    <img src={project.image}
                      onClick={() => handleClick(project)}
                      className={`absolute md:bottom-0 -bottom-[35%] left-0 opacity-90 transition-all duration-500 object-top object-cover md:h-full h-[33%] md:w-full w-[29%] rounded-2xl group-hover:opacity-100`}
                    />
                  </a>
                  <img src={project.image}
                    onClick={() => handleClick(project)}
                    className={`absolute md:bottom-0 hidden md:inline -bottom-[33%] left-0 opacity-90 transition-all duration-500 object-top object-cover md:h-full h-[57%] md:w-full w-2/5 rounded-2xl group-hover:opacity-100`}
                  />
                </div>)
            })}
          </div>
          <div className=' flex flex-col relative justify-center items-start h-2/3 md:w-[30%]  '
            onMouseOver={() => setHoverEngineering(true)}
          >
            <p className={` ${!currentLighted ? 'text-blue-800' : 'text-lime-300'} font-marcher md:text-4xl text-2xl`}>
              Engineering
            </p>
            <p className={` ${!currentLighted ? 'text-blue-800' : 'text-neutral-400'} md:text-base text-sm leading-loose md:mt-2 md:tracking-widest w-[93%]`}>
              When building applications with Javascript or Python I focus on delivering optimized
              solutions that prioritize scalability, performance and speed. It is also important for
              me to keep my code in line with innovations in the IT world.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Work