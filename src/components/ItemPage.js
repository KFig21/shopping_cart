import React, { useState, useEffect } from 'react';
import '../App.css';
import allProducts from '../data/AllProducts';

function Item({ itemId, addCartItem }) {

    const [item, setItem] = useState(allProducts.find((product) => product.id === itemId));
    const [image, setImage] = useState(item.gallery[0]);
    let sizes = [];
        if (item.category === "Shoes"){
            sizes = [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5];
        } else {
            sizes = ["XS", "S", "M", "L", "XL", "2XL"];
        }

    useEffect(() => {
        fetchItem();
    }, []);

    const fetchItem = () => {
        const fetchedItem = allProducts.find((product) => product.id === itemId);
        setItem(fetchedItem);
    } 

    const changeImage = (id) => {
        setImage(item.gallery[id])
    }

    const handleAdd = () => {
        if(!document.querySelector('input[name="size"]:checked')){
            document.getElementById('size-message').classList.add('added-message-show');
            removeMessage('size-message');
            return
        } 
        let size = document.querySelector('input[name="size"]:checked').value;
        let itemToAdd = {}
        if(parseFloat(size)>5){
            itemToAdd.id = `${item.name}-${parseFloat(size)}`
            itemToAdd.size = parseFloat(size);
        } else {
            itemToAdd.id = `${item.name}-${size}`
            itemToAdd.size = size;
        }
        itemToAdd.name = item.name;
        itemToAdd.price = item.price;
        itemToAdd.qty = parseInt(document.getElementById("qty").value);
        itemToAdd.image = item.gallery[0];
        itemToAdd.pageId = item.id
        addCartItem(itemToAdd);
        document.getElementById('added-message').classList.add('added-message-show');
        removeMessage('added-message');
    };

    const removeMessage = (message) => {
        setTimeout(() => {
            if(!document.getElementById(message)) return
            document.getElementById(message).classList.remove('added-message-show')
        }, 2400)
      }
    
    return (
        <div className="product-page-container">
            <div className="product-page-image-container">
                <img className="product-page-image" src={image} alt={item.name}></img>
            </div>
            <div className="product-page-info">
                <div className="product-page-main-info">
                    <h1 className="product-page-name">{item.name}</h1>
                    <h1 className="product-page-name">${item.price}</h1>
                </div>
                <div className="product-page-gallery">
                    {item.gallery.map((picture, id) => (
                        <img 
                            className="product-page-gallery-image" 
                            src={picture} 
                            alt={item.name} 
                            onClick={changeImage.bind(this, `${id}`)}
                        />
                    ))}
                </div>
                <div className="product-page-size-span-container">
                    <span className="product-page-size-span">Size:⠀</span><span id="size-message" className="added-message-hidden">pick a size</span>
                </div>
                <div className="product-size-radio-container">
                    {sizes.map((size) => (
                        <div className="product-size-radio">
                            <input className="product-size-input" type="radio" id={size} name="size" value={size} />
                            <label className="product-size-input-label" for={size}>{size}</label>
                        </div>
                    ))}
                </div>
                <div className="product-page-checkout-container">
                    <div className="product-page-qty-container">
                        Qty
                        <input className="product-page-qty-input" id="qty" type="number" min="1" defaultValue="1"></input>
                    </div>
                    <button className="add-to-cart-button" onClick={handleAdd}>add to cart</button>
                </div>
                <span id='added-message' className="added-message-hidden">added!</span>
            </div>
        </div>
    );
}

export default Item;
