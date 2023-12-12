import React, { Component } from 'react';
import ProductImage from '../ProductImage';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
 
class Imgslider extends Component {

  constructor(props){
    super(props);
  }

  
  createImg=()=>{
    
    let imgCount=this.props.images.length;
   // console.log("IMG CNT "+imgCount);
    let imgItems = []
    for (let i = 0; i < imgCount; i++) {
      //imgItems.push(<ProductImage image={this.props.images[i]} key={i} />)
      
      imgItems.push({"image":this.props.images[i]});
    }

    console.log({imgItems})
    return imgItems
  }



  render() {
  /*  let imgCount=this.props.images.length;
    const settings = {
      dots: true,
      arrows: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      appendDots: dots => {
        return <MagicSliderDots dots={dots} numDotsToShow={imgCount} dotWidth={30} />;
      }
    }; */
 



    return (
  /*    <Slider {...settings}>

          
         {this.createImg()}
        
      </Slider>*/

      <Carousel useKeyboardArrows={true}>
      {this.props.images.map((URL, index) => (
        <div className="slide">
          <img alt="sample_file" src={URL} key={index} />
        </div>
      ))}
    </Carousel>
    )
  }
}

export default Imgslider; 