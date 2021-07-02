import React from "react";
import "../App.css"
import {Link} from "react-router-dom"
import logo from "../IMAGES/weed.svg"

import headerImage from "../IMAGES/hashPng.png"
import codeIcon from "../IMAGES/code.png"


import {data} from "../data"

export default function Home() {
    return (
        <div className="homeContainer">
            <div className="header">
                <div className="row">
                    <div className="col-2">
                        <h1>One Spliff A Day <br/>Keep The Evil Away</h1>
                        <p>Getting high isn't an addiction it's a commitment. <br/>
                        So get the best quality with us and be the most high.</p>
                        <a href="/products/allProducts" class="btn">Get Your Product Now &#8594;</a>
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
                                <Link to="/products/hashProducts">
                                    <img alt="" src={data.hash[1].images[0]}></img>
                                </Link>
                            </div>
                            <h3>Hash</h3>
                        </div>
                        <div className="col-4">
                            <div className="imgContainer">
                                <Link to="/products/marijuanaProducts">
                                    <img src={data.marijuana[3].images[0]}></img>
                                </Link>
                            </div>
                            <h3>Kush</h3>
                        </div>
                        <div className="col-4">
                            <div className="imgContainer">
                                <Link to="/products/ediblesProducts">
                                    <img src={data.edibles[5].images[0]}></img>
                                </Link>
                            </div>
                            <h3>Edibles</h3>
                        </div>
                        <div className="col-4">
                            <div className="imgContainer">
                                <Link to="/products/vapesProducts">
                                    <img src={data.vapes[0].images[0]}></img>
                                </Link>
                            </div>
                            <h3>Vapes</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div class="small-container">
                <h2 class="title">Best Picks</h2>
                <div class="row">
                    <div class="col-4">
                        <Link to={"/product/" + data.hash[2].id}>
                            <img src={data.hash[2].images[0]} alt=""></img>
                        </Link>
                        <h4>{data.hash[2].title}</h4>  
                        <p>{"$ " + data.hash[2].price}</p>
                    </div>
                    <div class="col-4">
                        <Link to={"/product/" + data.marijuana[0].id}>
                            <img src={data.marijuana[0].images[0]} alt=""></img>
                        </Link>
                        <h4>{data.marijuana[0].title}</h4>  
                        <p>{"$ " + data.marijuana[0].price}</p>
                    </div>
                    <div class="col-4">
                        
                        <Link to={"/product/" + data.edibles[5].id}>
                            <img src={data.edibles[5].images[0]} alt=""></img>
                        </Link>
                        <h4>{data.edibles[5].title}</h4>  
                        <p>{"$ " + data.edibles[5].price}</p>
                    </div>
                    <div class="col-4">
                        
                        <Link to={"/product/" + data.vapes[4].id}>
                            <img src={data.vapes[4].images[0]} alt=""></img>
                        </Link>
                        <h4>{data.vapes[4].title}</h4>
                        <p>{"$ " + data.vapes[4].price}</p>
                    </div>
                </div>
            </div>
            <div class="offer">
                <div class="small-container">
                    <div class="row">
                        <div class="col-2">
                            <img src={data.hash[0].images[0]}></img>
                        </div>
                        <div class="col-2">
                            <p>Exlusively Available on EL 7ECHWA</p>
                            <h1>{data.hash[0].title}</h1>
                            <small>
                                {data.hash[0].description}
                            </small>
                            <br/>
                            <a href={"/product/" + data.hash[0].id} class="btn" >Buy Now &#8594;</a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="about" className="about">
                <div className="logo">
                    <img src={logo} alt="logo"></img>
                    <h1 className="logoTitle">EL 7ECHWA</h1>
                </div>
                <p>
                We’re known as the BC Online Dispensary that everyone is raving about for hash product selection. 
                In fact, we would say we carry the biggest variety in the whole country. 
                Other strong competitors may have 8 different hash strains, but we’ve got 60+ strains and another 24 flavoured types! 
                Our flower game is just strong — we aim for variety. 
                Instead of buying large quantities of a few strains, we buy small lots from all over BC to ensure we get a wide range of fresh flowers.
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