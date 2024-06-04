import React from 'react'
import nobak from '../assets/imgs/headshot.jpeg'

const About = ({currentLighted, setCurrentLighted}) => {
  return (
    <section id='about'>
      <div className={` min-[400px]:min-h-96 h-screen overflow-hidden ${!currentLighted?'bg-yellow-100':'bg-pink-600'} transition-all flex flex-row justify-evenly relative items-center`}>
        <div className=' md:w-2/5 w-2/3 md:relative flex absolute z-10 md:left-5 left-3'>
          <p className={` lg:leading-9 leading-none tracking-wider ${currentLighted?'text-slate-300':'text-blue-800'}`}>
            Hi, my name is Luigi and I am a highly ambitious,
            self-motivated, and driven Full stack developer
            based in Santiago del Estero, Argentina. <br /> I graduated
            from Henry Bootcamp, in 2021 with more than 900
            hours of code and have been working in the field ever since.
            I have a lot of hobbies and passions that keep me busy.
            From playing with my dogs and cats, playing sports,
            cooking for mates, to mentoring friends to learn programming,
            I am always seeking new experiences and love to stay engaged
            with projects and learning new technologies. <br /> My goal is to
            never stop being curious because it drives me to be a good
            learner. I combine that with my passion for technology and my
            desire to always go beyond the limits, imagining solutions
            or projects that have a significant impact on companies. 🤓
          </p>
        </div>
        <div className=' md:w-1/4 md:inline md:relative md:h-fit h-screen md:top-0 top-[15%]  absolute right-2 w-[40%] z-0 '>
          <img className=' md:relative absolute md:rounded-none rounded-full border-4 border-black shadow3d md:w-full w-[65%] right-0' src={nobak} alt="" />
        </div>
      </div>
    </section>
  )
}

export default About