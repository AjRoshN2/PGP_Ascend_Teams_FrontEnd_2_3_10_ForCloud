import React from "react"
import "../css/ProductPrice.css"

function PriceLabel(props){


    return (
       (props.hideLabel==false) && <div className="priceLabel">Price: </div>
    )

}


export default PriceLabel;