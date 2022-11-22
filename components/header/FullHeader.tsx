import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { ChevronDown, ChevronRight, Menu2 } from 'tabler-icons-react';
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
      <div className={`${showMobile ? "header-mobile-menu-bg" : ""} `} onClick={() => showMobileMenuEvent()} ></div>
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
                <ul className='header-menu-second'>
                  <li>
                    <Link href="/product/bathroom-accessories">Bathroom Accessories</Link>
                  </li>
                  <li>
                    <Link href="/product/plumbing-fixtures">Plumbing Fixtures</Link>
                  </li>
                  <li>
                    <div className='flex justify-between align-middle items-center cursor-pointer'>
                      Other Stainless-Steels <ChevronRight size={14} />
                    </div>
                    <ul className='header-menu-last'>
                      <li>
                        <Link href="/product/shower-drains">Shower Drains</Link>
                      </li>
                      <li>
                        <Link href="/product/floor-drains">Floor Drains
                        </Link>
                      </li>
                      <li>
                        <Link href="/product/transition-drains">Transition Profiles
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <div className='flex justify-between align-middle items-center cursor-pointer'>
                      Insulation Products <ChevronRight size={14} />
                    </div>
                    <ul className='header-menu-last'>
                      <li>
                        <Link href="/product/membrane">Membrane</Link>
                      </li>

                    </ul>
                  </li>
                  {/* <li>
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
                  </li> */}
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
        <div className='logo ml-8'>
          <Link onClick={() => showMobileMenuEvent()} href="/">
            <img src='/logo.png' />
          </Link>
        </div>
        <ul>
          <li>
            <Link onClick={() => showMobileMenuEvent()} href="/">Home</Link>
          </li>
          <li>
            <Link onClick={() => showMobileMenuEvent()} href="/page/about">About Us</Link>
          </li>
          <li>
            <Link onClick={() => showMobileMenuEvent()} href="/product/bathroom-accessories">Bathroom Accessories</Link>
          </li>
          <li>
            <Link onClick={() => showMobileMenuEvent()} href="/product/plumbing-fixtures">Plumbing Fixtures</Link>
          </li>
          <li>
            <Link onClick={() => showMobileMenuEvent()} href="/product/shower-drains">Shower Drains</Link>
          </li>
          <li>
            <Link onClick={() => showMobileMenuEvent()} href="/product/floor-drains">Floor Drains</Link>
          </li>
          <li>
            <Link onClick={() => showMobileMenuEvent()} href="/product/transition-drains">Transition Profiles</Link>
          </li>
          <li>
            <Link onClick={() => showMobileMenuEvent()} href="/product/membrane">Membrane</Link>
          </li>
          <li>
            <Link onClick={() => showMobileMenuEvent()} href="/page/contact">Contact</Link>
          </li>
        </ul>
      </div>


    </>
  )
}

export default FullHeader