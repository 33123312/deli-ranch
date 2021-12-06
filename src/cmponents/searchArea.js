import {React,useState} from "react";
import Form from "react-bootstrap/Form"
import FormControl from 'react-bootstrap/FormControl'
import Product from "./product";
import products from './poducts.json';
import "./productsArea.css"
import "./searcArea.css"

function SearchArea(){
    return(
        <div>
            <div className = "search-cont">
                <div className = "searchBar-area">
                    <h1>¿Qué vamos a llevar hoy?</h1>
                    <Form className = "search-bar">
                        <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        onChange = {input => setProd(getProduct(input.nativeEvent.data))}
                        />
                    </Form>
                </div>

            </div>
            {ProductsArea()}
        </div>

    )

}

let setProd;

function ProductsArea(){
    let [products,setProducts] = useState()
    setProd = setProducts;

    return(
        <section className="product-cont">
            {products}
        </section>
    )
}

function getProduct(searchedProduct){
    let productsL = []
    
    products.filter(e =>{
        if(e.nombre.includes(searchedProduct))
            productsL.push(<Product productInfo = {e}/>)
                
    })

    console.log(productsL)

    return productsL;
}


export default SearchArea;