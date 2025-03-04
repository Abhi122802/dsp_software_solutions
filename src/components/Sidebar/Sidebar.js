import React from "react";
import Camera from "../../assets/images/cctv-camera.png";
import Billing from "../../assets/images/billing-machine.png";
import Cash from "../../assets/images/cash-machine.png";
import Bill from "../../assets/images/billing.png";
import Laptop from "../../assets/images/laptop.png";
import { Link } from "react-router-dom";
import Slider from '@mui/material/Slider';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Bannerimg from '../../assets/images/slider3.png';

function valuetext(value) {
    return `${value}°C`;
  }
  

const Siderbar=()=>{

    const [value, setValue] = React.useState([20, 37]);
      
        const handleChange = (event, newValue) => {
          setValue(newValue);
        };
        const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
        
    return(
        <>
        <div className="sidebar">
            <div className="card border-0 shadow">
                <h3>Category</h3>
                <div className="catList">
                    <div className="catItem d-flex align-items-center">
                        <span className="img">
                            <Link to={""}><img src={Camera} width={30}  alt="" /></Link>
                        </span>    
                        <h4 className="mb-0 ml-3 mr-3">Cameras</h4>
                        <span className="d-flex align-items-center justify-content-center rounded-circle ml-auto">30</span>  
                    </div>
                    <div className="catItem d-flex align-items-center">
                        <span className="img">
                            <Link to={""}><img src={Billing} width={30}  alt="" /></Link>
                        </span>    
                        <h4 className="mb-0 ml-3 mr-3">Billing Machine</h4>
                        <span className="d-flex align-items-center justify-content-center rounded-circle ml-auto">30</span>  
                    </div>
                    <div className="catItem d-flex align-items-center">
                        <span className="img">
                            <Link to={""}><img src={Cash} width={30}  alt="" /></Link>
                        </span>    
                        <h4 className="mb-0 ml-3 mr-3">Cash Machine</h4>
                        <span className="d-flex align-items-center justify-content-center rounded-circle ml-auto">30</span>  
                    </div>
                    <div className="catItem d-flex align-items-center">
                        <span className="img">
                            <Link to={""}><img src={Bill} width={30}  alt="" /></Link>
                        </span>    
                        <h4 className="mb-0 ml-3 mr-3">Bill Devices</h4>
                        <span className="d-flex align-items-center justify-content-center rounded-circle ml-auto">30</span>  
                    </div>
                    <div className="catItem d-flex align-items-center">
                        <span className="img">
                            <Link to={""}><img src={Laptop} width={30}  alt="" /></Link>
                        </span>    
                        <h4 className="mb-0 ml-3 mr-3">Laptop</h4>
                        <span className="d-flex align-items-center justify-content-center rounded-circle ml-auto">30</span>  
                    </div>
                    
                </div>
            </div>

            <div className="card border-0 shadow">
                <h3>Fill by price</h3>
                <div className="slider12">
                    <Slider
                        min={0}
                        step={1}
                        max={10000}
                        getAriaLabel={() => 'Temperature range'}
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                        color="success"
                        
                    />
                </div>

                <div className="d-flex pt-2 pd-3 priceRange">
                    <span>From: <strong className="text-success">₹{value[0]} </strong></span>
                    <span className="toprice">To: <strong className="text-success">₹{value[1]}</strong></span>
                </div>
                <div className="filters">
                    <h5>Brands</h5>
                    <ul className="mb-0">
                        <li> <Checkbox {...label} color="success" />red(56)</li>
                        <li> <Checkbox {...label} color="success" />red(56)</li>
                        <li> <Checkbox {...label} color="success" />red(56)</li>
                        <li> <Checkbox {...label} color="success" />red(56)</li>
                        <li> <Checkbox {...label} color="success" />red(56)</li>
                        <li> <Checkbox {...label} color="success" />red(56)</li>
                        <li> <Checkbox {...label} color="success" />red(56)</li>

                    </ul>
                </div>
                <div className="filters">
                    <h5>Item condition</h5>
                    <ul>
                        <li> <Checkbox {...label} color="success" />new(56)</li>
                        <li> <Checkbox {...label} color="success" />refurbished(56)</li>
                        <li> <Checkbox {...label} color="success" />refurbished(56)</li>
                        <li> <Checkbox {...label} color="success" />new(56)</li>
                        <li> <Checkbox {...label} color="success" />old(56)</li>
                        <li> <Checkbox {...label} color="success" />refurbished(56)</li>
                        <li> <Checkbox {...label} color="success" />new(56)</li>

                    </ul>
                </div>
                <div className="d-flex"><Button className="btn btn-g"><FilterAltIcon/>Filter</Button></div>

            </div>
            <img src={Bannerimg} className="w-100" alt="done"/>
        </div>

        
        

        </>
    )
}
export default Siderbar;