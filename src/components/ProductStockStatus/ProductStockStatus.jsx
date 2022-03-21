import "./ProductStockStatus.css";

/**
 * Le paramètre 'props' peut s'appeler autrement.
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export const ProductStockStatus = (props) => {
    const className = props.stock > 0 ? 'in-stock':'out-of-stock';
    // Si l'on veut modifier le contenue d'un props, il faut le contenir dans une variable.
    let stock = props.stock;

    return (
        <span className={className}>({stock})</span>
    )
}