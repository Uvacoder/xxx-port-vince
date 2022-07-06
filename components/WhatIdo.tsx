// import { animated, useSpring } from 'react-spring'

/* const calc = (x: number, y: number) => [
  -(y - window.innerHeight / 3) / 35,
  (x - window.innerWidth / 1.5) / 30,
  1.05,
]
const trans = (x: number, y: number, s: number): string =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})` */

export default function WhatIdo() {
  /* const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 1, tension: 350, friction: 40 },
  })) */
  return (
    <>
      <h1 className="text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
        What I Do
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {/* <animated.a
          onMouseMove={({ clientX: x, clientY: y }: { clientX: number; clientY: number }) =>
            set({ xys: calc(x, y) })
          }
          onMouseLeave={() => set({ xys: [0, 0, 1] })}
          style={{ transform: props.xys.to(trans) }}
        >  */}
        <div className="w-full cursor-auto duration-200 hover:scale-[1.03] h-full p-[6px] bg-gradient-to-r  from-[#a5f3fc] to-[#3A41A4] rounded-lg space-y-2">
          <div className="py-4 px-6 bg-white dark:bg-black dark:bg-brand-black h-full rounded-lg">
            <h1 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-xl  md:text-2xl">
              <span className="pr-2" role="img" aria-label="wave">
                ⚙
              </span>
              Building Project
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              I'm very active on Github to create open-source projects or personal projects,
              sometimes I also contribute to open-source projects.
            </p>
          </div>
        </div>
        {/* </animated.a> */}
        <div className="w-full cursor-auto duration-200 hover:scale-[1.03] h-full p-[6px] bg-gradient-to-r  from-[#9333ea] to-[#3A41A4] rounded-lg space-y-2">
          <div className="py-4 px-6 bg-white dark:bg-black dark:bg-brand-black h-full rounded-lg">
            <h1 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-xl  md:text-2xl">
              <span className="pr-2" role="img" aria-label="wave">
                📗
              </span>
              Writing
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              I also often write to summarize my learning results. I usually write on medium or
              personal blogs.
            </p>
          </div>
        </div>
        <div className="w-full cursor-auto duration-200 hover:scale-[1.03] h-full p-[6px] bg-gradient-to-r  from-[#14b8a6] to-[#3A41A4] rounded-lg space-y-2">
          <div className="py-4 px-6 bg-white dark:bg-black dark:bg-brand-black h-full rounded-lg">
            <h1 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-xl  md:text-2xl">
              <span className="pr-2" role="img" aria-label="wave">
                📦
              </span>
              Collaboration
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              I usually collaborate using Github and have collaborated with other programmers
              several times.
            </p>
          </div>
        </div>
        <div className="w-full cursor-auto duration-200 hover:scale-[1.03] h-full p-[6px] bg-gradient-to-r  from-[#fcd34d] to-[#f97316] rounded-lg space-y-2">
          <div className="py-4 px-6 bg-white dark:bg-black dark:bg-brand-black h-full rounded-lg">
            <h1 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-xl  md:text-2xl">
              <span className="pr-2" role="img" aria-label="wave">
                🎨
              </span>
              Design
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Besides coding, I also like design, I usually design using Figma or similar tools.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
