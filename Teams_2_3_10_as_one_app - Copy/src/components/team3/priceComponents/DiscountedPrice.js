import React from "react"
import "../css/ProductPrice.css";

function DiscountedPrice(props){


    return (
        <div className="retailPrice">${props.discountedPrice}</div>
    )

}


export default DiscountedPrice;