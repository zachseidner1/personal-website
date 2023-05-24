import { useEffect, useState } from 'react';
import FadeInUpTransition from '../components/general/FadeInUpTransition';
import { Typewriter } from 'react-simple-typewriter'
import IsolatedIntroTypewriter from '../components/introComponents/IsolatedIntroTypewriter';


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

      <div className='flex flex-col h-screen w-screen justify-center overflow-hidden items-center'>

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
              <div className="bg-black rounded-xl border-4 border-solid border-gray-500 p-3 mb-3 w-80">
                <span className={'text-green-400 font-roboto-mono text-2xl'}>
                  {"> "}
                  <IsolatedIntroTypewriter />
                </span>
              </div>
            } />
          </span>

        </div>
        <FadeInUpTransition isShowing={step >= 3} body={
          <img
            className='rounded-xl h-72 w-72'
            src="https://images.squarespace-cdn.com/content/v1/59370444b8a79b445e67187e/3ec30c4e-dd33-47ca-8e5f-f2de6813dfad/zach.png?format=300w"
          />
        } />
        <div
          className='bg-style overflow-hidden ease-in-out self-start '
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
