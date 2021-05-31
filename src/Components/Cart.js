import React, { useState } from "react";

import emptyCart from "../IMAGES/empty-cart.png"

export default function Cart(props) {
    
    const [products, setProducts] = useState(props.cart)

    let elements = []

    function getTotal() {
        let total = 0;
        for (let i=0; i<products.length; i++) {
            total += products[i].price * props.quantity[i]
        }
        return total
    }
    
    if (products != []) {

        elements = products.map((elem, index) => {
            return (
                <tr key={index}>
                    <td>
                        <div className="cartInfo">
                            <img src={elem.images[0]} width="100%" ></img>
                            <div>
                                <p>{elem.title}</p>
                                <small>{"Price: $ " + elem.price}</small>
                                <br/>
                                <p id={index} onClick={props.remove}  >Remove</p>
                            </div>
                        </div>
                    </td>
                    <td>
                        <input id={index} min="1" defaultValue="1" onChange={props.changeQuantity} type="number" ></input>
                    </td>
                    <td>{"$ " + (elem.price * props.quantity[index])}</td>
                </tr>
            )
        })

    }

    console.log(products, props.cart)

    if (products.length === 0) {
        return (
            <div className="emptyContainer">
                <img className="emptyCart" src={emptyCart} alt=""></img>
                <h1 className="emptyText" >The Cart is Empty</h1>
            </div>
        )
    } else {
        return (
            <div className="cartContainer">
                <div className="smallContainer cartPage">
                    <table>
                        <tr>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                        </tr>
                        {elements}
                    </table>
                    <div className="totalPrice">
                        <table>
                            <tr>
                                <td>Subtotal</td>
                                <td>{"$ " + getTotal()}</td>
                            </tr>
                            <tr>
                                <td>Tax</td>
                                <td>{"$ " + Math.round( 0.2 * getTotal())}</td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td>{"$ " + (getTotal() + Math.round(0.2 * getTotal()))}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}