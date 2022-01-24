import React, { useState, useEffect, } from 'react';
import { useParams, Link } from 'react-router-dom';
import {data} from "../data"


export default function ProductDetail(props) {

    let all = [...data.shoes, ...data.pants, ...data.ups, ...data.accessories]

    const [disabled, setDisabled] = useState(false) 
    
    

    let {key} = useParams()
    const [product, setProduct] = useState({
        images: ""
    })

    let selectedProduct = all.filter(elem => elem.id == key)

    const [imageSrc, setImageSrc] = useState()

    useEffect( () => {
        setProduct(...selectedProduct)

    }, [selectedProduct])

    useEffect( () => {
        setImageSrc(selectedProduct[0].images[0])
    }, [selectedProduct[0].images[0]])

    let smallImgArr = [...product.images];
    
    let toggleImg = (e) => {
        setImageSrc(e.target.src)
    }

    useEffect(() => {
        setDisabled(false)
    }, [product])

    let smallImgs = smallImgArr.map(elem => {
        return (
                <div className="small-img-col">
                    <img onClick={toggleImg} src={elem} width="100%" alt=""></img>
                </div>
            )
    })

    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
    }

    shuffle(all)

    let moreProducts = all.slice(0, 4)

    let viewMore = moreProducts.map((elem) => {
        return (
            
            <div className="col-4">
                <Link to={"/e-comerce-website/product/" + elem.id}>
                    <img alt="" src={elem.images[0]}></img>
                </Link>
                <h4>{elem.title}</h4>  
                <p>{"$" + elem.price}</p>
            </div>
           
        )
    })

    return (
        <div className="productPage">
            <div className="smallContainer singleProduct">
                <div className="row">
                    <div className="col-2">
                        <img className="productImg" src={imageSrc} alt="" width="100%"></img>
                        <div className="small-img-row">
                            {smallImgs}
                        </div>
                    </div>
                    <div className="col-2">
                        <p>Home / shoes</p>
                        <h1 className="productTitle" >{product.title}</h1>
                        <h4>{"$" + product.price}</h4>
                        <button disabled={disabled} onClick={ () => { 
                            props.addElement(key);
                            setDisabled(true)
                        }} className="btn">Add To Cart</button>
                        <h3>Product Details</h3>
                        <br/>
                        <p>{product.description}
                        </p>
                    </div>
                </div>
            </div>
            <div className="smallContainer">
                <div className="row row-2">
                    <h2>Related Products</h2>
                    <Link to="/e-comerce-website/products/allProducts">
                        <p>View More</p>
                    </Link>    
                </div>
            </div>

            <div className="smallContainer">
                <div className="row">
                    {viewMore}
                </div>
            </div>

        </div>
    )
}