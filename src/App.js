import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Nav from "./Components/Nav"
import Home from "./Components/Home"
import Products from "./Components/Products"
import ProductDetail from "./Components/productDetail"
import Cart from "./Components/Cart"
import { useState } from "react"
import {data} from "./data"

function App() {

  let all = [...data.hash, ...data.marijuana, ...data.edibles, ...data.vapes]

  const [cart, setCart] = useState([])
  const [quantity, setQuantity] = useState([])

  const getProduct = (key) => {
    return all.find(elem => elem.id == key)
  } 

  function addElement(id) {
    let bla = getProduct(id);
    setCart((prevState) => {
      return [...prevState, bla]
    })
    setQuantity((prevState) => {
      return [...prevState, 1]
    })
  }

  function remove(e) {
    setCart((prevState) => {
      return prevState.splice(e.target.id, 1)
    })
    setQuantity((prevState) => {
      return prevState.splice(e.target.id, 1)
    })
  }

  function changeQuantity(e) {
    setQuantity((prevState) => {
      let newArray = [];
      for (let i=0; i<prevState.length; i++) {
        if (i == e.target.id) {
          newArray.push(e.target.value)
        } else {
          newArray.push(prevState[i])
        }
      }
      return newArray
    })
  }


  
  return (
  
    <BrowserRouter>
      <Nav cart={cart} />
      <Switch>
        <Route exact path="/EL-7ECHWA">
          <Home />
        </Route>
        <Route exact path="/products/:categorie">
          <Products />
        </Route>
        <Route exact path="/product/:key">
          <ProductDetail addElement = {addElement} />
        </Route>  
        <Route exact path="/cart/">
          <Cart quantity={quantity} changeQuantity={changeQuantity} remove={remove} cart={cart}/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
