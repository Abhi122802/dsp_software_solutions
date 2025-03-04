import React, { useState } from "react";
import Slider from "react-slick";
import './catSlider.css';

import product10 from '../../assets/images/product102.png';
import product12 from '../../assets/images/product4.png';
import product13 from '../../assets/images/product103.png';
import product14 from '../../assets/images/product108.png';
import product15 from '../../assets/images/product105.png';
import product16 from '../../assets/images/product106.png';
import product19 from '../../assets/images/product107.png';
const CatSlider =()=>{

    const [itemBg] =useState([
        '#F4F6FA',
        '#ecffec',
        '#feefea',
        '#fff3eb',
        '#fff3ff',
        '#f2fce4',
        '#feefea',
        '#fffceb',
        '#feefea',
        '#ecffec',
        '#F4F6FA',
        '#ecffec',
        '#feefea',
        '#fff3eb',
        '#fff3ff',
        '#f2fce4',
        '#feefea',
        '#fffceb',
        '#feefea',
        '#ecffec'

        
    ]);

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 1,
        fade: false,
        arrows: true,
        autoplay :2000,
        centerMode : true        
    };

    return(
        <>
            <div className="CatSliderSection">
                <div className="container-fluid">
                    <h2 className="hd">Featured Categories</h2>
                    <Slider {...settings}className="cat_slider_Main" id="cat_slider_Main">
                        {
                            itemBg.length!==0 && itemBg.map((item,index)=>{
                               return(
                                    <div className="item">
                                        <div className="info" style={{background:item}}>
                                        <img src={product10} alt="" className="w-100"></img>
                                            <h5>Busy</h5>
                                            <p>26 items</p>
                                        </div>
                                    </div>
                               )
                            })
                        }

                        <div className="item">
                            <div className="info">
                            <img src={product12} alt="" className="w-100"></img>
                                <h5>Marks</h5>
                                <p>26 items</p>
                            </div>
                        </div>                        <div className="item">
                            <div className="info">
                            <img src={product13} alt="" className="w-100"></img>
                                <h5>BMT</h5>
                                <p>26 items</p>
                            </div>
                        </div>                        <div className="item">
                            <div className="info">
                            <img src={product14} alt="" className="w-100"></img>
                                <h5>BMT22</h5>
                                <p>26 items</p>
                            </div>
                        </div>                        <div className="item">
                            <div className="info">
                            <img src={product15} alt="" className="w-100"></img>
                                <h5>cameras</h5>
                                <p>26 items</p>
                            </div>
                        </div>                        <div className="item">
                            <div className="info">
                            <img src={product16} alt="" className="w-100"></img>
                                <h5>BMT220</h5>
                                <p>26 items</p>
                            </div>
                        </div>                        <div className="item">
                            <div className="info">
                            <img src={product19} alt="" className="w-100"></img>
                                <h5>Printer</h5>
                                <p>26 items</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="info">
                            <img src={product15} alt="" className="w-100"></img>
                                <h5>cameras</h5>
                                <p>26 items</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="info">
                            <img src={product12} alt="" className="w-100"></img>
                                <h5>cameras</h5>
                                <p>26 items</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="info">
                            <img src={product13} alt="" className="w-100"></img>
                                <h5>cameras</h5>
                                <p>26 items</p>
                            </div>
                        </div>                           
                    </Slider>
                </div>
            </div>

        </>
    )
}
export default CatSlider;