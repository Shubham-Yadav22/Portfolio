import React from 'react'
import { Briefcase, Code, User } from 'lucide-react'

const AboutMe = () => {
  return (
    <section id='about' className='py-24 px-4 relative'>
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
          About <span className='text-primary'>Me</span>
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          {/* Left Side - About Text */}
          <div className='space-y-6'>
            <h3 className='text-2xl font-semibold'>
              Passionate Web Developer
            </h3>

            <p className='text-muted-foreground'>
              I'm a passionate Web Developer who loves building practical and impactful solutions using the MERN stack.
              From designing clean frontends with React to crafting robust APIs with Express and Node.js, I enjoy every part of the development process.
              Solving problems through code and turning ideas into full-fledged applications is what drives me.
            </p>

            <p className='text-muted-foreground'>
              Alongside web development, I'm also an AI enthusiast who explores how machine learning can be applied to real-world challenges.
              Projects like sign language detection and dress code monitoring with YOLO have allowed me to blend web and AI technologies in meaningful ways.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
                <a href="#contact" className='cosmic-button'>Get In Touch</a>
                
                      {/* Download CV button */}
                      <a
                        href="public/shubhamCV.pdf"  // Your actual file name in the public folder
                        download="shubhamCV.pdf"  // Optional: custom file name for download
                        className='px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300'
                      >
                        Download CV
                  </a>
              </div>

          </div>

          {/* Right Side - Card Icons */}

           <div className='grid grid-cols-1 gap-6'>

                <div className='gradient-border p-6 card-hover'>
                    
                    <div className='flex items-start gap-4'>
                        
                        <div className='p-3 rounded-full bg-primary/10'>

                            <Code className='h-6 w-6 text-primary' />

                        </div>

                        <div className='text-left'>

                            <h4 className='font-semibold text-lg '>
                                Web Development 
                            </h4>

                            <p className='text-muted-foreground'>
                                Creating Real Solutions with Mern Stack
                            </p>


                         </div>

                    </div>

                   

                </div>


                <div className='gradient-border p-6 card-hover'>
                    
                    <div className='flex items-start gap-4'>
                        
                        <div className='p-3 rounded-full bg-primary/10'>

                            <User className='h-6 w-6 text-primary' />

                        </div>

                        <div className='text-left'>

                            <h4 className='font-semibold text-lg '>
                                AI Enthusiast 
                            </h4>

                            <p className='text-muted-foreground'>
                                Always Excited to try New Tech Stack    
                            </p>


                         </div>


                    </div>


                  

                </div>


                <div className='gradient-border p-6 card-hover'>
                    
                    <div className='flex items-start gap-4'>
                        
                        <div className='p-3 rounded-full bg-primary/10'>

                            <Briefcase className='h-6 w-6 text-primary' />

                        </div>

                        <div className='text-left'>

                            <h4 className='font-semibold text-lg '>
                                    
                                  Real-World Projects

                            </h4>

                            <p className='text-muted-foreground'>
                                  
                               I've developed full-stack applications using the MERN stack, including a real-time dress code monitoring system and a sign language detection app — turning ideas into scalable solutions.

                            </p>


                         </div>


                    </div>


                    
                 

                </div>


           </div>
       
        </div>

    </div>



    </section>
  )
}

export default AboutMe
