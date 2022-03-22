
import "./ProductsList.css";
import {Product} from "../Product/Product";

export const ProductsList = ({products, setIsProductUpdated}) => {

    return (
        <ul className="products-list">
            {products.map(product =>
                <Product key={product.id} product={product} setIsProductUpdated={setIsProductUpdated} />
            )}
        </ul>
    );
};