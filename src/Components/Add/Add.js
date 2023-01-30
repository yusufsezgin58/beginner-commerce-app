import React, { useState } from "react";
import { useContext } from "react";
import ThemeContext from '../../Context/Context';
import './Add.css'
import product from '../../img/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.png'

function Add() {

    const { names, setNames, name, setName, price, setPrice, describe, setDescribe, address, setAddress } = useContext(ThemeContext)
    return (
        <div className="Admin">
            <p>Add Product</p>
            <br />
            <input required className="form-control" value={name} type='text' placeholder="Product Name" onChange={(e) => { setName(e.target.value) }} />
            <input required className="form-control" value={price} type="text" placeholder="Price" onChange={(e) => { setPrice(e.target.value) }} /> 
            <textarea value={address} type="text" onChange={(e) => {setAddress(e.target.value)}} className="form-control" placeholder="Address"></textarea>
            <br />
            <button className="btn btn-primary" type="button" onClick={() => setNames([...names, { productName: name, priceValue: price, describeText: describe, addressText : address}])}>ADD</button>
        </div>
    )
}

export default Add;




{/* <select required className="form-select" onChange={(e) => {setDescribe(e.target.value)}} id="inputGroupSelect01">
                <option>Choose...</option>
                <option value="Technology">Technology</option>
                <option value="Fashion">Fashion</option>
                <option value="Home, live, office">Home, live, office</option>
                <option value="Car, garden, building">Car, garden, building</option>
                <option value="Toy, baby">Toy, baby</option>
                <option value="Sport, outdoor">Sport, outdoor</option>
                <option value="Cosmetic, self-care">Cosmetic, self-care</option>
                <option value="Supermarket, pet shop">Supermarket, pet shop</option>
                <option value="Book, music, film, hobby">Book, music, film, hobby</option>
</select> */}