// import React from 'react'

// const Phones = () => {
//   const [showModal, setShowModal] = useState(false);
//   const STRAPI_BASEURL = 'http://localhost:1337'
//   return (
//     <div>
//       {showModal ? (
//         <>
//           <div className="phonedetail-modal flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
//             <div className="relative w-auto my-6 mx-auto max-w-7xl">
//               <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
//                 <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
//                   <h3 className="text-3xl font=semibold">Detail Information</h3>
//                   <button
//                     className="bg-transparent border-0 text-black float-right"
//                     onClick={() => setShowModal(false)}
//                   >
//                     <span className="text-black opacity-7 h-6 w-6 text-xl block bg-white-400 py-0 rounded-full">
//                       x
//                     </span>
//                   </button>
//                 </div>
//                 <div className="relative p-6">
//                   <div>
//                     {parse(datas.attributes.content)}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </>
//       ) : null}
//     </div>
//   )
// }

// export default Phones


// export async function getStaticProps({ params }) {
//   const posts = await fetch(`http://localhost:1337/api/phones/${params.id}?populate=*`)
//   const res = await posts.json()
//   return {
//     props: {
//       post: res.data
//     }
//   }
// }

// export async function getStaticPaths() {
//   const posts = await fetch('http://localhost:1337/api/phones?populate=*')
//   const res = await posts.json()
//   const paths = res.data.map((post) => {
//     return {
//       params: { id: post.id.toString() }
//     }
//   })
//   return {
//     paths,
//     fallback: false
//   }
// }