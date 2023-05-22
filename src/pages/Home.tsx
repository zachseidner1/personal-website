import { useEffect, useState } from 'react';
import FadeInUpTransition from '../components/FadeInUpTransition';
import IntroTerminal from '../components/IntroTerminal';
import NavbarComponent from '../components/NavbarComponent';

function Home() {
  const maxSteps = 3;
  const [step, setStep] = useState(0);
  const [helloIsShowing, setHelloIsShowing] = useState(false)
  const [mouseProgress, setMouseProgress] = useState({ x: 0, y: 0 });

  // Continue animation effects
  useEffect(() => {
    setHelloIsShowing(true);
    console.log(`steps: ${step}`)
    setTimeout(() => {
      if (step < maxSteps)
        setStep(step + 1);
    }, 1000);
  }, [step]);

  // Set up mouse move listener, begin animation
  useEffect(() => {
    const handleMouseMove = (event: any) => {
      setMouseProgress({ x: (event.clientX / window.screen.width), y: (event.clientY / window.screen.height) });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener(
        'mousemove',
        handleMouseMove
      );
    };
  }, []);

  return (
    <>

      <div className='flex flex-col h-screen w-screen justify-center overflow-hidden'>

        <div className='flex flex-row items-center overflow-hidden flex-wrap gap-2'>
          <FadeInUpTransition isShowing={helloIsShowing} body={
            <>
              <p className='text-white text-7xl font-rubik md:ml-20 ml-5'
              >
                Hello
              </p>
            </>
          } />
          <FadeInUpTransition isShowing={step >= 1} body={
            <span className='flex flex-row'>
              <p className='text-white text-7xl font-rubik md:ml-20 ml-5 '
              >
                I am
              </p>
            </span>
          } />
          <span className='md:ml-20 ml-5'>
            <FadeInUpTransition isShowing={step >= 2} body={
              <IntroTerminal />
            } />
          </span>
        </div>
        <div
          className='bg-style overflow-hidden ease-in-out '
          style={{
            backgroundPositionX: `-${mouseProgress.x * 100}px`,
            backgroundPositionY: `${mouseProgress.y * 100}px`,
          }}
        />
      </div>
    </>

  );
}

export default Home;
