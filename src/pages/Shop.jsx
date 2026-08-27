import React, { useState, useEffect } from "react";
import "./Shop.css";
import Navbar from "../components/Navbar"; // make sure this file exists and exports default

// Import images
import charcoal1 from "../assets/charcoal1.jpeg";
import charcoal2 from "../assets/charcoal2.jpeg";
import charcoal3 from "../assets/charcoal3.jpeg";

import watercolor1 from "../assets/watercolor1.jpeg";
import watercolor2 from "../assets/watercolor2.jpeg";
import watercolor3 from "../assets/watercolor3.jpeg";

import digital1 from "../assets/digital1.png";
import digital2 from "../assets/digital2.jpeg";
import digital3 from "../assets/digital3.jpeg";

const products = [
  { 
    id: 1, 
    name: "Charcoal Portrait", 
    price: 120, 
    stock: 5, 
    images: [charcoal1, charcoal2, charcoal3] 
  },
  { 
    id: 2, 
    name: "Watercolor Landscape", 
    price: 90, 
    stock: 5, 
    images: [watercolor1, watercolor2, watercolor3] 
  },
  { 
    id: 3, 
    name: "Digital Abstract", 
    price: 150, 
    stock: 5, 
    images: [digital1, digital2, digital3] 
  }
];



export default function ShopPage() {
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hideHero, setHideHero] = useState(false);
  const [popupMessage, setPopupMessage] = useState(""); // ✅ popup state

  useEffect(() => {
    const handleScroll = () => {
      setHideHero(window.scrollY > 120);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

const addToCart = (product) => {
  if (product.stock > 0) {
    setCart([...cart, product]);
    product.stock -= 1;
    setPopupMessage(`${product.name} added to cart!`);
  } else {
    setPopupMessage(`${product.name} is sold out!`);
  }
  setTimeout(() => setPopupMessage(""), 2000);
};


  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const categories = ["All", "Portraits", "Landscapes", "Abstracts"];
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

      const handleCheckout = async () => {
  try {
    const response = await fetch("http://localhost:5000/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cart }) // send cart items
    });

    const data = await response.json();
    alert(data.message);
  } catch (error) {
    alert("Error placing order. Please try again.");
  }
};




  return (
    <div className="shop-page">
      <Navbar />

      <header className={`shop-hero ${hideHero ? "hidden" : ""}`}>
        <h1>Shop</h1>
        <p>Discover unique, hand-crafted art pieces!</p>
      </header>

      <nav className="shop-navbar">
        {categories.map((cat) => (
          <button
            key={cat}
            className={selectedCategory === cat ? "active" : ""}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </nav>

      <main>
        <section className="product-section">
          <div className="product-list">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-images">
                  {product.images.map((img, index) => (
                    <img key={index} src={img} alt={product.name} />
                  ))}
                </div>
                <h3>{product.name}</h3>
                <p className="topic">{product.topic}</p>
                <p className="price">${product.price}</p>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            ))}
          </div>
        </section>

<section className="cart-section">
  <h2>Your Cart</h2>
  <ul>
    {cart.map((item, index) => (
      <li key={index}>{item.name} - ${item.price}</li>
    ))}
  </ul>
  <p>Total: ${total.toFixed(2)}</p>
  <button className="checkout-btn" onClick={handleCheckout}>
    Checkout
  </button>
</section>

      </main>

      {/* ✅ Popup message */}
      {popupMessage && <div className="popup">{popupMessage}</div>}
    </div>
  );
}
