import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { ChevronDown, Menu2 } from 'tabler-icons-react';
import SocialMedia from '../elements/SocialMedia';
function FullHeader() {
  const [showMobile, setShowMobile] = useState<boolean>(false);
  const [animateHeader, setAnimateHeader] = useState(false);
  useEffect(() => {
    const listener = () => {
      if (window.scrollY > 140) {
        setAnimateHeader(true);
      } else setAnimateHeader(false);
    };
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);
  const showMobileMenuEvent = () => {
    setShowMobile(!showMobile)
  }
  return (
    <>
      <div className={`full-header  ${animateHeader && "full-header-fixed"
        }`}>

        <div className='full-header-container'>
          <div className='full-header-first'>
            <div className='logo'>
              <Link href="/">
                <img src='/logo.png' />
              </Link>
            </div>

          </div>
          <div className='full-header-menu'>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/page/about">About Us</Link>
              </li>
              <li>
                <Link href="/">Products <ChevronDown size={16} /></Link>
                <ul>
                  <li>
                    <Link href="/product/bathroom-accessories">Bathroom Accessories</Link>
                  </li>
                  <li>
                    <Link href="/product/plumbing-fixtures">Plumbing Fixtures</Link>
                  </li>
                  <li>
                    <Link href="/product/shower-drains">Shower Drains</Link>
                  </li>
                  <li>
                    <Link href="/product/floor-drains">Floor Drains</Link>
                  </li>
                  <li>
                    <Link href="/product/transition-drains">Transition Profiles</Link>
                  </li>
                  <li>
                    <Link href="/product/membrane">Membrane</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/page/contact">Contact</Link>
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