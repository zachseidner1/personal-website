import React, { createRef, useState, useEffect } from 'react'
import ExperienceCard from '../components/general/ExperienceCard';
import RecessBig from "../assets/images/recessBig.png"
import FadeInUpTransition from '../components/general/FadeInUpTransition';

export default function Experience() {
  const title = createRef<HTMLDivElement>();
  const [underlineWidth, setUnderlineWidth] = useState(0);
  const maxSteps = 3
  const [steps, setSteps] = useState(0);
  useEffect(() => {
    console.log(`title current width = ${title.current?.offsetWidth}`)
    if (title.current !== null) {
      setUnderlineWidth(title.current.offsetWidth);
    }
  }, [title]);
  useEffect(() => {
    if (steps === 0) {
      setSteps(1);
    }
    setTimeout(() => {
      if (steps < maxSteps) {
        setSteps(steps + 1)
      }
    }, 1000)
  }, [steps])

  return (
    <div className='h-screen w-screen flex flex-col items-center'>
      {/* Background */}
      <div className='fixed -z-10 bg-gray-900 h-screen w-screen ' />

      <div ref={title} className='text-white md:text-7xl text-5xl mt-4 font-rubik'>
        Experience
      </div>
      {/* Underline */}
      <div className={`h-1 mt-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 animated-underline mb-10`}
        style={{
          width: underlineWidth
        }} />
      <div className='flex flex-col md:px-20 gap-4 px-8'>
        <FadeInUpTransition body={
          <ExperienceCard title="Cornell AppDev" desc={
            ' \
            Android developer for Cornell AppDev, an engineering project team \
            whose apps serve thousands of students in the Cornell community. Worked \
            on adding new features to Volume, an app looking to connect students \
            with student-run publications and student-run organizations on campus. \
            Helped to achieve a user base increase of 360%. \
            TA\'d since February 2023 and going to be the course instructor for \
            Android development in the Fall 2023 semester.'}
            webLink={"https://www.cornellappdev.com/"} imageSrc='https://1776779531-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/spaces%2F-Lu9Zw53dmTuhqAq-8K8%2Favatar.png?generation=1577060366433142&alt=media' />
        } isShowing={steps > 1} />


        <FadeInUpTransition body={
          <ExperienceCard title="Recess" desc={
            ' \
            React Native developer for Recess, a startup company looking to help connect people \
            through sports. There are many people who are looking to play sports, \
            but cannot find games or the time with their busy schedule. Recess seeks \
            solve this problem by connecting players with overlapping availability  \
            for fun matches of various games. Worked on the profile & settings flow. \
            '
          }
            webLink={null} imageSrc={RecessBig} />
        } isShowing={steps > 2} />
        <div className='h-20' />
      </div>
    </div>
  )
}
