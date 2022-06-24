import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { ListItem } from '@/components/List-item'
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiReact,
  SiNextdotjs as SiNextDotJs,
  SiNodedotjs as SiNodeDotJs,
  SiTypescript,
  SiPython,
  SiDiscord,
  SiVercel,
  SiNpm,
  SiYarn,
} from 'react-icons/si'

export default function Skills() {
  return (
    <>
      <PageSEO title={`Skills - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="pt-6 pb-8 space-y-2 md:space-y-5">
        <h1 className="text-3xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
          Skills & Uses
        </h1>

        <p className="text-gray-800 dark:text-white">
          I usually use <span className="font-semibold">HTML & CSS</span> for Frontend developement,
          and I'm learning <span className="font-semibold">Javascript</span> &{' '}
          <span className="font-semibold">Typescript</span>, and some Js frameworks, like{' '}
          <span className="font-semibold">React.js</span> &{' '}
          <span className="font-semibold">Next.js</span>.
          <br />I also use <span className="font-semibold">Python </span>as my main programming
          language.
          <br />
          As a general rule, I keep up to date with new technologies.
        </p>

        <h3 className="text-xl font-semibold">Languages/frameworks I'm familiar with:</h3>

        <ul className="grid grid-cols-3 gap-4 sm:grid-cols-4 text-md my-8 py-5">
          <ListItem icon={SiHtml5} text="HTML" />
          <ListItem icon={SiCss3} text="CSS" />
          <ListItem icon={SiTailwindcss} text="TailwindCSS" />
          <ListItem icon={SiJavascript} text="Javascript" />
          <ListItem icon={SiTypescript} text="TypeScript" />
          <ListItem icon={SiNodeDotJs} text="Node.js" />
          <ListItem icon={SiReact} text="React.js" />
          <ListItem icon={SiNextDotJs} text="Next.js" />
          <ListItem icon={SiDiscord} text="Discord.js" />
          <ListItem icon={SiPython} text="Python" />
        </ul>

        <h3 className="text-xl font-semibold">Other tools:</h3>
        <ul className="grid grid-cols-3 gap-4 sm:grid-cols-4 text-md my-8 py-5">
          <ListItem icon={SiNpm} text="Npm" />
          <ListItem icon={SiYarn} text="Yarn" />
          <ListItem icon={SiVercel} text="Vercel" />
        </ul>
      </div>
    </>
  )
}
