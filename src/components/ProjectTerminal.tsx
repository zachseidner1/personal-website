import React, { createRef, useEffect, useState } from "react"
import { Typewriter } from "react-simple-typewriter"
import IsolatedTypewriter from "./IsolatedTypewriter";

export default function ProjectTerminal({ content }: { content: string }) {
  const spanForSize = createRef<HTMLDivElement>();
  const [terminalSize, setTerminalSize] = useState<{ width: number, height: number }>({ width: 0, height: 0 })

  useEffect(() => {
    if (spanForSize.current !== null && (terminalSize.width === 0)) {
      setTerminalSize({ width: spanForSize.current.offsetWidth, height: spanForSize.current.offsetHeight })
    }
  }, [spanForSize])

  useEffect(() => {
    console.log(`height = ${terminalSize.height}, width = ${terminalSize.width}`)
    if (terminalSize.width !== 0) {
      spanForSize.current?.remove();
    }
  }, [terminalSize])

  const fontStyle = 'text-green-400 font-roboto-mono text-lg'

  return (
    <>
      <div className={`bg-black rounded-xl border-4 border-solid border-gray-500 p-3 mb-3`}
        style={{ width: terminalSize.width, height: terminalSize.height + 100 }}>
        <span className={fontStyle}>
          {"> "}
          <IsolatedTypewriter content={content} />
        </span>
      </div>
      {/* This div is fake and will be removed, it is for calculating the 
      size that the terminal should be. */}
      <div ref={spanForSize} className="bg-black rounded-xl border-4 border-solid border-gray-500 p-3 mb-3 md:max-w-xl max-w-sm">
        <span className={fontStyle}>
          {"> " + content}
        </span>
      </div>
    </>

  )
}
