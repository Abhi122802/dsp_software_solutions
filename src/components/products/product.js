import React from "react";
import './product.css';
import Rating from '@mui/material/Rating';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CompareIcon from '@mui/icons-material/Compare';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';



import product10 from '../../assets/images/product10.png'
import Button  from "@mui/material/Button";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Product =(props)=>{
    return(
        <div className="productThumb">
            {
                props.tag!==null && props.tag!==undefined &&
                <span className={`badge ${props.tag}`}>{props.tag}</span>
            }
            
            <Link>
                <div className="imgback">
                    <img src={product10} alt="" className="w-100"></img>
                        <div className="overlay transition">
                            <ul className="list list-inline mb-0">
                                <li className="list-inline-item ">
                                    <a href className="cursor" tooltip="ADD TO Wishlist!">
                                        <FavoriteBorderIcon/>
                                    </a>  
                                </li>
                                <li  className="list-inline-item">
                                    <a href className="cursor" tooltip="Compare">
                                        <CompareIcon/>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href className="cursor" tooltip="Quick Review">
                                        <RemoveRedEyeIcon/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                </div>
            </Link>
            <div className="info">
                <span className="d-block catName">Billing Machine</span>
                <h4 className="title"><Link>with battery Billing machine</Link></h4>
                <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                <span className="brand d-block text-g">By <Link href className="text-g">Busy</Link>
                </span>

                <div className="d-flex align-items-center mt-3">
                    <div className="d-flex align-items-center">
                        <span className="price text-g font-weight-bold">₹11100</span>
                        <span className="oldprice">₹13000</span>
                    </div>

                    <Button className='text-g ml-auto transition'><ShoppingCartOutlinedIcon/>ADD</Button>

                </div>
            </div>

        </div>
    )
}

export default Product;