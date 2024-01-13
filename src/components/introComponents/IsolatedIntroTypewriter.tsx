import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import IsolatedTypewriter from '../projectComponents/IsolatedTypewriter'

const IsolatedIntroTypewriter = React.memo(() => {
  return (
    <Typewriter
      words={["Zach Seidner", "an aspiring SWE", "a code lover <3"]}
      cursorStyle='█'
      cursor={true}
      loop={true}
    />
  )
})
export default IsolatedIntroTypewriter;
