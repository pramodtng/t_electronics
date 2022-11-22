/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unknown-property */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'
const https = require('https');

const gallery = ({ res }) => {
  console.log(JSON.stringify(res))
  const STRAPI_BASEURL = 'https://tashielectronicsbackend.tashicell.com'

  return (
    <div class="container mx-auto space-y-2 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-3 px-10">
      {
        res.data.map(function (image) {
          return (
            <div className='w-full rounded hover:opacity-50' key={image.id}>
              <img src={`${STRAPI_BASEURL + image.attributes.image.data.attributes.url}`} alt={image.attributes.caption} />
            </div>
          )
        })
      }
    </div>
  )
}

export default gallery

export async function getStaticProps() {
  const agent = new https.Agent({
    rejectUnauthorized: false
  });
  const datas = await fetch('https://tashielectronicsbackend.tashicell.com/api/galleries?populate=*',{
    method: 'GET',
    agent
  })
  const res = await datas.json();
  return {
    props: {
      res
    }
  }
}
