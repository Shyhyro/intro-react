
import "./CartItem.css";
import trash from "../../assets/images/trash.svg";

export const CartItem = () => {
    return (
        <div className="CartItem">
            <img src={trash} alt="Trash" />
            <span>Produit 1</span>
            <span>(1)</span>
        </div>
    );
};