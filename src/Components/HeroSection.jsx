import React from 'react'
import { ArrowDown } from 'lucide-react'

const HeroSection = () => {
  return (
    <section id='hero' className='relative min-h-screen flex flex-col items-center justify-center px-4'>

      <div className='container max-w-4xl mx-auto text-center z-10'>

        {/* Glass effect card with image */}
        {/* Modern Glass Effect Image Card */}
        <div className="relative w-64 h-64 mx-auto mb-6 rounded-xl overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 shadow-xl transition-transform hover:scale-105 duration-300">
          <img 
            src="/public/projects/MYPHOTO2.jpg" // Replace with your actual image
            alt="Shubham"
            className="w-full h-full object-cover"
          />
          {/* Optional overlay for subtle tint */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 pointer-events-none" />
        </div>


        <div className='space-y-6'>
          <h1 className='text-4xl md:text-6xl font-bold tracking-tight'>
            <span className='opacity-0 animate-fade-in'> Hi I'm </span>
            <span className='text-primary opacity-0 animate-fade-in-delay-1'>{" "} Shubham </span>
            <span className='text-gradient ml-2 opacity-0 animate-fade-in-delay-1'> {" "} Yadav </span>
          </h1>

          <p className='text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-1'>
            I'm a Web Developer specializing in the MERN stack (MongoDB, Express.js, React, Node.js), with a strong focus on building scalable full-stack applications.
            From RESTful APIs to dynamic frontends, I love turning complex ideas into smooth user experiences.
            I'm also an AI enthusiast exploring real-world applications of machine learning alongside web development.
          </p>
        </div>

        <div className='gt-4 opacity-0 animate-fade-in-delay-4 mt-5'>
          <a href="#projects" className='cosmic-button'>
            View My Work
          </a>
        </div>

      </div>

      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce '>
        <span className='text-sm text-muted-foreground mb-2'>
          Scroll
        </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>

    </section>
  )
}

export default HeroSection
