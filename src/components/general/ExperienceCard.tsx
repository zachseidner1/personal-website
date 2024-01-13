import React from 'react'

export default function ExperienceCard({ title, desc, webLink, imageSrc }: { title: string, desc: string, webLink: string | null, imageSrc: string }) {
  return (
    <div className='bg-gray-800 rounded-2xl border-gray-500 border-solid border-2 w-full flex md:flex-row flex-col p-3 hover:shadow-xl hover:scale-105 duration-500 ease-in-out'>
      <img src={imageSrc}
        className='w-20 h-20' />
      <div className='flex flex-col md:ml-8 gap-2 md:mt-0 mt-2'>
        <div className='flex md:flex-row flex-col'>
          <h1 className='text-white font-roboto font-bold  text-2xl'>
            {title}
          </h1>
          <span className='flex-grow h-1' />
          {webLink !== null ? (
            <a target='_blank' href={webLink}>
              <img src="https://img.icons8.com/?size=100&id=1349&format=png&color=FFFFFF" width={30} height={30} />
            </a>
          ) : null}
        </div>
        <p className='text-gray-200 font-roboto'>
          {desc}
        </p>
      </div>
    </div>
  )
}
