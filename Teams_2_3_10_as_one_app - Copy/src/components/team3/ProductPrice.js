import React from "react"
import PriceLabel from "./priceComponents/PriceLabel";
import RetailPrice from "./priceComponents/RetailPrice";
import DiscountedPrice from "./priceComponents/DiscountedPrice";
import Discount from "./priceComponents/Discount";
import "./css/ProductPrice.css"

function ProductPrice(props){

    var priceData="";
    if (props.discount>0){
        priceData=<div className="priceContainer"><PriceLabel hideLabel={props.hideLabel}/><DiscountedPrice discountedPrice={props.price-(props.price*props.discount/100)} textClass="retailPrice"/><RetailPrice price={props.price} textClass="strikePrice"/><Discount discount={props.discount}/> </div>
      }
       else{
        priceData = <div className="priceContainer"><PriceLabel hideLabel={props.hideLabel}/>
        <RetailPrice price={props.price} textClass="retailPrice"/> </div>
       } 

    return (

        priceData
    )


}

export default ProductPrice;