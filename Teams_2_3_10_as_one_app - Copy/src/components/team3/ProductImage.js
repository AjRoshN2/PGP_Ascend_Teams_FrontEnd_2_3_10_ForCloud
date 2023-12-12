import React from "react"

const ProductImage= (props) => {

  return(
    <div><h3>
    <img key={props.id} src={props.image}/>
    </h3>
    </div>

  )

} 

export default ProductImage;

