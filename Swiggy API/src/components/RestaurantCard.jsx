const RestaurantCard = () => {
    return(
      <div className='res-card' style={styleCard}>
        <img 
        className="res-logo"
        src="" 
        alt="res-logo" 
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>INR{costForTwo /100} FOR TWO</h4>
        <h4>{deliveryTime} minutes</h4>
      </div>
    )
  }

  export default RestaurantCard;