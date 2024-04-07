import React from 'react'
import { useState, useEffect } from 'react';

export default function Carts(props) {

  const [carts, setcarts] = useState([])

  useEffect(() => {
    // Define the function inside useEffect to avoid defining it on every render
    const updatecart = async () => {
      const url_cart = `https://fakestoreapi.com/carts`;
      let data_cart = await fetch(url_cart);
      let parsedData_cart = await data_cart.json();
      setcarts(parsedData_cart); // Update the state with the fetched carts
    };

    updatecart(); // Call the function to update carts
  }, []);


  return (
    <div >

      <h1 className="carts-container" style={{ backgroundColor: props.darkmode === true ? "black" : "white", color: props.darkmode ? "white" : "black" }}>𝐒𝐡𝐨𝐩𝐩𝐢𝐧𝐠 𝐂𝐚𝐫𝐭 𝐃𝐞𝐭𝐚𝐢𝐥𝐬</h1>

      {carts.length > 0 ? (
        carts.map((cart) => (
          <div className='cart-cards' style={{ backgroundColor: props.darkmode === true ? "black" : "white", color: props.darkmode ? "white" : "black" }}>
            <div key={cart.id} className="cart-box">
              <h2>Cart ID: {cart.id}</h2>
              <div>User ID: {cart.userId}</div>
              <div>Date: {new Date(cart.date).toLocaleDateString()}</div>
              <h3>Products:</h3>
              <ul>
                {cart.products.map((product) => (
                  <li key={product.productId}>
                    <span>Product ID: {product.productId} - Quantity: {product.quantity}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))
      ) : (
        <p><strong>No information available right now ⏳ </strong></p>
      )}

    </div>
  )
}
