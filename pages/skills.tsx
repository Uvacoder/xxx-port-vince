import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { ListItem } from '@/components/List-item'
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiVuedotjs,
  SiReact,
  SiNextdotjs as SiNextDotJs,
  SiNodedotjs as SiNodeDotJs,
  SiTypescript,
  SiPython,
  SiDiscord,
} from 'react-icons/si'

export default function Skills() {
  return (
    <>
      <PageSEO title={`Skills - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="pt-6 pb-8 space-y-2 md:space-y-5">
        <p className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
          Skills & Uses
        </p>

        <p className="text-gray-800 dark:text-white">
          I usually use <span className="font-semibold">HTML & CSS</span> for Frontend developement,
          and I'm learning <span className="font-semibold">Javascript </span> and its frameworks,
          like <span className="font-semibold">Vue.js</span>,{' '}
          <span className="font-semibold">Next.js</span>, <br />
          and <span className="font-semibold">Typescript</span> is one of the language I must learn.
          <br />I also use <span className="font-semibold">Python </span>as my main programming
          language.
          <br />
          As a general rule, I keep up to date with new technologies.
        </p>

        <ul className="grid grid-cols-3 gap-4 sm:grid-cols-4 text-md my-8 py-5">
          <ListItem icon={SiHtml5} text="HTML" />
          <ListItem icon={SiCss3} text="CSS" />
          <ListItem icon={SiJavascript} text="Javascript" />
          <ListItem icon={SiVuedotjs} text="Vue.js" />
          <ListItem icon={SiReact} text="React.js" />
          <ListItem icon={SiNextDotJs} text="Next.js" />
          <ListItem icon={SiNodeDotJs} text="Node.js" />
          <ListItem icon={SiTypescript} text="TypeScript" />
          <ListItem icon={SiPython} text="Python" />
          <ListItem icon={SiDiscord} text="Discord.js" />
        </ul>
      </div>
    </>
  )
}
