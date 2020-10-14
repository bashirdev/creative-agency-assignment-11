import React from 'react';
import CarouselItem from './CarouselItem';
import CaruselPreview from './CaruselPreview';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SomeWork = () => {
    const item =CarouselItem;
const setting={
    dots:true,
    slidesToShow:3,
    slidesToScroll:3,
    centerMode: true,
    autoplay:true,
   autoplaySpeed:3000
}
  
    return (
        <section className='container-fluid '>
         <div style={{backgroundColor:'#111430', height:'80vh'}} className='text-center p-5'>
         <h3 style={{color:'#fff', marginTop:'30px'}}>Here are some of <span style={{color:'#7ab259'}}>our works</span></h3>
      <Slider  {...setting}>
    
       { 
          item.map(items=> <CaruselPreview  key={items.id} items={items} /> ) 
       }
     </Slider>
     
    
    </div>

        </section>
    );
};

export default SomeWork;
