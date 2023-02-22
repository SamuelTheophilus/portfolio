import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>SamuelTheophilus | Home</title>
      </Head>
      <div className='h-screen flex'>
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
    </>
  )
}
