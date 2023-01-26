import React, { useState } from "react";
import { useContext } from "react";
import ThemeContext from '../Context/Context'
import './Add.css'
import product from '../img/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.png'

function Add() {

    const { names, setNames, name, setName, price, setPrice, describe, setDescribe } = useContext(ThemeContext)
    return (
        <div className="Admin">
            <p>Add Product</p>
            <input className="form-control" value={name} type='text' placeholder="Type product name" onChange={(e) => { setName(e.target.value) }} />
            <input className="form-control" value={price} type="text" placeholder="Type price value" onChange={(e) => { setPrice(e.target.value) }} />
            <select class="form-select" onChange={(e) => {setDescribe(e.target.value)}} id="inputGroupSelect01">
                <option selected>Choose...</option>
                <option value="Technology">Technology</option>
                <option value="Fashion">Fashion</option>
                <option value="Home, live, office">Home, live, office</option>
                <option value="Car, garden, building">Car, garden, building</option>
                <option value="Toy, baby">Toy, baby</option>
                <option value="Sport, outdoor">Sport, outdoor</option>
                <option value="Cosmetic, self-care">Cosmetic, self-care</option>
                <option value="Supermarket, pet shop">Supermarket, pet shop</option>
                <option value="Book, music, film, hobby">Book, music, film, hobby</option>
            </select>
            <button className="btn btn-primary" type="click" onClick={() => setNames([...names, { productName: name, priceValue: price, describeText: describe }])}>ADD</button>
        </div>
    )
}

export default Add;