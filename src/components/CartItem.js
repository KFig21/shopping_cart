import { Link } from 'react-router-dom';
import '../App.css';

function CartItem({ id, image, size, name, price, qty, pageId, deleteCartItem, changeQty }) {

const handleIncrease = () => changeQty(id, size, name, 1);
const handleDecrease = () => changeQty(id, size, name, -1);
const handleDelete = () => deleteCartItem(id);

  return (
        <div className="cart-page-item-container">
            <Link to={`/shop/${pageId}`}><img className="cart-page-item-image" src={image} alt={name} /></Link>
            <div className="cart-page-item-info">
                <Link className="cart-page-item-name" to={`/shop/${pageId}`}><span>{name}</span></Link>
                <div className="cart-page-item-subinfo">
                    <span className="cart-page-item-subinfo-detail">
                        <strong>Qty</strong> {qty}⠀
                        <button className="cart-page-qty-button" onClick={handleDecrease} disabled={qty < 2}> - </button>
                        <button className="cart-page-qty-button" onClick={handleIncrease}> + </button>
                    </span>
                    <span className="cart-page-item-subinfo-detail"><strong>Size</strong> {size}</span>
                    <span className="cart-page-item-subinfo-detail"><strong>Price</strong> ${price}</span>
                </div>
            </div>
            <span className="cart-page-remove-button" onClick={handleDelete}>x</span>
        </div>
  );
}

export default CartItem;
