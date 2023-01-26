import React, { useContext } from "react";
import ThemeContext from "../Context/Context";
import './Show.css'
import product from '../img/27-272007_transparent-product-icon-png-product-vector-icon-png.png'

function Show() {

    const { names, setNames, VALUES } = useContext(ThemeContext)

    return (
        <div className="cards">
                {
                    names.map((item, index) => {
                        return (
                            <div key={index} className="card">
                                <img src={product} alt="product" />
                                <h3>{item.productName}</h3> <br />
                                <h3>{item.priceValue}</h3>
                            </div>
                        )
                    })
                }
        </div>
    )
}

export default Show;