// import ContactFormFrontend from '@/components/ContactFormFrontend'
// import GoogleMapContact from '@/components/GoogleMapContact'

import { notFound } from "next/navigation"

// export default function Home() {
//   return (
//     <>
//       <div className="pt-[150px] min-h-screen bg-[#F2EEE3]">
//         <section>
//           <h1 className="font-Caveat text-colorTitle text-4xl text-center my-12">
//             Kontakta Green Hermitage
//           </h1>
//           <div className="flex gap-4 cw-grid">
//             <div className="cw-col-6 ea-col-xs-12">
//               <GoogleMapContact />
//             </div>
//             <div className="cw-col-6 ea-col-xs-12">
//               <ContactFormFrontend />
//             </div>
//           </div>
//         </section>
//       </div>
//     </>
//   )
// }

export default function Home() {
  notFound()
  
  return (
    <h1>Contact</h1>
  )
}