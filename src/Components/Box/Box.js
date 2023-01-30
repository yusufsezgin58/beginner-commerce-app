import React, { useContext, useState } from "react";
import ThemeContext from "../../Context/Context";
import './Box.css'

function Box() {

    const { boxitems, setBoxitems } = useContext(ThemeContext)
    const [active, setActive] = useState('active')

    return (
        <div className="Box">
            <h3>Your Box</h3>
            <div className="items">
                {
                    boxitems.map((item, index) => {
                        return (
                            <div className="item" key={index}>
                                <li>{index + 1} - {item.item}</li>
                                <div>
                                    <a href="creditcard"><button type="submit" className="btn btn-success">Buy</button></a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Box;