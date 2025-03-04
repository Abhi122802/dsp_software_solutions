import React from "react";
import './TopProducts.css';
import Rating from '@mui/material/Rating';


import img2 from "../../../assets/images/product103.png";
// import img3 from "../../../assets/images/product1.png";
import { Link } from "react-router-dom";

const Topproducts =(props)=>{
    return(
        <>
             <div className="topSellingbox">
                <h3>{props.title}</h3>
                <div className="items d-flex align-items-center">
                    <div className="img">
                        <Link to="">
                        <img src={img2}  className="w-100" alt=""/>
                        </Link>    
                    </div>
                    <div className="info px-3">
                        <Link to=""><h4>welcome to </h4></Link>
                        <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                        <div className="d-flex align-items-center">
                        <span className="price text-g font-weight-bold">₹11100</span>
                        <span className="oldprice">₹13000</span>
                    </div>
                    </div>

                </div>
                <div className="items d-flex align-items-center">
                    <div className="img">
                        <Link to="">
                        <img src={img2}  className="w-100" alt=""/>
                        </Link>    
                    </div>
                    <div className="info px-3">
                        <Link to=""><h4>welcome to </h4></Link>
                        <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                        <div className="d-flex align-items-center">
                        <span className="price text-g font-weight-bold">₹11100</span>
                        <span className="oldprice">₹13000</span>
                    </div>
                    </div>

                </div>
                <div className="items d-flex align-items-center">
                    <div className="img">
                        <Link to="">
                        <img src={img2}  className="w-100" alt=""/>
                        </Link>    
                    </div>
                    <div className="info px-3">
                        <Link to=""><h4>welcome to </h4></Link>
                        <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                        <div className="d-flex align-items-center">
                        <span className="price text-g font-weight-bold">₹11100</span>
                        <span className="oldprice">₹13000</span>
                    </div>
                    </div>

                </div>
                <div className="items d-flex align-items-center">
                    <div className="img">
                        <Link to="">
                        <img src={img2}  className="w-100" alt=""/>
                        </Link>    
                    </div>
                    <div className="info px-3">
                        <Link to=""><h4>welcome to </h4></Link>
                        <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                        <div className="d-flex align-items-center">
                        <span className="price text-g font-weight-bold">₹11100</span>
                        <span className="oldprice">₹13000</span>
                    </div>
                    </div>

                </div>

             </div>
        </>
    )
}
export default Topproducts;
