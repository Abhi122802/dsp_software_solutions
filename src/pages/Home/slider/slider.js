import React from "react";
import Slider from "react-slick";
import './slider.css';

import Slider1 from "../../../assets/images/slider1.png";
import Slider2 from "../../../assets/images/slider2.png";
import Slider3 from "../../../assets/images/slider3.png";
import Slider4 from "../../../assets/images/slider4.png";
import Slider5 from "../../../assets/images/slider5.png";
import Slider6 from "../../../assets/images/slider6.png";


const HomeSlider =()=>{

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: true         
    };

    return(
        <section className="homeSlider">
            <i class="fa fa-address-book" aris-hidden="true"></i>
            <div class="container-fluid">
            <Slider {...settings}className="home_slider_Main">
                <div className="item">
                    <img src={Slider1} alt="" className="w-100"></img>
                </div>
                <div className="item">
                    <img src={Slider2} alt="" className="w-100"></img>
                </div> 
                <div className="item">
                    <img src={Slider3} alt="" className="w-100"></img>
                </div> 
                <div className="item">
                    <img src={Slider4} alt="" className="w-100"></img>
                </div> 
                <div className="item">
                    <img src={Slider5} alt="" className="w-100"></img>
                </div>    
                <div className="item">
                    <img src={Slider6} alt="" className="w-100"></img>
                </div> 
            </Slider>
            </div>
        </section>
    )
}
export default HomeSlider;