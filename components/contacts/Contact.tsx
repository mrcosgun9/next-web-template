import React from 'react'
import { DeviceMobile, Mail, MapPin } from 'tabler-icons-react'
import ContactForm from './ContactForms/ContactForm'

function Contact() {
  return (
    <div className='w-full py-14 relative' style={{ background: "url(/images/contact.jpg)" }}>
      <div className='container relative z-30'>
        <div className='w-full flex flex-wrap text-white align-middle items-center'>
          <div className='w-full md:w-1/2 md:pr-4'>
            <h1 className='font-black'>HOW TO BUY</h1>
            <p className='pb-10'>Let us know your needs. You will receive a response in the same day.</p>
            <div>
              <b className='font-medium'>Head Office :</b>
              <div className='flex gap-1 align-middle items-center mt-1'><div className='w-8'><MapPin /></div> Yildizevler Mah. Prof. Dr. Turan Erol Cad. 2/22, 06550 Cankaya/Ankara/TURKEY</div>
            </div>
            <div className='w-full border-b border-gray-500 my-4'></div>
            <div>
              <b className='font-medium'>Phone :</b >
              <div className='flex gap-1 align-middle items-center mt-1'><div className='w-8'><DeviceMobile /></div>+90 532 5221165 (available for whatsapp)</div>
            </div>
            <div className='w-full border-b border-gray-500 my-4'></div>
            <div>
              <b className='font-medium'>E-mail :</b >
              <div className='flex gap-1 align-middle items-center mt-1'><div className='w-8'><Mail /></div> info@ogbglobal.com</div>
            </div>
          </div>
          <div className='w-full md:w-1/2 mt-8 md:mt-0 md:pl-4'>
            <ContactForm />
          </div>
        </div>
      </div>
      <div className='w-full h-full bg-gray-900 bg-opacity-50 absolute top-0 right-0'></div>
    </div >
  )
}

export default Contact