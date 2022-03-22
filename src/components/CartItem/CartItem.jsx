
import "./CartItem.css";
import trash from "../../assets/images/trash.svg";

export const CartItem = ({product}) => {
    return (
        <div className="cart-item">
            <img src={trash} alt="Supprimer ce produit" />

            <div className="cart-item-product">
                <p>{product.name}</p>
                <p>({product.cart})</p>
            </div>
        </div>
    );
};