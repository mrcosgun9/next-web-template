import React from 'react'
import AboutUs from '../../components/abouts/AboutUs'
import Contact from '../../components/contacts/Contact'
import PageHeader from '../../components/elements/PageHeader'

function About() {
  return (
    <div>
      <PageHeader src={"/images/slider/slider1.jpg"} title={"CONTACT"} />
      <Contact />
    </div>
  )
}

export default About