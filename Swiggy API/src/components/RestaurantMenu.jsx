import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
const [resInfo, setresInfo] = useState(null);
    useEffect(() => {
        fetchMenu();
    }, [])

    const fetchMenu = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId=105237&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();

        console.log(json);
        setresInfo(json.data);
    }

    if(resInfo === null) return <Shimmer />;

const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;

const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")}</p>
            <ul>
                {itemCards.map(
                    (item) => <li key={item.card.info.id}>{item.card.info.name} - Rs.{item.card.info.price/100 || item.card.info.defaultPrice/100}</li>
                )
                }
            </ul>
        </div>
        
    )
};

export default RestaurantMenu;