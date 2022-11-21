import Head from 'next/head'
import React from 'react'
import AboutUs from '../../components/abouts/AboutUs'
import Contact from '../../components/contacts/Contact'
import PageHeader from '../../components/elements/PageHeader'

function About() {
  return (
    <>
      <Head>
        <title>
          OGB GLOBAL | ABOUT US
        </title>
        <meta
          property="og:image"
          content="/logo-min.ico"
        />
      </Head>
      <PageHeader src={"/images/slider/slider1.jpg"} title={"ABOUT US"} />
      <div className='-mt-12'>
        <AboutUs />
      </div>
      <Contact />
    </>
  )
}

export default About