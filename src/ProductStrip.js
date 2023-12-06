import React from "react";
import "./ProductStrip.css"
import ProductThumbnail from "./ProductThumbnail";
import { v4 } from "uuid";

const ProductStrip = ({stripName, products, productType, productOnClick}) => {

    const loadMore = (e) => {
        console.log(productType)
    }

    return (
        <div className="ProductStrip">
            <h3 className="ProductStrip-name">{stripName}</h3>
            <ul className="ProductStrip-products">
                {products.map((product) => {
                    return (
                        <li className="ProductStrip-product" key={v4()}>
                            <ProductThumbnail productBBLink={product.url} productName={product.name} productPrice={product.salePrice} productImage={product.image} productType={productType} productOnClick={productOnClick}/>
                        </li>
                    )
                })}
                {productType !== "userBuild" ? 
                    <li className="ProductStrip-product" key={v4()}>
                        <div className="ProductStrip-load-more" onClick={loadMore}>
                            <h3>Load More</h3>
                        </div>
                    </li>
                : null}

            </ul>
        </div>
    )
}

export default ProductStrip