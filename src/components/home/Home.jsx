import React from "react"
import Awards from "./awards/Awards"
import Featured from "./featured/Featured"
import Hero from "./hero/Hero"
import Location from "./location/Location"
import Price from "./price/Price"
import Recent from "./recent/Recent"
import Team from "./team/Team"
import Services from "./ourservices/Services"
import OurPartners from "../partners/OurPartners"
import Gallery from "./recent/Gallery"
import RecentPropertyList from "./recent/RecentPropertyListed"

const Home = () => {
  return (
    <>
      <Hero />
      <Featured />
      <RecentPropertyList/>
      {/* <Recent /> */}
      <Awards />
      <Services/>
      {/* <Gallery/> */}
      <Location />
    
      <Team />
      <OurPartners/>
      {/* <Price /> */}
    </>
  )
}

export default Home
