import React, { useState } from "react";
import { useContext } from "react";
import ThemeContext from '../Context/Context'
import './Add.css'

function Add() {

    const { names, setNames, name, setName, price, setPrice } = useContext(ThemeContext)
    return (
        <div>
            <input className="" value={name} type='text' placeholder="Type product name" onChange={(e) => { setName(e.target.value) }} />
            <input className="" value={price} type="text" placeholder="Type price value" onChange={(e) => {setPrice(e.target.value)}} />
            <button type="click" onClick={() => setNames([...names, {productName : name}], [...names, {priceValue : price}])}>ADD</button>
        </div>
    )
}

export default Add;