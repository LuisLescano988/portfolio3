import React from 'react'

const Resume = () => {
  return (
    <div>
        <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold">Olaolu Olawuyi</h1>
        <h2 className="text-xl font-semibold">Expert Frontend developer and UX Engineer</h2>
        <p className="mt-4">
          Engineer valued for driving high-performance accessible web experiences. I design quality, user-friendly and
          scalable products regardless of stack.
        </p>
      </header>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Core Technologies:</h2>
        <ul className="list-disc ml-8">
          <li>JavaScript</li>
          <li>React</li>
          <li>CSS-in-JS</li>
          <li>TypeScript</li>
          <li>Vue.js</li>
          <li>Sass</li>
          <li>Flux</li>
          <li>ESNext</li>
          <li>Flow</li>
          <li>NodeJS</li>
          <li>GraphQL</li>
          <li>LessCSS</li>
          <li>Next.js</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Others:</h2>
        <ul className="list-disc ml-8">
          <li>Design Systems</li>
          <li>E2E Testing</li>
          <li>PWAs</li>
          <li>Performance Optimization</li>
          <li>Software Testing</li>
          <li>SE Optimization</li>
          <li>Progressive Enhancement</li>
          <li>Accessibility auditing</li>
          <li>Build Automation</li>
          <li>Responsive Web Design</li>
          <li>UX Design/Strategy</li>
        </ul>
      </section>

      {/* Aquí puedes agregar las secciones de "Experience" y "Projects" */}
    </div>
    </div>
  )
}

export default Resume