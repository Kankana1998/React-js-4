import { useContext, useState } from "react";
import {LOGO_URL} from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header =() => {

const [btnNameReact, setBtnNameReact] = useState("Login");

const {loggedInUser} = useContext(UserContext);

// Subscribing to the store using a  Selector

const cartItems = useSelector((store) => store.cart.items);

const onlineStatus = useOnlineStatus();
    return (
      <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-100 lg:bg-green-100 px-4">
        <div className="logo-container">
        <img className="w-56"
        src={LOGO_URL} alt="logo" />
        </div>
        <div className="flex items-center">
          <ul className="flex p-4 m-4">
            <li className="px-4">OnlineStatus: {onlineStatus ? "✅" : "🔴"}</li>
            <li className="px-4"><Link to='/'>Home</Link></li>
            <li className="px-4"><Link to='/about'>About Us</Link></li>
            <li className="px-4"><Link to='/contact'>Contact Us</Link></li>
            <li className="px-4 font-bold text-xl"><Link to='/cart'>Cart - {cartItems.length} items</Link></li>
            <button className="login" 
            onClick={() => {
              btnNameReact === "Login" 
              ? setBtnNameReact("LogOut")
              : setBtnNameReact("Login");
            }}
            >
              {btnNameReact}
            </button>

            <li className="px-4">{loggedInUser}</li>
          </ul>
        </div>
      </div>
   
    )
  }

export default Header; 