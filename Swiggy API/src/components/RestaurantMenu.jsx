import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
//const [resInfo, setresInfo] = useState(null);

const {resId} = useParams();

const resInfo = useRestaurantMenu(resId);
const [showIndex, setshowIndex] = useState(0);

    if(resInfo === null) return <Shimmer />;

const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

//console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) => c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

//console.log(categories);
 
    return (
        <div className="text-center">
            <h1 className="font-bold text-2xl my-10">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</p>
            {/* <ul>
                {itemCards.map(
                    (item) => <li key={item.card.info.id}>{item.card.info.name} - Rs.{item.card.info.price/100 || item.card.info.defaultPrice/100}</li>
                )
                }
            </ul> */}

            {/* categories accordions*/ }

         {
            categories.map((category, index) => 
                <RestaurantCategory 
                key={category?.card?.card.title} 
                data={category?.card?.card} 
                showItems={index === showIndex ? true : false}
                setshowIndex={() => setshowIndex(index)}
                />
            )
         }
            
        </div>
        
    )
};

export default RestaurantMenu;