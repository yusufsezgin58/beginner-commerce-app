import React, { useState } from "react";
import { useContext } from "react";
import ThemeContext from '../Context/Context'
import './Add.css'
import product from '../img/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.png'

function Add() {

    const { names, setNames, name, setName, price, setPrice, describe, setDescribe, address, setAddress } = useContext(ThemeContext)
    return (
        <div className="Admin">
            <h3>Add Product</h3> <hr />
            <label className="fs-6">Product Name</label>
            <input required className="form-control" value={name} type='text' placeholder="Pencil" onChange={(e) => { setName(e.target.value) }} /> <br />
            <label className="fs-6">Price</label>
            <input required className="form-control" value={price} type="text" placeholder="100" onChange={(e) => { setPrice(e.target.value) }} /> <br />
            <label className="fs-6">Address</label>
            <textarea value={address} type="text" onChange={(e) => {setAddress(e.target.value)}} className="form-control" placeholder="Los angeles, California"></textarea>
            <br />
            <label className="fs-6">Category</label>
            <select required className="form-select" onChange={(e) => {setDescribe(e.target.value)}} id="inputGroupSelect01">
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
            </select>
            <button className="btn btn-primary" type="button" onClick={() => setNames([...names, { productName: name, priceValue: price, describeText: describe, addressText : address}])}>ADD</button>
        </div>
    )
}

export default Add;