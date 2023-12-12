
import React from "react"
import Imgslider from "./imageComponents/Imgslider"
import "./css/Product.css"
import ProductTitle from "./ProductTitle";
import ProductDescription from "./ProductDescription";
import ProductPrice from "./ProductPrice";
import ProductSpecification from "./ProductSpecification";
import AddCart from "./AddCart";
import UserReviews from "./UserReviews";
import ProductComparison from "./ProductComparison";
import ErrorBoundary from "./ErrorBoundary"
import { Link } from "react-router-dom";

const Product= (props) => {

  console.log("Title "+props.product.title)

const images = props.product.imageUrls;

return (
<div className="prodContainerDiv">
  <Link onClick={props.selectPage}>Back</Link>
  <div className="flex-container">
<div className="flex-child card">
<Imgslider images={images}/>  
</div>

<div className="flex-child titleContainerDiv">
<div className="title">
<ProductTitle  title={props.product.title} productCategory={props.product.productCategory} prodName={props.product.productName}/>
</div>
<div  className="title">

{props.product.inventryStatus==="AVAILABLE"?
<ProductPrice hideLabel={false} price={props.product.retailPrice} discount={props.product.discount} discountedPrice={props.product.discountedPrice} />
: <h4 style={{color:"red"}}>Currently not in stock!</h4>}
</div>
<div className="descriptionDiv">
<ProductDescription  desc={props.product.longDescription}/>
</div>


<AddCart  prodId={props.product.id} cart={props.cart} handleCount={props.handleCount} disableButton={props.product.inventryStatus==="AVAILABLE"?false:true}/>


</div> 
</div>
<div className="addCartDiv">

</div> 

<div className="specificationDiv">
<ProductSpecification  spec={props.product.specification}/>
</div>



<div className="prodCompDiv">
<ErrorBoundary fallback={<p>Error occurred.</p>}>
  <ProductComparison currProd={props.product} changeProd={props.changeProd} />
  </ErrorBoundary>
</div>

<div className="addCartDiv"></div>

<div className="reviewDiv">
<ErrorBoundary fallback={<p>Error occurred loading reviews.</p>}>
  <UserReviews reviews={props.product.ratings}/>
  </ErrorBoundary>
</div>

</div>
)
}
export default Product