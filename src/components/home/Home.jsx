import React from "react"
import Awards from "./awards/Awards"
import Hero from "./hero/Hero"
import Location from "./location/Location"
import Price from "./price/Price"
import Recent from "./recent/Recent"
import Team from "./team/Team"
import Contact from "../contact/Contact"
import About from "../about/About"

const Home = () => {
  return (
    <>
     {/* <Hero />
     <Recent /> */}
      <Awards />
      <Location />
      <Team />
      <Price />
      <About></About>
      <Contact></Contact>
      
    </>
  )
}

export default Home
