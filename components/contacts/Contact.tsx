import React from 'react'
import { DeviceMobile, Mail, MapPin } from 'tabler-icons-react'
import ContactForm from './ContactForms/ContactForm'

function Contact() {
  return (
    <div className='w-full py-14 relative' style={{ background: "url(/images/contact.jpg)" }}>

      <div className='container relative z-50'>
        <div className='w-full flex text-white gap-4 align-middle items-center'>
          <div className='w-1/2'>
            <h1 className='font-black'>LET’S WORK TOGETHER</h1>
            <p className='pb-10'>We welcome you to contact us for more information about our products.</p>
            <div>
              <b className='font-medium'>Head Office :</b>
              <div className='flex gap-1 align-middle items-center mt-1'><MapPin /> Yildizevler Mah. Prof. Dr. Turan Erol Cad. 2/22, 06550 Cankaya/Ankara/TURKEY</div>
            </div>
            <div className='w-full border-b border-gray-500 my-4'></div>
            <div>
              <b className='font-medium'>Phone :</b >
              <div className='flex gap-1 align-middle items-center mt-1'><DeviceMobile />+90 532 5221165 (available for whatsapp)</div>
            </div>
            <div className='w-full border-b border-gray-500 my-4'></div>
            <div>
              <b className='font-medium'>E-mail :</b >
              <div className='flex gap-1 align-middle items-center mt-1'><Mail /> info@ogbglobal.com</div>
            </div>
          </div>
          <div className='w-1/2'>
            <ContactForm />
          </div>
        </div>
      </div>
      <div className='w-full h-full bg-gray-900 bg-opacity-50 absolute top-0 right-0'></div>
    </div >
  )
}

export default Contact