import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import PageHeader from '../../components/elements/PageHeader'
import { products } from '../../datas/products'
import { IProduct } from '../../types/ContentType';
import ProductDetail from '../../components/products/productDetails/ProductDetail';
import Contact from '../../components/contacts/Contact';
import Head from 'next/head';
function Product() {
  const [filterProduct, setFilterProduct] = useState<IProduct | null>(null);
  const router = useRouter()
  const { urlName } = router.query
  const getProducts = products;
  useEffect(() => {
    var product = getProducts.find(x => x.url == urlName);
    if (product) {
      setFilterProduct(product);
    }
  }, [urlName])
  return (
    <>
      {
        filterProduct ?
          <>
            <Head>
              <title>
                OGB GLOBAL | {filterProduct.title}
              </title>
              <meta
                property="og:image"
                content="/logo-min.ico"
              />
            </Head>
            <PageHeader src={filterProduct.img} title={filterProduct?.title} imageClass={urlName === "shower-drains" ? "opacity-30" : ""} />
            <ProductDetail productItem={filterProduct} />
            <Contact />
          </> :
          <div>404</div>
      }

    </>
  )
}

export default Product