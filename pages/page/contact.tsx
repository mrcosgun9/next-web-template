import Head from 'next/head'
import React from 'react'
import AboutUs from '../../components/abouts/AboutUs'
import Contact from '../../components/contacts/Contact'
import PageHeader from '../../components/elements/PageHeader'

function About() {
  return (
    <div>
      <Head>
        <title>
          OGB GLOBAL | CONTACT
        </title>
        <meta
          property="og:image"
          content="/logo-min.ico"
        />
      </Head>
      <PageHeader src={"/images/slider/slider1.jpg"} title={"CONTACT"} />
      <Contact />
    </div>
  )
}

export default About