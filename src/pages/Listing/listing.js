import React from "react";
import { Link } from "react-router-dom";
import Siderbar from "../../components/Sidebar/Sidebar";
import Product from "../../components/products/product";
import './listing.css';
import Button from '@mui/material/Button';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';


// import { FavoriteBorderOutlined, LocationOnOutlined, Person2Outlined, SettingsAccessibilityOutlined } from "@mui/icons-material";
const listing=()=>{

    return(
        <section className="listingPage">
            <div className="container-fluid">
                <div className="breadcrumb flex-column">
                    <h1>Bill Machines</h1>
                        <ul className="list list-inline mb-0">
                            <li className="ut list-inline-item">
                                <Link to={"/home"}>Home <KeyboardArrowRightIcon/></Link>
                                
                            </li>
                            
                            <li className="list-inline-item">
                                <Link to={""}>shop <KeyboardArrowRightIcon/></Link>
                            </li>
                            <li className="list-inline-item">
                                <Link to={""}>Bill Machine</Link>
                            </li>
                        </ul>
                </div>
            </div>

            <div className="listingData">
                <div className="row">
                    <div className="col-md-3 sidebarWrapper">
                        <Siderbar/>
                    </div>


                    <div className="col-md-9 rightContent homeProducts pt-0">

                        <div className="topStrip d-flex align-items-center">
                            <p className="mb-0">We found <span className="text-success">29</span> items for you!</p>
                            <div className="tabbutton ml-auto d-flex align-items-center">
                                <div className="tab_ w-100">
                                    <Button className='btn_'><GridViewOutlinedIcon/> Show <ArrowDropDownIcon/></Button>
                                        <ul className="dropdownMenu1">
                                        <li><Button className="align-items-center">50</Button></li>
                                        <li><Button className="align-items-center">100</Button></li>
                                        <li><Button className="align-items-center">150</Button></li>
                                        <li><Button className="align-items-center">200</Button></li>
                                        <li><Button className="align-items-center">250</Button></li>
                                        <li><Button className="align-items-center">All</Button></li>
                                        
                                    </ul>
                                
                                    
                                </div>
                                <div className="tab_ ml-3 w-100">
                                    <Button className='btn_'> <FilterListOutlinedIcon/> sort <ArrowDropDownIcon/> </Button>
                                    <ul className="dropdownMenu1">
                                        <li><Button className="align-items-center">Featured</Button></li>
                                        <li><Button className="align-items-center">price:L To H</Button></li>
                                        <li><Button className="align-items-center">price:L To H</Button></li>
                                        <li><Button className="align-items-center">Release Date</Button></li>
                                        <li><Button className="align-items-center">Avg Rating</Button></li>
                                    </ul>
                                
                                </div>
                            </div>
                        </div>
                        <div className="productRow pl-4 pr-3">
                            <div className="item">
                                <Product/>
                            </div>
                            <div className="item">
                                <Product/>
                            </div>
                            <div className="item">
                                <Product/>
                            </div>
                            <div className="item">
                                <Product/>
                            </div>
                            <div className="item">
                                <Product/>
                            </div>
                            <div className="item">
                                <Product/>
                            </div>
                            <div className="item">
                                <Product/>
                            </div>
                            <div className="item">
                                <Product/>
                            </div>
                            <div className="item">
                                <Product/>
                            </div>
                            <div className="item">
                                <Product/>
                            </div>
                            <div className="item">
                                <Product/>
                            </div>
                            <div className="item">
                                <Product/>
                            </div>
                            <div className="item">
                                <Product/>
                            </div>
                            <div className="item">
                                <Product/>
                            </div>
                            <div className="item">
                                <Product/>
                            </div>
                            <div className="item">
                                <Product/>
                            </div>
                            <div className="item">
                                <Product/>
                            </div>
                            <div className="item">
                                <Product/>
                            </div>
                            <div className="item">
                                <Product/>
                            </div>
                            <div className="item">
                                <Product/>
                            </div>
                            <div className="item">
                                <Product/>
                            </div>
                            <div className="item">
                                <Product/>
                            </div>
                            <div className="item">
                                <Product/>
                            </div>
                            <div className="item">
                                <Product/>
                            </div>
                            <div className="item">
                                <Product/>
                            </div>
                            <div className="item">
                                <Product/>
                            </div>
                            <div className="item">
                                <Product/>
                            </div>
                            <div className="item">
                                <Product/>
                            </div>
                            <div className="item">
                                <Product/>
                            </div>
                            <div className="item">
                                <Product/>
                            </div>     
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
export default listing;
