import React from "react"

function ProductTitle(props){

    return (
        <div>
        
        <h3 >{props.prodName}</h3>
        <h6 style={{color:"orange"}}>Category:{props.productCategory}</h6>
        </div>
    )


}

export default ProductTitle;