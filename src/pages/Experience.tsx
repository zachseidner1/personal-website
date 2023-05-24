import React, { createRef, useState, useEffect } from 'react'

export default function Experience() {
  const title = createRef<HTMLDivElement>();
  const [underlineWidth, setUnderlineWidth] = useState(0);
  useEffect(() => {
    console.log(`title current width = ${title.current?.offsetWidth}`)
    if (title.current !== null) {
      setUnderlineWidth(title.current.offsetWidth);
    }
  }, [title]);

  return (
    <div className='bg-gray-900 h-screen w-screen flex flex-col items-center'>
      <div ref={title} className='text-white text-7xl mt-4 font-rubik'>
        Experience
      </div>
      {/* Underline */}
      <div className={`h-1 mt-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 animated-underline`}
        style={{
          width: underlineWidth
        }} />
    </div>
  )
}
