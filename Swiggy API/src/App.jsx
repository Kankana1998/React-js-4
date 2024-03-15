import { useState } from 'react'
import './App.css'

function App() {
  
  const Header =() => {
    return (
      <div className='header'>
        <div className='logo-container'>
        <img className='logo'
        src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=food&sf=" alt="logo" />
        </div>
        <div className='nav-items'>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
   
    )
  }

  const RestaurantCard = () => {
    return(
      <div className='res-card'>
        <h3>Meghna Foods</h3>
      </div>
    )
  }

const Body = () => {
  return(
    <div className='body'>
      <div className='search'>
        Search
      </div>
      <div className='res-container'>
       <RestaurantCard />
      </div>
    </div>
  )
}
  return (
    <>
     <Header />
     <Body />
    </>
  )
}

export default App
