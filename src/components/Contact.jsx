import React from 'react'

const Contact = () => {
  return (
    <section id='contact' >
      <div className=' h-screen flex relative items-center'>
        <div className=' z-20 absolute  overflow-visible left-28 w-[70%] h-[90%] grid grid-cols-4 gap-5 bg-transparent'>
          <div className=' hover:cursor-pointer rounded-3xl h-full bg-yellow-200 flex justify-center items-center'>
            GITHUB
          </div>
          <div className=' hover:cursor-pointer rounded-3xl h-full bg-yellow-100 flex justify-center items-center '>
            GIF
          </div>
          <div className=' hover:cursor-pointer rounded-3xl h-full  bg-blue-300 col-span-2 flex justify-center items-center'>
            LINKEDIN
          </div>
          <div className=' hover:cursor-pointer rounded-3xl h-full  bg-blue-300 col-span-2 flex justify-center items-center'>
            MAIL ME
          </div>
          <div className=' hover:cursor-pointer rounded-3xl h-full  bg-blue-300 col-span-2 row-span-2 flex justify-center items-center'>
            <p className=' px-28'>
              NON PROFIT PROYECTS (location animals, students & proffessors app)
            </p>
          </div>
          <div className=' hover:cursor-pointer rounded-3xl h-full bg-yellow-200 flex justify-center items-center '>
            RESUME
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