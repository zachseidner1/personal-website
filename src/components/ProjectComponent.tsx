import React, { createRef } from 'react'
import ScrollReveal from './ScrollReveal'
import { Typewriter } from 'react-simple-typewriter'
import ProjectTerminal from './ProjectTerminal'


// TODO optimize for mobile and desktop
export default function ProjectComponent({ title, desc, imgSrc, gitLink, projectLink }: { title: string, desc: string, imgSrc: string, gitLink: string, projectLink: string | null }) {
  return (
    <ScrollReveal children={
      <>
        <div className='flex md:flex-row flex-col gap-10 justify-center items-center'>
          <img className='md:max-w-lg max-w-sm object-cover rounded-md' src={imgSrc} />
          <div className='flex-col ml-5 flex self-start'>
            <div className='md:flex-row flex-col flex mb-4 gap-2'>
              <span className='text-5xl text-white font-rubik w-fit'>{title}</span>
              <span className='flex-1 md:flex hidden'></span>
              <div className='flex-row flex gap-2'>
                {projectLink !== null ? (
                  <a target='_blank' href={projectLink}>
                    <img src='https://img.icons8.com/?size=100&id=1349&format=png&color=FFFFFF' width={50} height={50} />
                  </a>
                ) : null}
                <a href={gitLink} target='_blank'>
                  <img src='https://img.icons8.com/?size=120&id=62856&format=png&color=FFFFFF' width={50} height={50} />
                </a>
              </div>
            </div>
            <ProjectTerminal content={desc} />
          </div>
        </div>
      </>
    } />


  )
} 
