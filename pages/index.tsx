import React, { FC } from 'react'
import { motion } from "framer-motion";
import { services } from '@/data'
import { GetServerSidePropsContext } from 'next'
import Head from 'next/head';
import { fadeInUp, stagger } from '../animations'
import { Service } from '../types'
import ServiceCard from '@/components/ServiceCard'

const Home: FC<Service[]> = () => {
  return (
    <div className="flex flex-col flex-grow px-6 pt-1 ">
      <Head>
        <title>Web Developer | Manoj Kiranti</title>
      </Head>
      <h5 className="my-3 text-base font-medium">

      </h5>
      <div className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100">
        <h4 className='my-3 text-xl font-semibold tracking-wide '>
          <p className='text-primary'>Home</p>
        </h4>
      </div>
    </div>
  )
}

export default Home

// export async function getServerSideProps(context:GetServerSidePropsContext) {
//   const res = await fetch(`${process.env.VERCEL_URL}/api/services`);
//   const data = await res.json();
//   console.log('services', data)
//   return {
//     props:{
//       services: data
//     }
//   }
// }

// export async function getStaticProps(context:GetServerSidePropsContext) {
//   const res = await fetch('http://localhost:3000/api/services');
//   const data = await res.json();
//   console.log('services', data)
//   return {
//     props:{
//       services: data
//     }
//   }
// }