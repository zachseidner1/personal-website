import React, { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

export default function ScrollReveal({ children }: {
  children: JSX.Element
}) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("shown");
    }
  }, [isInView])

  return (
    <div ref={ref} className='overflow-hidden'>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          shown: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {children}
      </motion.div>
    </div>
  )
}
