import React, { useState } from "react";
import "./BuildStrip.css";
import ProductStrip from "./ProductStrip";

const BuildStrip = ({userBuild, productOnClick}) => {
    
    return (
        <div className="BuildStrip">
            <ProductStrip stripName={"Your Build"} products={userBuild} productType="userBuild" productOnClick={productOnClick}/>
        </div>
    )
}

export default BuildStrip;