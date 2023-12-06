import React from "react";
import "./ProductThumbnail.css"

const ProductThumbnail = ({productType, productName, productPrice, productImage, productBBLink, productOnClick}) => {

    const productClicked = (e) => {
        if (e.target.tagName.toLowerCase() !== "a") {
            productOnClick({identifier: productType, name: productName, salePrice: productPrice, image: productImage, url: productBBLink})
        }
        // Do nothing if target is a link
    }

    return (
        <div className="ProductThumbnail" onClick={productClicked}>
            <p className="ProductThumbnail-name">{(productName.length > 35) ? productName.substring(0, 35).trim() + "..." : productName}</p>
            <hr></hr>
            <div className="ProductThumbnail-image-container">
                <img className="ProductThumbnail-image" src={productImage}></img>  
            </div>
            {productPrice === null ? null : <p className="ProductThumbnail-price">{`$${productPrice}`}</p>}
            {productBBLink === null ? null : <a className="ProductThumbnail-link" href={productBBLink}>BestBuy Link</a>}
        </div>
    )
}

export default ProductThumbnail;