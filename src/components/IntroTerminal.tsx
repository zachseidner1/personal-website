import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const InfoTerminal = React.memo(() => (
  <div className="bg-black rounded-xl w-80 border-4 border-solid border-gray-500 p-3 mb-3">
    <span className='text-green-400 font-roboto-mono text-2xl'>
      {"> "}
      <Typewriter
        words={["Zach Seidner", "an aspiring SWE", "always learning", "a code lover <3"]}
        cursorStyle='█'
        cursor={true}
        loop={true}
      />
    </span>
  </div>
))

export default InfoTerminal;