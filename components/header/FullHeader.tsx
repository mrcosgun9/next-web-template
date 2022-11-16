import Image from 'next/image';
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { Menu2 } from 'tabler-icons-react';
import SocialMedia from '../elements/SocialMedia';
function FullHeader() {
  const [showMobile, setShowMobile] = useState<boolean>(false);
  const [animateHeader, setAnimateHeader] = useState(false);
  useEffect(() => {
    const listener = () => {
      if (window.scrollY > 140) {
        console.log(true);

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
                <Image src={'/logo.png'} alt={'OGB Global'} fill sizes='100vw' />
              </Link>
            </div>

          </div>
          <div className='full-header-menu'>
            <ul>
              <li>
                <Link href="/">Home</Link>
                <ul>
                  <li>
                    <Link href="/">Menü 1</Link>
                  </li>
                  <li>
                    <Link href="/">Menü 2</Link>
                  </li>
                  <li>
                    <Link href="/">Menü 3</Link>
                  </li>
                </ul>
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