
import "./Product.css";

export const Product = ({product, setIsProductUpdated}) => {

    /**
     * Gere le fait de retirer un produit 'product' du panier.
     * @param e
     */
    function handleMinusClick(e) {
        // On ne commande pas le -1 fois un produit...
        if (product.cart > 0 ) {
            product.cart -= 1;
            setIsProductUpdated(true);
        }
    }

    /**
     * On gère l'ajout d'un produit au panier
     * @param e
     */
    function handlerPlusClick(e) {
        // On ne commande pas un produit s'il n'est plus en stock.
        if (product.cart < product.stock) {
            product.cart += 1;
            setIsProductUpdated(true);
        }
    }

    return (
        <div className="product">

            <div className="product-image">
                <img src={ require(`../../assets/images/${product.image}`)} alt="" />
            </div>

            <div className="product-content">
                <p className="product-name">{product.name}</p>
                <p className="product-description">{product.description}</p>

                <div className="product-footer">
                    <div className="quantity-selector">
                        <button onClick={handleMinusClick}>-</button>
                        <div>{product.cart}</div>
                        <button onClick={handlerPlusClick}>+</button>
                    </div>
                    <span className="product-price">${product.price}</span>
                </div>
            </div>

        </div>
    );
};