import Link from 'next/link'
import React from 'react'

function FullHeader() {
  return (
    <>
      <div className='full-header'>
        <div className='w-4/5 mx-auto flex justify-between py-3'>
          <div>
            LOGO
          </div>
          <div>
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
          <div>
            SM
          </div>
        </div>
      </div>
    </>
  )
}

export default FullHeader