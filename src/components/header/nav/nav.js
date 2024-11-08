import React from "react";
import '../nav/nav.css';
import Image from '../../../assets/images/img.png';
import {Link} from "react-router-dom";
import Button from "@mui/material/Button";
import  KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDown";
import AppsIcon from '@mui/icons-material/Apps';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';

const Nav =()=>{
    return(
        <div className="nav">
            <div className="container-fluid">
                <div class="row position-relative">
                    <div className="col-sm-2 part1 d-flex align-items-center">
                        <Button className="bg-g catTab "><AppsIcon/>BROWSE ALL CATEGORIES<KeyboardArrowDownRoundedIcon/></Button>
                    </div>  
                    <div className="col-sm-8 part2 d-flex align-items-center position-static">
                        <nav>
                            <ul className="list list-inline">
                                <li className="list-inline-item">
                                    <Button><Link>Home<KeyboardArrowDownRoundedIcon/></Link></Button>                                <div class="dropdown_menu d-flex align-items-center">
                                    <ul className="menu">
                                        <li><Button><Link to ="/about">About Us</Link></Button></li>
                                        <li><Button><Link to ="/about">Contact</Link></Button></li>
                                        <li><Button><Link to ="/about">My Account</Link></Button></li> 
                                    </ul>
                                </div>
                                </li>
                                <li className="list-inline-item">
                                    <Button><Link>About <KeyboardArrowDownRoundedIcon/></Link></Button>
                                    <div class="dropdown_menu d-flex align-items-center">
                                    <ul className="menu">
                                        <li><Button><Link to ="/about">About Us</Link></Button></li>
                                        <li><Button><Link to ="/about">Contact</Link></Button></li>
                                        <li><Button><Link to ="/about">My Account</Link></Button></li>
                                        <li><Button><Link to ="/about">Login</Link></Button></li>
                                        <li><Button><Link to ="/about">Register</Link></Button></li>
                                        <li><Button><Link to ="/about">Forgot Password</Link></Button></li>
                                        <li><Button><Link to ="/about">Reset Password</Link></Button></li>
                                        <li><Button><Link to ="/about">Purchase Guide</Link></Button></li>
                                        <li><Button><Link to ="/about">Privacy Policy</Link></Button></li>
                                        <li><Button><Link to ="/about">404 page</Link></Button></li>  
                                    </ul>
                                </div>
                                </li> 
                                <li className="list-inline-item">
                                    <Button><Link>Shop<KeyboardArrowDownRoundedIcon/></Link></Button>
                                    <div class="dropdown_menu d-flex align-items-center">
                                    <ul className="menu">
                                        <li><Button><Link to ="/about">About Us</Link></Button></li>
                                        <li><Button><Link to ="/about">Contact</Link></Button></li>
                                        <li><Button><Link to ="/about">My Account</Link></Button></li>
                                        <li><Button><Link to ="/about">Login</Link></Button></li>
                                        <li><Button><Link to ="/about">Register</Link></Button></li>
                                        <li><Button><Link to ="/about">Forgot Password</Link></Button></li>
                                        <li><Button><Link to ="/about">Reset Password</Link></Button></li>
                                        <li><Button><Link to ="/about">Purchase Guide</Link></Button></li>
                                        <li><Button><Link to ="/about">Privacy Policy</Link></Button></li>
                                        <li><Button><Link to ="/about">404 page</Link></Button></li>  
                                    </ul>
                                </div>
                                </li>
                                <li className="list-inline-item position-static">
                                    <Button><Link>mega menu<KeyboardArrowDownRoundedIcon/></Link></Button>
                                    <div className="dropdown_menu megamenu w-100">
                                        <div className="row">
                                            <div className="col">
                                                <h4 className="text-g">Bill softwares</h4>
                                                <ul className="column mt-4 mb-0">
                                                    <li><Link to="">Busy</Link></li>
                                                    <li><Link to="">Marks</Link></li>
                                                    <li><Link to="">Tally</Link></li>
                                                    <li><Link to="">Xyz</Link></li>
                                                </ul>
                                            </div>
                                            <div className="col">
                                                <h4 className="text-g">Bill Machines</h4>
                                                <ul className="column mt-4 mb-0">
                                                    <li><Link to="">Busy</Link></li>
                                                    <li><Link to="">Marks</Link></li>
                                                    <li><Link to="">Tally</Link></li>
                                                    <li><Link to="">Xyz</Link></li>
                                                </ul>
                                            </div>
                                            <div className="col">
                                                <h4 className="text-g">Printers</h4>
                                                <ul className="column mt-4 mb-0">
                                                    <li><Link to="">Busy software</Link></li>
                                                    <li><Link to="">Marks</Link></li>
                                                    <li><Link to="">Tally</Link></li>
                                                    <li><Link to="">Xyz</Link></li>
                                                </ul>
                                            </div>
                                            <div className="col">
                                                <h4 className="text-g">CCTV cameras</h4>
                                                <ul className="column mt-4 mb-0">
                                                    <li><Link to="">Busy</Link></li>
                                                    <li><Link to="">Marks</Link></li>
                                                    <li><Link to="">Tally</Link></li>
                                                    <li><Link to="">Xyz</Link></li>
                                                </ul>
                                            </div>
                                            <div className="col"> 
                                                <img src={Image} alt="discount" className="w-100"/>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-inline-item">
                                <Button><Link>pages<KeyboardArrowDownRoundedIcon/></Link></Button>
                                <div class="dropdown_menu d-flex align-items-center">
                                    <ul className="menu">
                                        <li><Button><Link to ="/about">About Us</Link></Button></li>
                                        <li><Button><Link to ="/about">Contact</Link></Button></li>
                                        <li><Button><Link to ="/about">My Account</Link></Button></li>
                                        <li><Button><Link to ="/about">Login</Link></Button></li>
                                        <li><Button><Link to ="/about">Register</Link></Button></li>
                                        <li><Button><Link to ="/about">Forgot Password</Link></Button></li>
                                        <li><Button><Link to ="/about">Reset Password</Link></Button></li>
                                        <li><Button><Link to ="/about">Purchase Guide</Link></Button></li>
                                        <li><Button><Link to ="/about">Privacy Policy</Link></Button></li>
                                        <li><Button><Link to ="/about">404 page</Link></Button></li>  
                                    </ul>
                                </div>
                                </li>
                                <li className="list-inline-item">
                                    <Button><Link>contact<KeyboardArrowDownRoundedIcon/></Link></Button>
                                    <div class="dropdown_menu d-flex align-items-center">
                                    <ul className="menu">
                                        <li><Button><Link to ="/about">About Us</Link></Button></li>
                                        <li><Button><Link to ="/about">Contact</Link></Button></li>
                                        <li><Button><Link to ="/about">My Account</Link></Button></li>
                                        <li><Button><Link to ="/about">Login</Link></Button></li>
 
                                    </ul>
                                </div>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-sm-1 part3 d-flex align-items-center">
                        <div class="phno d-flex align-items-center ml-auto">
                            <span><HeadsetMicIcon/></span>
                            <div class="info ml-3">
                                <h3 class="text-g mb-0">
                                    +91-9673391008
                                    </h3>
                                <p className="mb-0">24/7 Support center</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Nav;
