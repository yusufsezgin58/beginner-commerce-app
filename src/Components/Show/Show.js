import React, { useContext } from "react";
import ThemeContext from "../../Context/Context";
import './Show.css'
import product from '../../img/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.png'

function Show() {

    const { names, setNames, VALUES, boxitems, setBoxitems } = useContext(ThemeContext)

    return (
        <div className="cards">
            {
                names.map((item, index) => {
                    return (
                        <div key={index} className="card">
                            <img src={product} alt="product" />
                            <h3 className="bg-success text-white py-1 align-items-center rounded text-center">{item.productName}</h3>
                            <h5 className="bg-info rounded text-white py-1 px-2">{item.priceValue}$ / {item.describeText}</h5>
                            <h6 className="bg-info text-white py-1 align-items-left rounded text-left">{item.addressText}</h6>
                            <button type="button" className="btn btn-warning" onClick={(e) => setBoxitems([...boxitems, {item : item.productName}])}>Add box</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Show;