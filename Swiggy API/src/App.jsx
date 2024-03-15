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

  const styleCard = {
    backgroundColor: "#f0f0f0",
  }
  const RestaurantCard = () => {
    return(
      <div className='res-card' style={styleCard}>
        <img 
        className="res-logo"
        src="" 
        alt="res-logo" 
        />
        <h3>Meghna Foods</h3>
        <h4>Biriyani, North Indian, Asian</h4>
        <h4>4.3 Stars</h4>
        <h4>38 minutes</h4>
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
       <RestaurantCard />
       <RestaurantCard />
       <RestaurantCard />
       <RestaurantCard />
       <RestaurantCard />
       <RestaurantCard />
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
