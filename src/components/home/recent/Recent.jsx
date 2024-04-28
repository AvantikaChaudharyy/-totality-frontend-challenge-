import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"
import Header from "../../common/header/Header"

const Recent = () => {
  // const [cartCount, setCartCount] = useState(0);
  // const updateCartCount = (count) => {
  //   setCartCount(count);

  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Properties For You' subtitle='Explore our latest additions and find your perfect match among our recently listed properties.' />
         
        </div>
      </section>
    
    </>
  )
}

export default Recent
