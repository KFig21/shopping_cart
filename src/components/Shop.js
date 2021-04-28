import '../App.css';
import { Link } from 'react-router-dom';
import allProducts from '../data/AllProducts';
import categories from '../data/Categories';
import React, { useState } from "react";

function Shop() {

  const brands = [...categories.brands];
  const products = [...categories.products];

  const [catalog, setCatalog] = useState([...allProducts]);
  const [sortedBy, setSortedBy] = useState("All");

  const sortBrand = (brand) => {
    if(brand === "All"){
        setCatalog(allProducts); 
        setSortedBy("All");
        return
    } 
    const newArr = allProducts.filter((item) => item.brand === brand);
    setCatalog(newArr);
    setSortedBy(brand);
  }

  const sortProduct = (product) => {
    if(product === "All"){
        setCatalog(allProducts); 
        setSortedBy("All");
        return
    } 
    const newArr = allProducts.filter((item) => item.category === product);
    setCatalog(newArr);
    setSortedBy(product);
  }

  return (
    <div className="shop">
        <div className="shop-sidebar">
            <h1 className="shop-sidebar-shop">Shop/</h1>
            <h2 className="shop-sidebar-sort">{sortedBy}</h2>
            <h2 className="shop-sidebar-categories">Products</h2>
            <div className="shop-sidebar-buttons-container">
                {products.map((product) => (
                    <button className="shop-sidebar-button" onClick={sortProduct.bind(this, `${product.name}`)}>{product.name}</button>
                ))}
            </div>
            <h2 className="shop-sidebar-categories">Brands</h2>
            <div className="shop-sidebar-buttons-container">
                {brands.map((brand) => (
                    <button className="shop-sidebar-button" onClick={sortBrand.bind(this, `${brand.name}`)}>{brand.name}</button>
                ))}
            </div>
        </div>
        <div className="shop-products">
            {catalog.map(item => (
            <div key={item.id}>
                <Link to={`/shop/${item.id}`} className="shop-product-container">
                    <div className="shop-img-container">
                        <img className="shop-img" src={item.image} alt={item.name} />
                        <img className="preview-img" src={item.previewImage} alt={item.name} />
                    </div>
                    <span className="shop-product-name">{item.name} - ${item.price}</span>
                </Link>
            </div>
            ))}
        </div>
    </div>
  );
}

export default Shop;
