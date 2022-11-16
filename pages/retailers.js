/* eslint-disable @next/next/no-img-element */
import React from 'react'

const retailers = ({ datas }) => {
  const STRAPI_BASEURL = 'http://localhost:1337'
  return (
    <section className="antialiased text-gray-600 m-10 overflow-hidden">
      <div className="flex flex-col justify-center">
        <div className="w-full max-w-7xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
          {/* <header className="px-5 py-4 border-b border-gray-100">
            <h2 className="font-semibold text-gray-800">Retailers</h2>
          </header> */}
          <h3 className='px-5 py-4 border-b border-gray-100'>
            Some of the authorized Retailers
          </h3>
          <div className="p-3">
            <div className="overflow-hidden">
              <table className="table-auto w-full">
                <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                  <tr>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Name</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Email</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Contact</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-center">Address</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-gray-100">
                  {
                    datas.data.map(function (retail) {
                      return (
                        <tr key={retail.id}>
                          <td className="p-2 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                <img className="rounded-full" src= {`${STRAPI_BASEURL + retail.attributes.avatar.data.attributes.url}`} width="40" height="40" alt="Alex Shatov" />
                              </div>
                              <div className="font-medium text-gray-800"> {retail.attributes.name} </div>
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left"> {retail.attributes.email} </div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left font-medium text-green-500"> {retail.attributes.phone} </div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-md text-center"> {retail.attributes.location} </div>
                          </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default retailers


export async function getStaticProps() {
  const res = await fetch('http://localhost:1337/api/retailers?populate=*')
  const data = await res.json();
  return {
    props: {
      datas: data
    }
  }
}