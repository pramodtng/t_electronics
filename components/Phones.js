/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'

const Phones = () => {
  return (
    <div className="text-gray-900 bg-gray-100">
      <section className="flex flex-col justify-center max-w-6xl min-h-screen px-4 py-10 mx-auto sm:px-6">
        <div className="flex flex-wrap items-center justify-between mb-8">
          <h2 className="mr-10 text-4xl font-bold leading-none md:text-5xl">
            Samsung Phones
          </h2>
        </div>

        <div className="flex flex-wrap -mx-4">
          <div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
            <img src="https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="Card img" className="object-cover object-center w-full h-48" />
            <div className="flex flex-grow">
              <div className="triangle"></div>
              <div className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400 text">
                <div>
                  <Link href='/phones'>
                    <h2 className="block mb-4 text-2xl font-black leading-tight hover:underline hover:text-blue-600 cursor-pointer">Latest Launch</h2>
                  </Link>
                  <p className="mb-4">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla delectus corporis commodi aperiam, amet cupiditate?
                  </p>
                </div>
                <div>
                  <a href="#" className="inline-block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600">Read More =&gt;</a
                  >
                </div>
              </div>
            </div>
          </div>

          <div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
            <img
              src="https://images.unsplash.com/photo-1584006682522-dc17d6c0d9ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
              alt="Card img"
              className="object-cover object-center w-full h-48"
            />
            <div className="flex flex-grow">
              <div className="triangle"></div>
              <div className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400">
                <div>
                  <Link href='/phones'>
                    <h2 className="block mb-4 text-2xl font-black leading-tight hover:underline hover:text-blue-600 cursor-pointer">Most Selling</h2>
                  </Link>
                  <p className="mb-4">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla delectus.
                  </p>
                </div>
                <div>
                  <a href="#" className="inline-block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600">Read More =&gt;</a
                  >
                </div>
              </div>
            </div>
          </div>

          <div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
            <img
              src="https://www.tashicell.com/themes/tashicell/assets/phones/F22%20(64)_2021-08-16.png"
              alt="Card img"
              className="object-cover object-center w-full h-48"
            />
            <div className="flex flex-grow">
              <div className="triangle"></div>
              <div className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400">
                <div>
                  <Link href='/phones'>
                    <h2 className="block mb-4 text-2xl font-black leading-tight hover:underline hover:text-blue-600 cursor-pointer">Latest Flagship</h2>
                  </Link>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, neque. Eius, ea possimus.
                  </p>
                </div>
                <div>
                  <a href="#" className="inline-block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600">Read More =&gt;</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Phones

