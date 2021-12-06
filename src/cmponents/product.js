import React from "react";
import Button from 'react-bootstrap/Button'

import "./product.css"

const images = require.context('../../public/images', true);


function Product ({productInfo}){
    return(
        <div className = "product-info-cont">
            <img src = {images(productInfo.img).default}></img>
            <div className="desc-cont">
                <h3>{productInfo.nombre}</h3>
                <p>{productInfo.desc}</p>
                <div>
                    <div>
                        {"$" + productInfo.precio}
                    </div>
                    <Button variant="warning" className="ana-prod-car">Añadir al carrito</Button>
                </div>
            </div>
        </div>
    )
}

export default Product