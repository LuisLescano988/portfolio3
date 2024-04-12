import React, { useState } from 'react'

const Resume = () => {

    const coreTechs = [
        'Javascript','React','Next','CSS','Tailwind','Node','Python','Django','PostgreSQL','MongoDb','Docker',
    ]

    const otherTechs = ['Design Systems','E2E Testing','PWAs','Performance Optimization','Software Testing','SE Optimization','Progressive Enhancement','Accessibility auditing','Build Automation','Responsive Web Design','UX Design/Strategy',
    ]

    const [dropCores,setDropcores] = useState(true)
    const [dropOthers,setDropOthers] = useState(true)
    
    return (
        <div className=' mx-10'>
            <div className="container mx-auto px-4 py-8">
                <header className="text-center mb-8">
                    <h1 className="text-4xl font-marcher text-blue-800">Luis Lescano</h1>
                    <h2 className="text-xl font-semibold">Full Stack developer - Frontend oriented</h2>
                    <p className="mt-2">
                        Engineer valued for driving high-performance accessible web experiences. I design quality, user-friendly and
                        scalable products regardless of stack.
                    </p>
                </header>

                <section className="mb-8 relative">
                    <div className=' flex flex-row relative' onClick={()=>setDropcores(!dropCores)}>
                        <div className=' absolute top-[6px] -left-5 w-0 h-0 border-t-[9px] border-t-transparent border-l-[15px] border-l-yellow-100 border-b-[9px] border-b-transparent'></div>
                        <h2 className="text-xl font-semibold mb-2">Core Technologies</h2>
                    </div>
                    <ul className={` list-disc ml-8 ${dropCores==true?' block':'hidden'} transition-all`}>
                        {coreTechs.map((project, idx) => {
                            return (
                                <li key={idx}>{project}</li>)
                        })}
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">Others:</h2>
                    <ul className="list-disc ml-8">
                        {otherTechs.map((project, idx) => {
                            return (
                                <li key={idx}>{project}</li>)
                        })}
                    </ul>
                </section>

                {/* Aquí puedes agregar las secciones de "Experience" y "Projects" */}
            </div>
        </div>
    )
}

export default Resume