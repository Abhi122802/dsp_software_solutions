import React from "react";
import "./newsletter.css"
import Button from "@mui/material/Button";
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';


const newsletter =()=>{
    return(

        <div className="newsletterBanner">
            <SendOutlinedIcon />
            <input type="text" placeholder="Your email address..." />
            <Button className="bg-g">Subscribe</Button>
        </div>
    )
 }
 export default newsletter;