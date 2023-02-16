import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import NowPlaying from './NowPlaying'
import { FiTwitter, FiGithub } from 'react-icons/fi'
import * as Icons from './Icons'

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col space-y-6 justify-start py-10 mb-0 space-x-0 text-md text-gray-500 dark:text-gray-400">
        <NowPlaying />
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0">
          <ul className="flex space-x-2">
            <li>{`© ${new Date().getFullYear()}`}</li>
            <li>{` • `}</li>
            <li className="hover:text-black dark:hover:text-white duration-200">
              <Link href="/">{siteMetadata.title}</Link>
            </li>
            {/* <li>{` • `}</li>
            <li className="hover:text-black dark:hover:text-white duration-200">
              <Link href="/activity">Activity</Link>
            </li> */}
          </ul>
          <ul className="flex space-x-5 items-center cursor-pointer">
            <li className="hover:text-black dark:hover:text-white duration-200">
              <Link href="https://discord.com/users/723977420364840970">
                <Icons.DiscordIcon />
              </Link>
            </li>
            <li className="hover:text-black dark:hover:text-white duration-200">
              <Link href="https://github.com/uvacoder">
                <FiGithub size={20} />
              </Link>
            </li>
            <li className="hover:text-black dark:hover:text-white duration-200">
              <Link href="https://twitter.com/VaLandscapes">
                <FiTwitter size={20} />
              </Link>
            </li>
            <li className="hover:text-black dark:hover:text-white duration-200">
              <Link href="https://open.spotify.com/user/314afdlbk3hweoo5mg3d2lfcqelq">
                <Icons.SpotifyIcon />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
