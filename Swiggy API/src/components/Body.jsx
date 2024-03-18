import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {

    //Local State Variable - Super powerful variable
    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    const [searchText, setsearchText] = useState("");
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();

        console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
       
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
           
        //console.log(listOfRestaurants);
        
    };

    return listOfRestaurants.length === 0 ? <Shimmer /> :  (
      <div className='body'>
        <div className='filter'>
          <input type="text" className="search-box" value={searchText} onChange={(e) => {
            setsearchText(e.target.value)
          }}/>
          <button onClick={() => {
            const filteredRestaurant = listOfRestaurants.filter(
              (res) => res.info.name.includes(searchText));
            //console.log(searchText);
            setListOfRestaurants(filteredRestaurant);
          }}>Search</button>

          <button className="filter-btn" onClick={() => {
            const filteredList  = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.4
            );
            setListOfRestaurants(filteredList);
          }}>
            Top Rated Restaurants
          </button>
        </div>
        <div className='res-container'>
        {listOfRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
        </div>
        <h2>Body</h2>
      </div>
    );
  }

export default Body;