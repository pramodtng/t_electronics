/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unknown-property */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'

const gallery = ({ res }) => {
  const STRAPI_BASEURL = 'http://localhost:1337'

  return (
    <div className='round-lg columns-2 md:columns-1 lg:columns-3 p-10'>
      {
        res.data.map(function (images) {
          return (
            <div key={images.id}>
              <img className="mb-4" src={`${STRAPI_BASEURL + images.attributes.images.data.attributes.formats.large.url}`} alt= {images.attributes.caption} />
            </div>
          )
        })
      }
    </div>

  )
}

export default gallery

export async function getStaticProps() {
  const datas = await fetch('http://localhost:1337/api/photos?populate=*')
  const res = await datas.json();
  return {
    props: {
      res
    }
  }
}