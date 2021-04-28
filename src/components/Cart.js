import '../App.css';
import CartItem from './CartItem';
import logo from '../images/logo_black.png'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function Cart({ items, deleteCartItem, changeQty, reset }) {

    useEffect(() => {
        checkoutMessageContainer = document.querySelector(".checkout-message-container");
        checkoutOverlay = document.querySelector(".checkout-overlay");
    })

    const cartItems = items.map((item) => (
        <CartItem
        key={item.id}
        {...item}
        deleteCartItem={deleteCartItem}
        changeQty={changeQty}
        />
    ));

    const cartSubtotalPrice = items
        .map((item) => item.price * item.qty)
        .reduce((a, c) => a + c, 0)
        .toFixed(2);

    const cartTotalItems = items.map((item) => parseInt(item.qty)).reduce((a, c) => a + c, 0);
    
    let itemsAmount = "item";
        if(cartTotalItems === 1){
            itemsAmount = "item";
        } else {
            itemsAmount = "items"
        }

    let shipping = (0.00).toFixed(2);
    let freeShipping = `$${150 - parseFloat(cartSubtotalPrice)} away from free shipping!`
        if(cartSubtotalPrice >149.99 || cartTotalItems === 0){
            shipping = (0.00).toFixed(2);
            freeShipping = "free shipping on orders over $150!"
        } else {
            shipping = (15.00).toFixed(2);
        }
    
    const cartTotalPrice = (parseFloat(cartSubtotalPrice) + parseFloat(shipping)).toFixed(2);

    // checkout message

    let checkoutMessageContainer = document.querySelector(".checkout-message-container");
    let checkoutOverlay = document.querySelector(".checkout-overlay");

    const checkout = () => {
        if (cartTotalItems === 0) return
        checkoutMessageContainer.classList.add("checkout-message-container--active")
        checkoutOverlay.classList.add("checkout-overlay--active");
    }


    return (
        <div className="cart">
            <div className="cart-page-cart-container">
                {cartItems}
            </div>
            <div className="cart-page-summary-container">
                <h1>cart summary</h1>
                <span className="cart-page-item-subinfo-detail">{cartTotalItems} {itemsAmount}</span>
                <div className="cart-page-summary-info">
                    <span className="cart-page-summary-info-left"><strong>Subtotal:</strong></span> 
                    <span className="cart-page-summary-info-right">${cartSubtotalPrice}</span>
                </div>
                <div className="cart-page-summary-info">
                    <span className="cart-page-summary-info-left"><strong>Shipping:</strong></span> 
                    <span className="cart-page-summary-info-right">${shipping}</span>
                </div>
                <span className="free-shipping" id="free-shipping">({freeShipping})</span>
                <div className="cart-page-summary-info overline">
                    <span className="cart-page-summary-info-left"><strong>Total:</strong></span> 
                    <span className="cart-page-summary-info-right"><strong>${cartTotalPrice}</strong></span>
                </div>
                <button onClick={checkout} className="add-to-cart-button checkout">checkout</button>
            </div>
            <div class="checkout-message-container">
                <img className="checkout-message-logo" src={logo} alt="HoopShop" />
                <span>Thank you for your order!</span>
                <p>you will recieve a confirmation email shortly</p>
                <Link to='/'><button onClick={reset} className="return-button">return to shop</button></Link>
            </div>
            <div class="checkout-overlay"></div>
        </div>
    );
}

export default Cart;
