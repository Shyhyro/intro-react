import "./QuantitySelector.css";

export const QuantitySelector = ({start, product}) => {

    function handleMinusClick(productName) {
        console.log("You removed one of " + productName);
    }

    function handlePlusClick(productName) {
        console.log("You add one of " + productName);
    }

    return (
        <div className="QuantitySelector">
            <span className="remove" onClick={() => handleMinusClick(product.name)}>-</span>
            {start}
            <span className="add" onClick={() => handlePlusClick(product.name)}>+</span>
        </div>
    );
};