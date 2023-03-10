import Head from 'next/head'
import { Inter } from '@next/font/google'
import {VscColorMode} from 'react-icons/vsc';
import {AiFillGithub, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai';
import Image from "next/image";
import profil from '../public/photo-profil-web.png'
import andersarens from "../public/anders-arens.png"
import cryptoswallets from "../public/cryptos-wallets.png"
import sequensio from "../public/sequensio.png"
import decentralizedprojects from "../public/decentralized-projects.png"
import {useState} from "react"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
    <div className={darkMode ? 'dark' : ""}>
      <Head>
        <title>Pierre Untas Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-white text-black px-10 mb-20 md:px-20 lg:px-40 dark:bg-zinc-900'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-montserrat font-light text-gray-600'>pierre-untas.com</h1>
            <ul className='flex items-center'>
              <li>
                <VscColorMode onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl text-gray-600'/>
              </li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-700 font-medium md:text-6xl'>
              Pierre Untas
            </h2>
            <h3 className='text-2xl py-2 text-indigo-800 md:text-3xl'>
              Designer & Developer.
            </h3>
            <p className='text-md py-5 leading-8 text-gray-600 md:text-xl max-w-xl mx-auto'>
            Passionate about everything related to the blockchain, I learned the code at the Wagon de Bordeaux and keep discovering new technologies every day.
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <a href="https://github.com/PierreAnders">
              <AiFillGithub />
            </a>
            <a href="https://www.linkedin.com/in/pierre-untas/">
              <AiFillLinkedin/>
            </a>
          </div>
          <div className='relative mx-auto rounded-full w-80 h-80 mt-20 mb-20 md:h-96 md:w-96'>
            <Image src={profil} alt="" fill className='rounded-full'/>
          </div>
        </section>

        <section className='mb-20'>
          <div>
            <h3 className='text-3xl py-1 mt-5 text-indigo-800'>TECHNOLOGIES</h3>
              <p className='text-md py-2 leading-8 text-gray-600'>
                As a <span className="text-teal-700">full stack developper</span>, I can build an app from the design to the production.
              </p>
          </div>
          <div className='lg:flex gap-10 justify-between'>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-zinc-800">
              <h3 className='text-xl font-medium pt-6 pb-2 text-gray-600'>DESIGN</h3>
              <h4 className='py-4 text-teal-700'>Creating minimalist designs with:</h4>
              <p className="text-gray-600">Photoshop</p>
              <p className="text-gray-600">Illustrator</p>
              <p className="text-gray-600">Figma</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-zinc-800">
              <h3 className='text-xl font-medium pt-6 text-gray-600'>CONSTRUCTION</h3>
              <h4 className='py-4 text-teal-600'>Productive and fast construction with:</h4>
              <p className="text-gray-600">Ruby, Javascript</p>
              <p className="text-gray-600">Boostrap, Tailwind</p>
              <p className="text-gray-600">Rails, React </p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-zinc-800">
              <h3 className='text-xl font-medium pt-6 pb-2 text-gray-600'>PRODUCTION</h3>
              <h4 className='py-4 text-teal-600'>Secure production launching with:</h4>
              <p className="text-gray-600">Heroku</p>
              <p className="text-gray-600">Git</p>
              <p className="text-gray-600">GitHub </p>
            </div>
          </div>
        </section>
        <section>
          <div>
          <h3 className='text-3xl py-1 mt-5 text-indigo-800'>PROJECTS</h3>
          <p className="text-gray-600">
            Discover my projects online and on GitHub: Cryptos portfolio, Spotify Layer 2, Blockchain transactions, Shopify store.
          </p>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1 shadow-lg rounded-lg'>
              <a href="https://www.cryptos-wallets.com/" rel="noreferrer" target="_blank">
                <Image src={cryptoswallets} alt="" className='rounded-lg object-cover' />
              </a>
            </div>
            <div className='basis-1/3 flex-1 shadow-lg rounded-lg'>
              <a href="https://www.sequensio.me" rel="noreferrer" target="_blank">
                <Image src={sequensio} alt="" className='rounded-lg object-cover'/>
              </a>
            </div>
            <div className='basis-1/3 flex-1 shadow-lg rounded-lg'>
              <a href="https://decentralized-projects.com/" rel="noreferrer" target="_blank">
                <Image src={decentralizedprojects} alt="" className='rounded-lg object-cover'/>
              </a>
            </div>
            <div className='basis-1/3 flex-1 shadow-lg rounded-lg'>
              <a href="https://andersarens.com/" rel="noreferrer" target="_blank">
                <Image src={andersarens} alt="" className='rounded-lg object-cover'/>
              </a>

            </div>
          </div>
        </section>
        <p className='text-sm'>pierre.untas@gmail.com</p>
      </main>
    </div>
    </>
  )
}
