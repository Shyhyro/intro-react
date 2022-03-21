
import "./Cart.css";
import {CartItem} from "../CartItem/CartItem";

export const Cart = () => {
    function handleClick() {
        console.log("Vider le panier");
    }

    return (
        <div className="Cart">
            <h2>Vos articles</h2>
            <ul className="CartItems">
                <CartItem />
                <CartItem />
            </ul>
            <button onClick={handleClick} type="button">Vider le panier</button>
        </div>
    );
};