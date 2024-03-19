import React from 'react'

const Contact = () => {
  return (
    <section id='contact' >
      <div className=' h-screen flex relative items-center'>
        <div className=' z-20 absolute  overflow-visible left-28 w-[70%] h-[90%] grid grid-cols-4 gap-5 bg-transparent'>
          <div className=' relative transition-all duration-300 hover:border-zinc-700 border-transparent group border-4 hover:cursor-pointer rounded-3xl max-h-full bg-yellow-200 flex justify-center'>
            <div className="absolute top-[12%] left-[0%] w-[72.1%] rounded-full h-[2.5%] bg-zinc-700 transition-all opacity-0 group-hover:opacity-100 transform rotate-45 origin-top-left"></div>
            <div className="absolute top-[12%] right-[0%] w-[72.1%] rounded-full h-[2.5%] bg-zinc-700 transition-all opacity-0 group-hover:opacity-100 transform -rotate-45 origin-top-right"></div>
            <div className=' absolute top-[26%] '>
            Mail me!
            </div>
          </div>
          <div className=' hover:cursor-pointer rounded-3xl h-full bg-yellow-100 flex justify-center items-center '>
            RESUME
          </div>
          <div className=' hover:cursor-pointer rounded-3xl h-full  bg-blue-300 col-span-2 flex justify-center items-center'>
            LINKEDIN
          </div>
          <div className=' hover:cursor-pointer rounded-3xl h-full  bg-blue-300 col-span-2 flex justify-center items-center'>
            GITHUB
          </div>
          <div className=' hover:cursor-pointer rounded-3xl h-full  bg-blue-300 col-span-2 row-span-2 flex justify-center items-center'>
            <p className=' px-28'>
              NON PROFIT PROYECTS (location animals, students & proffessors app)
            </p>
          </div>
          <div className=' hover:cursor-pointer rounded-3xl h-full bg-yellow-200 flex justify-center items-center '>
            GIF?
          </div>
          <div className=' hover:cursor-pointer rounded-3xl h-full bg-yellow-100 flex justify-center items-center '>
            SLACK
          </div>
        </div>
        <div className=' z-0 absolute bg-purple-300 w-[88%] h-screen left-0'></div>
      </div>
    </section>
  )
}

export default Contact