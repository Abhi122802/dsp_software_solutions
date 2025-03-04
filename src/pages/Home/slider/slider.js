import React from "react";
import Slider from "react-slick";
import './slider.css';

import Slider1 from "../../../assets/images/slide1.jpg";
import Slider3 from "../../../assets/images/slide2.jpg";
import Newsletter from "../../../components/newsletter/newsletter"
 


const HomeSlider =()=>{

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: true,
        autoplay :8000,

    };

    return(
        <section className="homeSlider">
            <div class="container-fluid position-relative">
            <Slider {...settings}className="home_slider_Main">
                <div className="item">
                    <img src={Slider1} alt="" className="w-100"></img>
                    <div className="info">
                        <h2 class="display-2 mb-40">
                            Don't miss amazing<br/>
                            Machines deals
                        </h2>
                        <p>Sign up for the daily amazing offers</p>
                    </div>
                </div>
                <div className="item">
                    <img src={Slider3} alt="" className="w-100"></img>
                    <div className="info">
                        <h2 class="display-2 mb-40">
                         Get offers and deals
                        </h2>
                        <p>Sign up for the daily amazing offers</p>
                    </div>
                </div> 
            </Slider>
            <Newsletter/>
            </div>
        </section>
    )
}
export default HomeSlider;