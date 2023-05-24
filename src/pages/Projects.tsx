import React, { useEffect, useState, createRef } from 'react'
import ProjectComponent from '../components/projectComponents/ProjectComponent';
import FadeInUpTransition from '../components/general/FadeInUpTransition';

export default function Projects() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const blurredCircle = createRef<HTMLDivElement>();
  const [duration, setDuration] = useState(0);
  const [steps, setSteps] = useState(0);
  const maxSteps = 2;

  useEffect(() => {
    setTimeout(() => {
      if (steps < maxSteps) {
        setSteps(s => s + 1)
      }
    }, 1000)
  }, [steps])

  // Set up mouse move listener, begin animation
  useEffect(() => {
    // begin animation
    setSteps(1);
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
    // If the duration starts at 5000, then the blob takes 5 seconds of staying
    // in the same spot before it starts following mouse. By starting the 
    // animation duration at 0 and then changing it to the desired delay, it 
    // prevents this issue.
    setTimeout(() => {
      setDuration(5000)
    }, 10)
    blurredCircle.current?.animate({
      top: `${mousePosition.y - 350}px`,
      left: `${mousePosition.x - 500}px`,
    }, { duration: duration, fill: "forwards" })
  }, [mousePosition])

  // TODO fix that you can't scroll down :(
  return (
    <div className='h-screen overflow-visible flex flex-col'>
      {/* Background */}
      <div className='fixed bg-gray-900 w-full -z-20' style={{ height: "100vh", }} />

      {/* Follow mouse pointer with circle */}
      <div ref={blurredCircle} className={`-z-10 h-[700px] w-[1000px] brightness-50 bg-white fixed rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-spin-slow blur-3xl`}></div>

      {/* Projects: */}
      <div className='flex flex-col gap-4 mt-8' >
        <FadeInUpTransition isShowing={steps > 0}
          body={
            <ProjectComponent
              title='Happiness App'
              desc='Happiness App is a collaborative journaling web app that allows 
        users to write about their days and see statistics about their 
        happiness. The website currently supports over 2000 journal entries. As 
        a team of 3, we are continuing to update the app and add more features.'
              imgSrc='https://github.com/jonathanjma/HappinessApp/raw/main/imgs/profile.png'
              gitLink='https://github.com/jonathanjma/HappinessApp'
              projectLink={"https://www.happinessapp.me/"}
            />
          }
        />

        <FadeInUpTransition isShowing={steps > 1}
          body={
            <ProjectComponent
              title='iCook'
              desc='I acted as the lead of a 4-person team to develop a statically scoped functional programming language with generational garbage collection using OCaml.
                  Throughout the project I helped schedule meetings and deadlines to keep group productivity high. I also used the environment model to implement core language features.'
              imgSrc='https://media.discordapp.net/attachments/861698114603843594/1110611406954434611/image.png?width=858&height=633'
              gitLink='https://github.com/jonathanjma/iCook'
              projectLink={null}
            />
          }
        />

      </div>
    </div>
  )
}
