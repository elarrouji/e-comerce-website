import React from "react";
import "../App.css"
import {Link} from "react-router-dom"
import logo from "../IMAGES/logo.png"


import headerImage from "../IMAGES/header2.png"
import codeIcon from "../IMAGES/code.png"


import {data} from "../data"

export default function Home() {
    return (
        <div className="homeContainer">
            <div className="header">
                <div className="row">
                    <div className="col-2">
                        <h1>Don't just stare at Art <br/>Make it a part of You</h1>
                        <p>Every piece we are offering is unique ans speacial. <br/>
                        Because we believe that every customer is unique and special.</p>
                        <a href="/e-comerce-website/products/allProducts" class="btn">Get Your Product Now &#8594;</a>
                    </div>
                    <div className="col-2">
                        <img src={headerImage}></img>
                    </div>
                </div>
            </div>
            <div className="categories">
                <h1>Featured Categories</h1>
                <div className="small-container">
                    <div className="row">
                        
                        <div className="col-4">
                            <div className="imgContainer">
                                <Link to="/e-comerce-website/products/shoesProducts">
                                    <img alt="" src={data.shoes[1].images[0]}></img>
                                </Link>
                            </div>
                            <h3>Shoes</h3>
                        </div>
                        <div className="col-4">
                            <div className="imgContainer">
                                <Link to="/e-comerce-website/products/pantsProducts">
                                    <img src={data.pants[3].images[0]}></img>
                                </Link>
                            </div>
                            <h3>Pants</h3>
                        </div>
                        <div className="col-4">
                            <div className="imgContainer">
                                <Link to="/e-comerce-website/products/upsProducts">
                                    <img src={data.ups[5].images[0]}></img>
                                </Link>
                            </div>
                            <h3>Ups</h3>
                        </div>
                        <div className="col-4">
                            <div className="imgContainer">
                                <Link to="/e-comerce-website/products/accessoriesProducts">
                                    <img src={data.accessories[0].images[0]}></img>
                                </Link>
                            </div>
                            <h3>Accessories</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div class="small-container">
                <h2 class="title">Best Picks</h2>
                <div class="row">
                    <div class="col-4">
                        <Link to={"/e-comerce-website/product/" + data.shoes[2].id}>
                            <img src={data.shoes[2].images[0]} alt=""></img>
                        </Link>
                        <h4>{data.shoes[2].title}</h4>  
                        <p>{"$ " + data.shoes[2].price}</p>
                    </div>
                    <div class="col-4">
                        <Link to={"/e-comerce-website/product/" + data.pants[0].id}>
                            <img src={data.pants[0].images[0]} alt=""></img>
                        </Link>
                        <h4>{data.pants[0].title}</h4>  
                        <p>{"$ " + data.pants[0].price}</p>
                    </div>
                    <div class="col-4">
                        
                        <Link to={"/e-comerce-website/product/" + data.ups[5].id}>
                            <img src={data.ups[5].images[0]} alt=""></img>
                        </Link>
                        <h4>{data.ups[5].title}</h4>  
                        <p>{"$ " + data.ups[5].price}</p>
                    </div>
                    <div class="col-4">
                        
                        <Link to={"/e-comerce-website/product/" + data.accessories[2].id}>
                            <img src={data.accessories[2].images[0]} alt=""></img>
                        </Link>
                        <h4>{data.accessories[2].title}</h4>
                        <p>{"$ " + data.accessories[2].price}</p>
                    </div>
                </div>
            </div>
            <div class="offer">
                <div class="small-container">
                    <div class="row">
                        <div class="col-2">
                            <img src={data.shoes[0].images[0]}></img>
                        </div>
                        <div class="col-2">
                            <p>Exlusively Available on "Wear Art"</p>
                            <h1>{data.shoes[0].title}</h1>
                            <small>
                                {data.shoes[0].description}
                            </small>
                            <br/>
                            <a href={"/e-comerce-website/product/" + data.shoes[0].id} class="btn" >Buy Now &#8594;</a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="about" className="about">
                <div className="logo">
                    <img src={logo} alt="logo"></img>
                    <h1 className="logoTitle">Wear Art</h1>
                </div>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p> 
            </div>
            <div id="contact" className="contact">
                <a target="blank" href="https://github.com/elarrouji">
                    <img src={codeIcon}></img>
                </a>
            </div>
        </div>
    )
}