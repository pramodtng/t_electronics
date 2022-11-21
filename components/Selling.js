/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-children-prop */
import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import Image from 'next/image'
import parse from 'html-react-parser'
import { data } from 'autoprefixer'

const Selling = ({ result }) => {
  const [showModal, setShowModal] = useState(false);
  const STRAPI_BASEURL = 'http://localhost:1337'
  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-2xl py-2 px-4 sm:px-6 lg:max-w-7xl lg:px-4'>
        <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
          {
            result.data.map(function (datas) {
              return (
                <div key={datas.id} className="group relative p-5 shadow-lg">
                  <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">
                    <img
                      src={`${STRAPI_BASEURL + datas.attributes.image.data.attributes.url}`}
                      alt={datas.attributes.image.data.attributes.caption}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <h2 className='text-center p-5'> {datas.attributes.name} </h2>
                  <h2>Nu. {datas.attributes.discPrice} </h2>
                  <div className='flex flex-row justify-between items-center p-1'>
                    <h2 className='line-through' >Nu. {datas.attributes.sellingPrice} </h2>
                    <h2 className='border-2 p-1'>Nu. {parseInt(datas.attributes.sellingPrice - datas.attributes.discPrice)}  </h2>
                  </div>
                  <button type="button" className="relative inline-block px-4 py-2 font-medium group" onClick={() => setShowModal(true)}>
                    <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                    <span className="absolute inset-0 w-full h-full bg-white border-2 border-purple-700 group-hover:bg-purple-700"></span>
                    <span className="relative text-black group-hover:text-white">View Details</span>
                  </button>
                  {showModal ? (
                    <>
                      <div className="phonedetail-modal flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-7xl">
                          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                              <h3 className="text-3xl font=semibold">Detail Information</h3>
                              <button
                                className="bg-transparent border-0 text-black float-right"
                                onClick={() => setShowModal(false)}
                              >
                                <span className="text-black opacity-7 h-6 w-6 text-xl block bg-white-400 py-0 rounded-full">
                                  x
                                </span>
                              </button>
                            </div>
                            <div className="relative p-6">
                              <div>
                                {parse(datas.attributes.content)}
                              </div>
                            </div>
                            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                              {/* <button className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                                type="button"
                                onClick={() => setShowModal(false)}>
                                Close
                              </button> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : null}
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Selling