import "./QuantitySelector.css";
import PropTypes from "prop-types";

export const QuantitySelector = ({product, setIsProductUpdated}) => {

    return (
        <div className="quantity-selector">
            <button className="quantity-selector-minus">-</button>
            <div className="quantity-selector-amount">{product.cart}</div>
            <button className="quantity-selector-plus">+</button>
        </div>
    );
};

QuantitySelector.propTypes = {
    start: PropTypes.number.isRequired,
}