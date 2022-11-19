import React from 'react'
import AboutUs from '../../components/abouts/AboutUs'
import PageHeader from '../../components/elements/PageHeader'

function About() {
  return (
    <>
      <PageHeader src={"/images/slider/slider1.jpg"} title={"ABOUT US"} />
      <AboutUs />
    </>
  )
}

export default About