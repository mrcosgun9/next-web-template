import Link from 'next/link'
import React, { useRef, useState } from 'react'
import { Menu2 } from 'tabler-icons-react';
import SocialMedia from '../elements/SocialMedia';
function FullHeader() {
  const [showMobile, setShowMobile] = useState<boolean>(false);
  const showMobileMenuEvent = () => {
    setShowMobile(!showMobile)
  }
  return (
    <>
      <div className='full-header'>
        <div className='full-header-container'>
          <div className='full-header-first'>
            <Link href="/" className='logo'>LOGO</Link>
          </div>
          <div className='full-header-menu'>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/">About Us</Link>
              </li>
              <li>
                <Link href="/">Contact</Link>
              </li>
            </ul>
          </div>
          <div className='full-header-sosial-media'>
            <SocialMedia />
            <div className='full-header-mobile-menu'>
              <Menu2 size={26} className="text-gray-600" onClick={() => showMobileMenuEvent()} />
            </div>
          </div>

        </div>
      </div>

      <div className={`${showMobile ? "active" : ""} header-mobile-menu-container`}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi officia ex adipisci dolores! Aliquid provident, esse distinctio error in adipisci beatae ad delectus excepturi, vitae est quidem quod ullam similique!
      </div>


    </>
  )
}

export default FullHeader