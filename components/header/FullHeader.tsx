import Link from 'next/link'
import React from 'react'

function FullHeader() {
  return (
    <>
      <div className='full-header'>
        <div className='container mx-auto flex justify-between py-3'>
          <div>
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
            <ul>
              <li>
                f
              </li>
              <li>
                t
              </li>
              <li>
                y
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default FullHeader