/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unknown-property */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'

const gallery = ({ res }) => {
  const STRAPI_BASEURL = 'http://localhost:1337'

  return (
    <div class="container mx-auto space-y-2 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-3 px-10">
      {
        res.data.map(function (image) {
          return (
            <div className='w-full rounded hover:opacity-50' key={image.id}>
              <img src={`${STRAPI_BASEURL + image.attributes.image.data.attributes.url}`} alt= {image.attributes.caption} />
            </div>
          )
        })
      }
    </div>
  )
}

export default gallery

export async function getStaticProps() {
  const datas = await fetch('http://localhost:1337/api/galleries?populate=*')
  const res = await datas.json();
  return {
    props: {
      res
    }
  }
}