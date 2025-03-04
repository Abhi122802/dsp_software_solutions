import React from "react";
import Sliderbanner from './slider/slider';
import CatSlider from "../../components/catSlider/catSlider";
import Slider from "react-slick";
import './home.css'
import Product from "../../components/products/product";

import Banners from "../../components/banner/banner";
import silderbanner1 from "../../assets/images/slide1.jpg";

import TopProducts from "./TopProducts/TopProducts";


const Home = () => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        fade: false,
        arrows: true,
        autoplay:3000,
        centerMode: true
    };

    return (
        <>
            <Sliderbanner />
            <CatSlider />
            <Banners />

            <section className="homeProducts">
                <div className="container-fluid">
                    <div className="d-flex align-item-center">
                        <h2 className="hd mb-0 mt-0">Popular Product</h2>
                        <ul className=" collection list list-inline ml-auto filterTab mb-0">
                            <li className="list-inline-item">
                                <a href className="cursor">All</a>
                            </li>
                            <li className="list-inline-item">
                                <a href className="cursor">Cameras</a>
                            </li>
                            <li className="list-inline-item">
                                <a href className="cursor">Billing Machines</a>
                            </li>
                            <li className="list-inline-item">
                                <a href className="cursor">Laptop</a>
                            </li>
                            <li className="list-inline-item">
                                <a href className="cursor">Pc</a>
                            </li>
                            <li className="list-inline-item">
                                <a href className="cursor">Printers</a>
                            </li>
                        </ul>
                    </div>


                    <div className="row productRow">
                        <div className="item">
                            <Product tag="sale" />
                        </div>
                        <div className="item">
                            <Product tag="hot" />
                        </div>
                        <div className="item">
                            <Product tag="new" />
                        </div>
                        <div className="item">
                            <Product tag="best" />
                        </div>                    <div className="item">
                            <Product tag="sale" />
                        </div>
                        <div className="item">
                            <Product tag="hot" />
                        </div>
                        <div className="item">
                            <Product tag="new" />
                        </div>
                        <div className="item">
                            <Product tag="sale" />
                        </div>
                        <div className="item">
                            <Product tag="sale" />
                        </div>                    <div className="item">
                            <Product tag="new" />
                        </div>    <div className="item">
                            <Product tag="new" />
                        </div>
                        <div className="item">
                            <Product tag="new" />
                        </div>
                        <div className="item">
                            <Product />
                        </div>
                        <div className="item">
                            <Product tag="new" />
                        </div>                    <div className="item">
                            <Product tag="new" />
                        </div>

                    </div>

                </div>
            </section>


            <section className="homeProducts homeProductsRow2 pt-0">
                <div className="container-fluid">
                    <div className="d-flex align-item-center">
                        <h2 className="hd mb-0 mt-0">Daily Best Sells</h2>
                        <ul className=" collection1 list list-inline ml-auto filterTab mb-0">
                            <li className="list-inline-item">
                                <a href className="cursor">Featured</a>
                            </li>
                            <li className="list-inline-item">
                                <a href className="cursor">Popular</a>
                            </li>
                            <li className="list-inline-item">
                                <a href className="cursor">New added</a>
                            </li>

                        </ul>
                    </div>

                    <br />
                    <div className="row">
                        <div className="col-md-3 p-5">
                            <img src={silderbanner1} className="w-100" alt="" />
                        </div>
                        <div className="col-md-9">
                            <Slider {...settings} className="productSlider">
                                <div className="item">
                                    <Product tag="sale" />
                                </div>
                                <div className="item">
                                    <Product tag="sale" />
                                </div>
                                <div className="item">
                                    <Product tag="sale" />
                                </div>
                                <div className="item">
                                    <Product tag="sale" />
                                </div>
                                <div className="item">
                                    <Product tag="sale" />
                                </div>
                                <div className="item">
                                    <Product tag="sale" />
                                </div>
                                <div className="item">
                                    <Product tag="sale" />
                                </div>
                                <div className="item">
                                    <Product tag="sale" />
                                </div>
                                <div className="item">
                                    <Product tag="sale" />
                                </div>
                                
                            </Slider>
                        </div>

                    </div>
                </div>
            </section>

            <section className="topProductsSection">
                <div className="container-fluid">
                    <div className="col">
                        <TopProducts title="Top Selling"/>
                    </div>
                    
                    <div className="col">
                        <TopProducts title="Trending Products"/>
                    </div>
                    
                    <div className="col">
                        <TopProducts title="Recently added"/>
                    </div>
                    
                    <div className="col">
                        <TopProducts title="Top Rated"/>
                    </div>


                </div>
                <h1 className="line">_________________________________________________________________________________</h1>
            </section>


        </>
    )
}
export default Home;