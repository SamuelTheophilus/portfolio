import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    < >
      <Head>
        <title>SamuelTheophilus | Home</title>
      </Head>
      <div className='h-screen'>
        <section id='First-Section'>
          <div className='h- flex'>
            <div className='mx-auto mt-10 p-10 md:max-w-3xl'>
              <h1 className='text-3xl font-bold py-5 text-center'>Homepage</h1>
              <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
                ipsum lorem ipsum lorem ipsum lorem ipsum</p>
              <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
              <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
            </div>
          </div>
        </section>
        <section id='Second-Section' className='bg-[#495579] h-48 md:h-80 md:py-36 flex flex-col py-20 mt-9'>
          <div className='flex flex-row justify-center gap-9'>
              <div className='rounded-full shadow-lg shadow-white-400 p-3 cursor-pointer hover:scale-150 ease-in duration-300 bg-white'>
                <FaLinkedinIn className='' />
              </div>
              <div className='rounded-full shadow-lg shadow-white-400 p-3 cursor-pointer hover:scale-150 ease-in duration-300 bg-white'>
                <FaGithub className='' />
              </div>
              <div className='rounded-full shadow-lg shadow-white-400 p-3 cursor-pointer hover:scale-150 ease-in duration-300 bg-white'>
                <AiOutlineMail className='' />
              </div>
          </div>

        </section>
      </div>
    </>
  )
}
