import { createRef, useEffect, useState } from "react";
import AppDev from "../assets/images/appdev.webp";
import Ramp from "../assets/images/ramp-referral.png";
import RecessBig from "../assets/images/recessBig.png";
import ExperienceCard from "../components/general/ExperienceCard";
import FadeInUpTransition from "../components/general/FadeInUpTransition";

export default function Experience() {
  const title = createRef<HTMLDivElement>();
  const [underlineWidth, setUnderlineWidth] = useState(0);
  const [steps, setSteps] = useState(0);
  useEffect(() => {
    if (title.current !== null) {
      setUnderlineWidth(title.current.offsetWidth);
    }
  }, [title]);
  useEffect(() => {
    if (steps === 0) {
      setSteps(1);
    }
    setTimeout(() => {
      if (steps < experienceCards.length + 1) {
        setSteps(steps + 1);
      }
    }, 1000);
  }, [steps]);

  const experienceCards = [
    <ExperienceCard
      title="Ramp"
      desc="Android developer intern at Ramp, the fastest-growing SaaS startup of all-time by revenue. Currently working on their Android app, I contributed by adding a tab to the manager inbox feature screen, to be released to over 50k users. In addition to feature development, I am actively improving the app's overall architecture to ensure scalability and maintainability. This internship is ongoing, allowing me to continually make impactful contributions to Ramp's innovative mobile solutions."
      webLink={"https://ramp.com"}
      imageSrc={Ramp}
    />,
    <ExperienceCard
      title="Cornell AppDev"
      desc={
        " \
  Android developer for Cornell AppDev, an engineering project team \
  whose apps serve thousands of students in the Cornell community. Worked \
  on adding new features to Volume, an app looking to connect students \
  with student-run publications and student-run organizations on campus. \
  Helped to achieve a user base increase of 360%. \
  Was course instructor during the Fall 2023 semester for  CS 1998--the \
   Intro to Android Development course \
  that provides an introduction to frontend development, Kotlin, and Android Studio."
      }
      webLink={"https://www.cornellappdev.com/"}
      imageSrc={AppDev}
    />,
    <ExperienceCard
      title="Recess"
      desc={
        " \
            React Native developer for Recess, a startup company looking to help connect people \
            through sports. There are many people who are looking to play sports, \
            but cannot find games or the time with their busy schedule. Recess seeks \
            solve this problem by connecting players with overlapping availability  \
            for fun matches of various games. Worked on the profile & settings flow. \
            "
      }
      webLink={null}
      imageSrc={RecessBig}
    />,
  ];

  return (
    <div className="h-screen w-screen flex flex-col items-center">
      {/* Background */}
      <div className="fixed -z-10 bg-gray-900 h-screen w-screen " />

      <div
        ref={title}
        className="text-white md:text-7xl text-5xl mt-4 font-rubik"
      >
        Experience
      </div>
      {/* Underline */}
      <div
        className={`h-1 mt-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 animated-underline mb-10`}
        style={{
          width: underlineWidth,
        }}
      />
      <div className="flex flex-col md:px-20 gap-4 px-8">
        {experienceCards.map((v, i) => (
          <FadeInUpTransition isShowing={steps > i + 1} body={v} />
        ))}
        <div className="h-20" />
      </div>
    </div>
  );
}
