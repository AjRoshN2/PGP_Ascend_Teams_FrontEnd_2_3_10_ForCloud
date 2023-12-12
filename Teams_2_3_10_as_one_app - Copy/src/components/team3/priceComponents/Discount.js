import React from "react"
import "../css/ProductPrice.css";

function Discount(props){


    return (
        <div className="discount">{props.discount}% off</div>
    )

}


export default Discount;