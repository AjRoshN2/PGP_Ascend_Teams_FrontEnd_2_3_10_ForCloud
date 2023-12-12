import React from "react"
import "../css/ProductPrice.css";


function RetailPrice(props){


    return (
        <div className={props.textClass}>${props.price}</div>
    )

}


export default RetailPrice;