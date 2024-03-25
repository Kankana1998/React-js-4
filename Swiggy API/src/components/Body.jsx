import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {

    //Local State Variable - Super powerful variable
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    let [filteredRestaurant, setfilteredRestaurant] = useState([]);
    const [searchText, setsearchText] = useState("");
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();

       // console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
       
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
           
        setfilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        //console.log(listOfRestaurants);
        
    };

    return listOfRestaurants.length === 0 ? <Shimmer /> :  (
      <div className='body'>
        <div className='filter'>
          <input type="text" className="search-box" value={searchText} onChange={(e) => {
            setsearchText(e.target.value)
          }}/>
          <button onClick={() => {
            filteredRestaurant = listOfRestaurants.filter(
              (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            //console.log(searchText);
            setfilteredRestaurant(filteredRestaurant);
          }}>Search</button>

          <button className="filter-btn" onClick={() => {
            const filteredList  = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.4
            );
            setfilteredRestaurant(filteredList);
          }}>
            Top Rated Restaurants
          </button>
        </div>
        <div className='res-container'>
        {filteredRestaurant.map((restaurant) => (
            <Link key={restaurant.info.id} to={"/restaurants/"+ restaurant.info.id} style={{textDecoration: 'none'}}><RestaurantCard resData={restaurant} /></Link>
        ))}
        </div>


      </div>
    );
  }

export default Body;