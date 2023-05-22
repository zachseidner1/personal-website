import React from 'react'
import { Transition } from '@headlessui/react'

export default function FadeInUpTransition({ isShowing, body }: { isShowing: boolean, body: JSX.Element }) {
  return (
    <Transition
      show={isShowing}
    >
      <Transition.Child
        enter="transition-opacity duration-1000"
        enterFrom="opacity-0"
        enterTo="opacity-100"
      >
        <Transition.Child
          enter="ease-in-out transition transform duration-1000"
          enterFrom="translate-y-full"
          enterTo="-translate-y-0"
        >
          {body}
        </Transition.Child>
      </Transition.Child>
    </Transition>
  )
}
