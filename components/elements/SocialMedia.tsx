import React from 'react'
import { BrandFacebook, BrandLinkedin } from 'tabler-icons-react'

function SocialMedia() {
  return (
    <ul className='flex gap-2'>
      <li>
        <a target={'_blank'} href='https://www.linkedin.com/company/ogb-global/' rel="noreferrer">
          <BrandLinkedin color='#0077B5' />
        </a>

      </li>

    </ul>
  )
}

export default SocialMedia