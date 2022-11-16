import React from 'react'
import { BrandFacebook, BrandLinkedin } from 'tabler-icons-react'

function SocialMedia() {
  return (
    <ul className='flex gap-2'>
      <li>

        <BrandFacebook />
      </li>
      <li>
        <BrandLinkedin />
      </li>

    </ul>
  )
}

export default SocialMedia