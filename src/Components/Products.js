import React, {useState} from "react";
import {useParams, Link, useHistory} from "react-router-dom"

import {data} from "../data"

export default function Products(props) {

    let { categorie } = useParams();

    let selectedCat;

    let header;
    
    const [all, setAll] = useState([...data.shoes, ...data.pants, ...data.ups, ...data.accessories])
    const [shoes, setShoes] = useState(data.shoes)
    const [vapes, setAccessories] = useState(data.accessories)
    const [edibles, setUps] = useState(data.ups)
    const [pants, setPants] = useState(data.pants)

    let productDiv;

    if (categorie == "upsProducts") {
        header = "Ups"
        productDiv = edibles.map(p => {

            return (
                <div className="col-4">
                    <Link to={"/e-comerce-website/product/" + p.id}>
                        <img src={p.images[0]}></img>
                    </Link>
                    <h4>{p.title}</h4>  
                    <p>{ "$ " + p.price}</p>
                </div>
                )
            })
    } else if (categorie == "shoesProducts") {
        header = "Shoes"
        productDiv = shoes.map(p => {

            return (
                
                <div className="col-4">
                    <Link to={"/e-comerce-website/product/" + p.id}>
                    <img src={p.images[0]}></img>
                    </Link>
                    <h4>{p.title}</h4>  
                    <p>{ "$ " + p.price}</p>
                </div>
                )
            })
    } else if (categorie == "pantsProducts") {
        header = "Pants"
        productDiv = pants.map(p => {

            return (
                
                <div className="col-4">
                    <Link to={"/e-comerce-website/product/" + p.id}>
                    <img src={p.images[0]}></img>
                    </Link>
                    <h4>{p.title}</h4>  
                    <p>{ "$ " + p.price}</p>
                </div>
                )
            })
    } else if (categorie == "accessoriesProducts") {
        header = "Accessories"
        productDiv = vapes.map(p => {

            return (
                
                <div className="col-4">
                    <Link to={"/e-comerce-website/product/" + p.id}>
                    <img src={p.images[0]}></img>
                    </Link>
                    <h4>{p.title}</h4>
                    <p>{ "$ " + p.price}</p>
                </div>
                )
            })
    } else if (categorie == "allProducts") {
        header = "All Products"      
            productDiv = all.map(p => {
                return (
                    
                    <div className="col-4">
                        <Link to={"/e-comerce-website/product/" + p.id}>
                        <img src={p.images[0]}></img>
                        </Link>
                        <h4>{p.title}</h4>  
                        <p>{ "$ " + p.price}</p>
                    </div>
                    )
                })
    }


    let history = useHistory();



    function handleSelect(e) {
        categorie = e.target.value
        console.log(selectedCat)
        history.push("/e-comerce-website/products/" + categorie)
    }

    function sortUp() {
        
        if (categorie == "upsProducts") {
            setUps(
                edibles.sort((a, b) => {
                    return a.price - b.price
                })
            )
            history.push("/e-comerce-website/products/" + categorie)
        } else if (categorie == "shoesProducts") {
            setShoes(
                shoes.sort((a, b) => {
                    return a.price - b.price
                })
                
            )
            history.push("/e-comerce-website/products/" + categorie)
        } else if (categorie == "pantsProducts") {
            setPants(
                pants.sort((a, b) => {
                    return a.price - b.price
                })
                
            )
            history.push("/e-comerce-website/products/" + categorie)
        } else if (categorie == "accessoriesProducts") {
            setAccessories(
                vapes.sort((a, b) => {
                    return a.price - b.price
                })
                
            )
            history.push("/e-comerce-website/products/" + categorie)
        } else if (categorie == "allProducts") {
            setAll(
                all.sort((a, b) => {
                    return a.price - b.price
                })
                
            )
            history.push("/e-comerce-website/products/" + categorie)
        }
    }

    function sortDown() {
        
        if (categorie == "upsProducts") {
            setUps(
                edibles.sort((a, b) => {
                    return b.price - a.price
                })
            )
            history.push("/e-comerce-website/products/" + categorie)
        } else if (categorie == "shoesProducts") {
            setShoes(
                shoes.sort((a, b) => {
                    return b.price - a.price
                })
                
            )
            history.push("/e-comerce-website/products/" + categorie)
        } else if (categorie == "pantsProducts") {
            setPants(
                pants.sort((a, b) => {
                    return b.price - a.price
                })
                
            )
            history.push("/e-comerce-website/products/" + categorie)
        } else if (categorie == "accessoriesProducts") {
            setAccessories(
                vapes.sort((a, b) => {
                    return b.price - a.price
                })
                
            )
            history.push("/e-comerce-website/products/" + categorie)
        } else if (categorie == "allProducts") {
            setAll(
                all.sort((a, b) => {
                    return b.price - a.price
                })
                
            )
            history.push("/e-comerce-website/products/" + categorie)
        }
    }

    function handleSort(e) {
        if(e.target.value == "up") {
            sortUp()
        } else {
            sortDown()
        }
    }


    return (
        <div className="productsContainer">
            <div className="productNav">
                <div className="productCategories">
                    <select onChange={handleSelect} defaultValue="categorie" name="sort" id="sort">
                        <option value="categorie" disabled hidden>Categories :</option>
                        <option value="allProducts">All</option>
                        <option value="shoesProducts">Shoes</option>
                        <option value="pantsProducts">Pants</option>
                        <option value="upsProducts">Ups</option>
                        <option value="accessoriesProducts">Accessories</option>
                    </select>
                </div>
                <div className="sort">
                    <select onChange={handleSort} defaultValue="sort" name="sort" id="sort">
                        <option value="sort" disabled  hidden>Sort By :</option>
                        <option value="up">Price From Low To High</option>
                        <option value="down">Price From High To Low</option>
                    </select>
                </div>
            </div>
            <div className="smallContainer">
                <h1>{header}</h1>
                <div className="row">
                    {productDiv}
                </div>
                <div className="page-btn">
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>&#8594;</span>
                </div>
            </div>
        </div>
    )
}