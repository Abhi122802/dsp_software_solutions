import React from "react";
import "./footer.css"
import Logo from "../../assets/images/Logo4.svg"
import { Link } from "react-router-dom";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import Appstore from "../../assets/images/app-store.jpg";
import GooglePlay from "../../assets/images/google-play.jpg";
import PaymentImage from "../../assets/images/payment-method.png";

import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';
import newsletterimg from "../../assets/images/product10.png";
import NewsLetter from "../../components/newsletter/newsletter";

const Footer = () => {
    return (
        <>
            <section className="newsletterSection">
                <div className="container-fluid">
                    
                    <div className="box d-flex align-item-center">
                        <div className="info">
                            <h2>Stay home & get your daily needs from our shop</h2>
                            <p>start you'r Daily shopping with Nest Mart</p>
                            <br /><br />
                            <NewsLetter />
                        </div>
                        <div className="img">
                            <img src={newsletterimg} className="w-100" alt="" />

                        </div>

                    </div>

                </div>

            </section>


            <div className="footerWrapper">
                <div className="footerBoxes">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col">
                                <div className="box d-flex align-items-center w-100">
                                    <span> <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-1.svg" alt="" /></span>
                                    <div className="info">
                                        <h4>Best discounts</h4>
                                        <p>order $ 50 or more</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="box d-flex align-items-center w-100">
                                    <span> <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-2.svg" alt="" /></span>
                                    <div className="info">
                                        <h4>Free Delivery</h4>
                                        <p>order $ 50 or more</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="box d-flex align-items-center w-100">
                                    <span> <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-3.svg" alt="" /></span>
                                    <div className="info">
                                        <h4>Great daily deal</h4>
                                        <p>order $ 50 or more</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="box d-flex align-items-center w-100">
                                    <span> <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-4.svg" alt="" /></span>
                                    <div className="info">
                                        <h4>wide assortment</h4>
                                        <p>order $ 50 or more</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="box d-flex align-items-center w-100">
                                    <span> <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-5.svg" alt="" /></span>
                                    <div className="info">
                                        <h4>Easy Return</h4>
                                        <p>order $ 50 or more</p>
                                    </div>
                                </div>
                            </div>
                            <h1 className="line">______________________________________________________________________________</h1>


                        </div>

                    </div>

                </div>
                

                <footer>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-3 part1">
                                <div className="box">
                                    <Link to="/"><img src={Logo} alt="" /></Link>
                                    <br /><br />
                                    <p>Awesome software store website templete</p>
                                    <br />

                                    <p><LocationOnOutlinedIcon /><strong>Address:</strong> 123 near jain temple bhanjan gali parbhani</p>
                                    <p><HeadsetMicIcon /><strong>Call Us:</strong>(+91) - 540-025-124553</p>
                                    <p><AccessTimeFilledIcon /><strong>Hours:</strong>10:00 - 18:00, Mon - Sat</p>
                                    <p><EmailIcon /><strong>Email:</strong>sale@Nest.com</p>
                                </div>
                            </div>
                            <div className="col-md-6 part2">
                                <div className="row">
                                    <div className="col">
                                        <h3>Company</h3>
                                        <ul className="footer-list mb-sm-5 mb-md-0">
                                            <li><Link to="/about">About us</Link></li>
                                            <li><Link to="/delivery">Delivery Information</Link></li>
                                            <li><Link to="/privacy">Privacy Policy</Link></li>
                                            <li><Link to="terms">Terms &amp; Conditions</Link></li>
                                            <li><Link to="/contact">Contact Us</Link></li>
                                            <li><Link to="/support">Support Center</Link></li>
                                            <li><Link to="carrer">Carrers</Link></li>
                                        </ul>
                                    </div>
                                    <div className="col">
                                        <h3>Account</h3>
                                        <ul className="footer-list mb-sm-5 mb-md-0">
                                            <li><Link to="/about">Sign In</Link></li>
                                            <li><Link to="/delivery">View Cart</Link></li>
                                            <li><Link to="/privacy">My Wishlist</Link></li>
                                            <li><Link to="terms">Track My Order</Link></li>
                                            <li><Link to="/contact">Help Ticket</Link></li>
                                            <li><Link to="/support">Shipping Details</Link></li>
                                            <li><Link to="carrer">Compare Products</Link></li>
                                        </ul>
                                    </div>
                                    <div className="col">
                                        <h3>Corporate</h3>
                                        <ul className="footer-list mb-sm-5 mb-md-0">
                                            <li><Link to="/about">Become a Vendor</Link></li>
                                            <li><Link to="/delivery">Affiliate program</Link></li>
                                            <li><Link to="/privacy">Store Bussiness</Link></li>
                                            <li><Link to="terms">store Carrers</Link></li>
                                            <li><Link to="/contact">Our Suppliers</Link></li>
                                            <li><Link to="/support">Accessibility</Link></li>
                                            <li><Link to="carrer">Promotions</Link></li>
                                        </ul>
                                    </div>
                                    <div className="col">
                                        <h3>Popular</h3>
                                        <ul className="footer-list mb-sm-5 mb-md-0">
                                            <li><Link to="/about">Cmaeras</Link></li>
                                            <li><Link to="/delivery">Bill Machines</Link></li>
                                            <li><Link to="/privacy">Printers</Link></li>
                                            <li><Link to="terms">Chimines</Link></li>
                                            <li><Link to="/contact">keyboards</Link></li>
                                            <li><Link to="/support">Mouses</Link></li>
                                            <li><Link to="carrer">Laptops</Link></li>
                                        </ul>
                                    </div>

                                </div>

                            </div>

                            <div className="col-md-3 part3">
                                <h3>Install App</h3>
                                <br />
                                <p>From App Store or Google Play</p>
                                <Link to={""}> <img src={Appstore} width={150} alt="" /></Link>
                                <Link to={""}> <img src={GooglePlay} width={150} className="mx-2" alt="" /></Link>
                                <br /><br /><br /><br />
                                <p>secured payment Gateways</p>
                                <img src={PaymentImage} alt="" />
                            </div>

                        </div>

                    </div>

                    <hr />

                    <div className="row lastStrip">
                        <div className="col-md-3">
                            <p>© 2022, Nest - HTML Ecommerce Template
                                All rights reserved</p>
                        </div>
                        <div className="col-md-6 d-flex">
                            <div className="col-md-3 d-flex">
                                <div className="m-auto dflex align-items-center mx-5">
                                    <div className="phno d-flex align-items-center ">
                                        <span><HeadsetMicIcon /></span>
                                        <div className=" info ml-3">
                                            <h3 className="text-g mb-0">
                                                +91-9673391008
                                            </h3>
                                            <p className="mb-0">24/7 Support center</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="phno d-flex align-items-center mx-5">
                                    <span><HeadsetMicIcon /></span>
                                    <div className=" info ml-3">
                                        <h3 className="text-g mb-0">
                                            +91-9673391008
                                        </h3>
                                        <p className="mb-0">24/7 Support center</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 part3">
                            <div className="d-flex align-items-center">
                                <h5 className=" follow">Follow Us</h5>
                                <ul className="list list-inline">
                                    <li className="list-inline-item">
                                        <Link to={''}><FacebookOutlinedIcon /></Link>

                                    </li>
                                    <li className="list-inline-item">
                                        <Link to={''}><TwitterIcon /></Link>

                                    </li>
                                    <li className="list-inline-item">
                                        <Link to={''}><InstagramIcon /></Link>

                                    </li>
                                    <li className="list-inline-item">
                                        <Link to={''}><YouTubeIcon /></Link>

                                    </li>
                                    <li className="list-inline-item">
                                        <Link to={''}><PinterestIcon /></Link>

                                    </li>

                                </ul>
                            </div>
                        </div>


                    </div>

                </footer>

            </div>
        </>
    )
}
export default Footer;
