
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import AboutUs from '../components/abouts/AboutUs';
import Contact from '../components/contacts/Contact';
import Content from '../components/contents/Content';
import OurProducts from '../components/products/OurProducts';
import FullSlider from '../components/sliders/FullSlider';
import { products } from '../datas/products';
export default function Home() {
  const router = useRouter()
  const getProducts = products;
  return (
    <>
      <Head>
        <title>
          OGB GLOBAL
        </title>
        <meta
          property="og:image"
          content="/logo-min.ico"
        />
      </Head>
      <div className='h-screen '>
        <FullSlider />
      </div>
      <Content reverse={true} customClass={"pt-12"} product={getProducts.find(x => x.url == "bathroom-accessories")!} />
      <Content reverse={false} customClass={"pb-12 pt-4"} product={getProducts.find(x => x.url == "plumbing-fixtures")!} />
      <OurProducts title='OUR PRODUCTS' />
      <AboutUs title='ABOUT' />
      <Contact />
    </>
  )
}
