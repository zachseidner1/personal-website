import React, { useEffect, useState, createRef } from 'react'
import ProjectComponent from '../components/ProjectComponent';

export default function Projects() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const blurredCircle = createRef<HTMLDivElement>();

  const getForwards = (): FillMode => {
    console.log("TESTING");
    return "forwards"
  }
  // Set up mouse move listener, begin animation
  useEffect(() => {
    const handleMouseMove = (event: any) => {
      setMousePosition({ x: (event.clientX), y: (event.clientY) });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener(
        'mousemove',
        handleMouseMove
      );
    };
  }, []);

  useEffect(() => {
    // TODO duration causes odd delay, need to fix this.
    blurredCircle.current?.animate({
      top: `${mousePosition.y - 350}px`,
      left: `${mousePosition.x - 500}px`,
    }, { duration: 5000, fill: "forwards" })
  }, [mousePosition])

  // TODO fix that you can't scroll down :(
  return (
    <div className='h-screen'>
      {/* Background */}
      <div className='absolute bg-gray-900 h-screen w-screen -z-20' />

      {/* Follow mouse pointer with circle */}
      <div ref={blurredCircle} className={` h-[700px] w-[1000px] brightness-50 bg-white fixed -z-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-spin-slow blur-3xl`}></div>

      {/* Projects: */}
      <ProjectComponent
        title='Happiness App'
        desc='Happiness App is a collaborative journaling web app that allows 
        users to write about their days and see statistics about their 
        happiness. The website currently supports over 2000 journal entries. As 
        a team of 3, we are continuing to update the app and adding features.'
        imgSrc='https://github.com/jonathanjma/HappinessApp/raw/main/imgs/profile.png'
        gitLink='https://github.com/jonathanjma/HappinessApp'
        projectLink={"https://www.happinessapp.me/"}
      />
      { /* TODO add arrow component between projects, use Tailwind bounce */}
      <div className='h-96'></div>
      <ProjectComponent
        title='iCook'
        desc='I acted as the lead of a 4-person team to develop a statically scoped functional programming language with generational garbage collection using OCaml.
        The programming language is called iCook and includes various cooking references in its syntax.'
        imgSrc='https://media.discordapp.net/attachments/861698114603843594/1110611406954434611/image.png?width=858&height=633'
        gitLink='https://github.com/jonathanjma/iCook'
        projectLink={null}
      />

    </div>
  )
}
