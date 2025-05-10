import React from 'react'
import ThemeToggle from '../Components/ThemeToggle'
import StarBackground from '../Components/StarBackground'
import NavBar from '../Components/NavBar'
import HeroSection from '../Components/HeroSection'
import AboutMe from '../Components/AboutMe'
import Skills from '../Components/Skills.jsx'
import Projects from '../Components/Projects.jsx'
import Contact from '../Components/Contact.jsx'
import  Footer  from '../Components/Footer.jsx'

const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>


            {/* Theme Toggle */}

            <ThemeToggle/>

            {/* Background Effects */}

            <StarBackground/>

            {/* NavBar */}

            <NavBar/>

            {/* Main Content */}
            <main>
                <HeroSection />
                <AboutMe/>
                <Skills/>
                <Projects/>
                <Contact/>
            </main>

            {/* Footer */}
            <Footer/>







    </div>
  )
}

export default Home
