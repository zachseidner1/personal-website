import React from "react"
import { Typewriter } from "react-simple-typewriter"
const IsolatedTypewriter = React.memo(({ content }: { content: string }) => {
  return (
    <Typewriter
      words={[content]}
      cursorStyle='█'
      cursor={true}
      typeSpeed={10}
    />
  )
});

export default IsolatedTypewriter;