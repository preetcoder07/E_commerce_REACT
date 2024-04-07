import React from 'react'
import { useState, useEffect } from 'react'

export default function Products(props) {

    const [products, setProducts] = useState([])

    useEffect(() => {
        // Define the function inside useEffect to avoid defining it on every render
        const updateProducts = async () => {
            const url = props.category ? `https://fakestoreapi.com/products/category/${props.category}` : 'https://fakestoreapi.com/products';
            
            let data = await fetch(url);
            let parsedData = await data.json();
            setProducts(parsedData); // Update the state with the fetched products
        };

        updateProducts(); // Call the function to update products
    }, []);

    

    return (
        <div className='cards'>
            {products.map((product) => (
                <div key={product.id} className='card' style={{ backgroundColor: props.darkmode === true ? "black" : "white", color: props.darkmode ? "white" : "black" }} >
                    <img className='card_img' src={product.image} alt={product.title} />
                    <p1>{product.title ? product.title.slice(0, 28) : ""}</p1><br />
                    <p2>{product.description ? product.description.slice(0, 95) : ""}</p2><br />
                    <p3>Category : {product.category}</p3>
                    <div class="badge">{product.rating.count}</div>Remaining
                    <p4>Ratings : {product.rating.rate} ★ </p4>

                    <button className='prdctbtn' style={{ backgroundColor: props.darkmode === false ? "black" : "green" }}>₹{product.price * 83} &nbsp; Buy Now</button>   {/*&nbsp; i used this to add space*/}
                </div>
            ))}
        </div>
    );
} 