import React from 'react'

const Work = () => {
  return (
    <section id='work' className=' snap-center'>
      <div className=' h-screen bg-purple-200 flex justify-center'>
        <div className=' flex flex-col relative justify-center items-start h-2/3 mr-24 w-4/12'>
          <p className=' font-marcher text-blue-800 text-4xl'>Designing</p>
          <p className=' text-blue-800 leading-loose mt-2 tracking-widest'>
            I am an atypical programmer, committed to creating fluid user experiences and
            designing with contemporary and attractive styles. Always looking to share knowledge
            that brings new perspectives, always listening to clients to approach the work focused
            on the needs of today's market.
          </p>
        </div>
        <div className=' flex flex-col relative justify-center items-start top-1/3 h-2/3 w-4/12'>
          <div className=' text-4xl'>HOVERING MENU FOR BOTH with FADING</div>
          <p className=' font-marcher text-blue-800 text-4xl'>Engineering</p>
          <p className=' text-blue-800 leading-loose mt-2 tracking-widest'>
          When building applications with Javascript or Python I focus on delivering optimized 
          solutions that prioritize scalability, performance and speed. It is also important for 
          me to keep my code in line with innovations in the IT world.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Work