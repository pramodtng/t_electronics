import React from 'react'
import Flagship from '../components/Flagship';
import Latest from '../components/Latest'
import Selling from './../components/Selling';

const phones = ({result, results, sell}) => {
  return (
    <>
      <ul className="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4 shadow-lg rounded-lg mx-5" id="tabs-tabFill"
        role="tablist">
        <li className="nav-item flex-auto text-center" role="presentation">
          <a href="#tabs-homeFill" className="nav-link w-full block font-medium text-md leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent active" id="tabs-home-tabFill" data-bs-toggle="pill" data-bs-target="#tabs-homeFill" role="tab" aria-controls="tabs-homeFill" aria-selected="true">Most Selling</a>
        </li>
        <li className="nav-item flex-auto text-center" role="presentation">
          <a href="#tabs-profileFill" className="nav-link w-full block font-medium text-md leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent" id="tabs-profile-tabFill" data-bs-toggle="pill" data-bs-target="#tabs-profileFill" role="tab"
            aria-controls="tabs-profileFill" aria-selected="false">Latest Phones</a>
        </li>
        <li className="nav-item flex-auto text-center" role="presentation">
          <a href="#tabs-messagesFill" className="nav-link w-full block font-medium text-md leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent
    " id="tabs-messages-tabFill" data-bs-toggle="pill" data-bs-target="#tabs-messagesFill" role="tab"
            aria-controls="tabs-messagesFill" aria-selected="false">FlagShip Phones</a>
        </li>
      </ul>
      <div className="tab-content" id="tabs-tabContentFill">
        <div className="tab-pane fade show active mx-5" id="tabs-homeFill" role="tabpanel" aria-labelledby="tabs-home-tabFill">
          <Selling result = {sell}/>
        </div>
        <div className="tab-pane fade mx-5" id="tabs-profileFill" role="tabpanel" aria-labelledby="tabs-profile-tabFill">
          <Latest products={result}/>
        </div>
        <div className="tab-pane fade mx-5" id="tabs-messagesFill" role="tabpanel" aria-labelledby="tabs-profile-tabFill">
          <Flagship products = {results} />
        </div>
      </div>
    </>
  )
}

export default phones

export async function getStaticProps() {
  const res = await fetch('http://localhost:1337/api/latests?populate=*')
  const flag = await fetch('http://localhost:1337/api/flagships?populate=*')
  const selling = await fetch('http://localhost:1337/api/sellings?populate=*')
  const result = await res.json()
  const results = await flag.json()
  const sell = await selling.json()
  return {
    props: {
      result,
      results,
      sell
    }
  }
}