import Link from 'next/link';
import React from 'react'
import { ChevronRight } from 'tabler-icons-react';
interface IComponent {
  src: string;
  title: string;
  description: string;
  url: string
}
function ProductCard({ src, title, description, url }: IComponent) {
  return (
    <Link href={url}>
      <div className='product-card-item' >
        <div className='product-card-item-image' style={{ backgroundImage: "url(" + src + ")", backgroundSize: "cover", backgroundPosition: "center center" }}>
          <div className='product-card-item-content'>
            <div className='link link-white' >
              Hook me up
              <ChevronRight />
            </div>
            <div className='w-full'>
              <p className='text-gray-400 mb-5'>
                {description.substring(0, description.length > 60 ? 60 : description.length)}...
              </p>
            </div>
            <div className='w-full'>
              <h1>{title}</h1>
            </div>
          </div>
        </div>

      </div>
    </Link>

  )
}

export default ProductCard