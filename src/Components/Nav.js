import React from "react"
import { Link } from "react-router-dom"
import "../App.css"
import logo from "../IMAGES/weed.svg"
import logo1 from "../IMAGES/logo.png"
import cartImg from "../IMAGES/cart.png"
import menuImg from "../IMAGES/menu.png"

export default function Nav(props) {

    let spanStyle;

    if (props.cart.length === 0) {
        spanStyle = {
            position: "absolute",
            alignSelf: "center",
            width: "25px",
            height: "25px",
            backgroundColor: "rgb(214, 40, 40)",
            borderRadius: "50%",
            color: "white",
            display: "none",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "40px"
        }
    } else {
        spanStyle = {
            position: "absolute",
            alignSelf: "center",
            width: "25px",
            height: "25px",
            backgroundColor: "rgb(214, 40, 40)",
            borderRadius: "50%",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "40px"
        }
    }

    function toggleMenu() {
        let menu = document.querySelector("#menu")
        if (menu.style.display == "none") {
            menu.style.display = "inline-block"
        } else {
            menu.style.display = "none"
        }
    }

    function toggleProducts() {
        let menu = document.querySelector(".subMenu")
        if (menu.style.display == "none") {
            menu.style.display = "flex"
        } else {
            menu.style.display = "none"
        }
    }

    return (
        <div className="navbar">
            <Link to="/e-comerce-website">
            <div className="logo">
                <img src={logo1} alt="logo"></img>
                <h1 className="logoTitle">Wear Art</h1>
            </div>
            </Link>
            <nav>
                <ul id="menu" > 
                    <li onClick={toggleProducts} className="products">
                        <span>Products</span>
                        <div className="subMenu">
                            
                            <Link to="/e-comerce-website/products/shoesProducts">
                                <span>Shoes</span>
                            </Link>
                            <Link to="/e-comerce-website/products/pantsProducts">
                                <span>Pants</span>
                            </Link>
                            <Link to="/e-comerce-website/products/upsProducts">
                                <span>Ups</span>
                            </Link>
                            
                            <Link to="/e-comerce-website/products/accessoriesProducts">
                                <span>Accessories</span>
                            </Link>
                            <Link to="/e-comerce-website/products/allProducts">
                                <span>All</span>
                            </Link>
                        </div>
                    </li>
                    <li>Contact</li>
                    <li>About</li>
                </ul>
            </nav>
            <Link to="/e-comerce-website/cart/">
                <div className="cartIcon">
                    <span style={spanStyle}>{props.cart.length}</span>
                    <img className="cartImg" alt="" src={cartImg}>
                    </img>
                </div>
            </Link>
            <img onClick={toggleMenu} src={menuImg} alt="" className="menu-icon"></img>
        </div>
    )
}