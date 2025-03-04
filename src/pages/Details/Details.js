import { Link } from "@mui/material";
import React, { useState, useRef } from "react";
import './Details.css';
import Rating from '@mui/material/Rating';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import Slider from "react-slick";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Button from "@mui/material/Button";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';
// import Sidebar from "../../components/Sidebar/Sidebar";
const Details = () => {
    const [zoomImage, setZoomImage] = useState('https://m.media-amazon.com/images/I/61UKWJ3FpnL._SL1100_.jpg');
    const zoomSlider = useRef();
    const zoomSliderBig = useRef();

    const [activeSize, setActiveSize] = useState(0);

    const [inputValue, setinputValue] = useState(1);

    const sliderImages = [
        'https://m.media-amazon.com/images/I/61UKWJ3FpnL._SL1100_.jpg',
        'https://m.media-amazon.com/images/I/61RFfyIFYpL._SL1100_.jpg',
        'https://m.media-amazon.com/images/I/61P3G8j2CKL._SL1000_.jpg',
        'https://m.media-amazon.com/images/I/61tlGuer4iL._SL1500_.jpg',
        'https://m.media-amazon.com/images/I/61tlGuer4iL._SL1500_.jpg'
    ];

    const settings2 = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        arrows: false
    };


    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        fade: false,
        arrows: true,
    };


    const handleImageClick = (src) => {
        setZoomImage(src);
    };

    const isActive = (index) => {
        setActiveSize(index);
    };
    const plus = () => {
        setinputValue(inputValue + 1);
    };
    const minus = () => {
        if (inputValue !== 1) {
            setinputValue(inputValue - 1);
        }
    };
    return (
        <section className="detaildPage">
            <div className="breadcrumbWrapper mb-4">
                <div className="container-fluid">
                    <ul className="breadcrumb1 breadcrumb2 mb-0">
                        <li><Link to="/">Home</Link></li>
                        <li><Link>Cameras</Link></li>
                        <li>Italy</li>
                    </ul>
                </div>
                <div className="container detailsContainer pt-3 pd-3">
                    <div className="row ">

                        {/* productZoom code start here */}
                        <div className="col-md-5">
                            <div className="productZoom">
                                <Slider {...settings2} className="zoomSlider" ref={zoomSliderBig}>
                                    <div className="item">
                                        <InnerImageZoom
                                            zoomType="hover"
                                            zoomScale={2}
                                            src={zoomImage}
                                            alt="Zoomed Product"
                                        />
                                    </div>
                                    <div className="item">
                                        <InnerImageZoom
                                            zoomType="hover"
                                            zoomScale={2}
                                            src={zoomImage}
                                            alt="Zoomed Product"
                                        />
                                    </div>
                                    <div className="item">
                                        <InnerImageZoom
                                            zoomType="hover"
                                            zoomScale={2}
                                            src={zoomImage}
                                            alt="Zoomed Product"
                                        />
                                    </div>
                                </Slider>
                            </div>
                            <Slider {...settings} className="zoomSliderBig" ref={zoomSlider}>
                                {sliderImages.map((imgSrc, index) => (
                                    <div className="item" key={index}>
                                        <img
                                            src={imgSrc}
                                            className={`w-100 ${zoomImage === imgSrc ? "active-Thumbnail" : ""}`}
                                            onClick={() => handleImageClick(imgSrc)}
                                            alt={`Thumbnail ${index + 1}`}
                                        />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                        {/* productZoom code end here */}
                        {/* productinfo code start here */}
                        <div className="col-md-7 productInfo">
                            <h1 className="productName">Casio HR-8RC-BK 150 Steps Check & Correct Printing Calculator with Reprint Feature</h1>
                            <div className="d-flex align-items-center mb-4 mt-3">
                                <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                                <span className="text-gary ml-2">(32 reviews)</span>
                            </div>
                            <div className="priceSec d-flex align-items-center mb-3">
                                <span className="priceLarge text-g">₹1000</span>
                                <div className="ml-3 d-flex flex-column">
                                    <span className="text-org">26%OFF</span>
                                    <span className="text-gray oldprice">₹1200</span>
                                </div>
                            </div>
                            <p>
                                Features

                                Reprint
                                <br />After Print: Print multiple copies of the calculation history.
                                <br />Print the calculation history later even in print off mode.
                                <br />Cost/Sell/Margin: Calculate the cost, selling price, or margin of profit on an item, given the other two values.
                                <br />Function command signs: A symbol (+, -, ×, ÷) on the display indicates the status of operation you are currently performing.
                                <br />Key rollover: Key operations are stored in a buffer, so nothing is lost even during high-speed input.
                                <br />Large display: Large, easy-to-read display.
                            </p>


                            <div className="productSize d-flex align-items-center">
                                <span>ROM / RAM: </span>
                                <ul className='list list-inline mb-0 pl-4'>
                                    <li className="list-inline-item"><a href="http://localhost:3000/product/details" className={`tag ${activeSize === 0 ? 'active' : ''}`} onClick={() => isActive(0)}>256/4</a></li>
                                    <li className="list-inline-item"><a href="http://localhost:3000/product/details" className={`tag ${activeSize === 1 ? 'active' : ''}`} onClick={() => isActive(1)}>512/6</a></li>
                                    <li className="list-inline-item"><a href="http://localhost:3000/product/details" className={`tag ${activeSize === 2 ? 'active' : ''}`} onClick={() => isActive(2)}>1/8</a></li>
                                    <li className="list-inline-item"><a href="http://localhost:3000/product/details" className={`tag ${activeSize === 3 ? 'active' : ''}`} onClick={() => isActive(3)}>1/16</a></li>
                                </ul>
                            </div>
                            <div className="addCartSection pt-4 pd-4 d-flex align-items-center">
                                <div className="counterSec mr-2">
                                    <input type="number" value={inputValue} readOnly />
                                    <span className="arrow plus" onClick={plus}><KeyboardArrowUpIcon /></span>
                                    <span className="arrow minus" onClick={minus}><KeyboardArrowDownIcon /></span>
                                </div>
                                <Button className="btn-g btn-lg addtocartbtn"><ShoppingCartOutlinedIcon />Add To Cart</Button>
                                <Button className="btn-lg addtocartbtn ml-3 btn-border"><FavoriteBorderOutlinedIcon /></Button>
                                <Button className="btn-lg addtocartbtn ml-3 btn-border"><CompareArrowsOutlinedIcon /></Button>
                            </div>
                        </div>
                        {/* productInfo code end here */}

                        <div className="col-md-3 rightPart">
                            {/* Additional content for the right section */}

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Details;
