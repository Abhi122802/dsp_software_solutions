import React from 'react';
import Banner1 from '../../assets/images/slider3.png';
import Banner2 from '../../assets/images/slider6.png';
import Banner3 from '../../assets/images/slider1.png';

import './banner.css';
const Banners =()=>{
    return(
        <div className='bannerSection'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <div className='box'>
                            <img src={Banner1} className='w-100 trasition' alt=""/>
                        </div>
                    </div>
                    <div className="col">
                        <div className='box'>
                            <img src={Banner2} className='w-100 trasition' alt=""/>
                        </div>
                    </div>
                    <div className="col">
                        <div className='box'>
                            <img src={Banner3} className='w-100 trasition' alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Banners;