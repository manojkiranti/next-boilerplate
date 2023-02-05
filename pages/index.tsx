import React, { FC } from 'react'
import { motion } from "framer-motion";
import { services } from '@/data'
import { GetServerSidePropsContext } from 'next'
import Head from 'next/head';
import { fadeInUp, stagger } from '../animations'
import { Service } from '../types'
import ServiceCard from '@/components/ServiceCard'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconSolid } from '@/constant/icons';

const Home: FC<Service[]> = () => {
  return (
    <div className="flex flex-col flex-grow px-6 pt-1 ">
      <Head>
        <title>Title | Subtitle</title>
      </Head>
      Home 
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