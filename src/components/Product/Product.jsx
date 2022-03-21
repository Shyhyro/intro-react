
import "./Product.css";
import image1 from "../../assets/images/image1.png";
import image2 from "../../assets/images/image2.png";
import image3 from "../../assets/images/image3.png";
import image4 from "../../assets/images/image4.png";

import {QuantitySelector} from "../QuantitySelector/QuantitySelector";

import {ProductStockStatus} from "../ProductStockStatus/ProductStockStatus";

export const Product = () => {
    const products = [
        {id: 1, image: image1, name: "Disque dur", price: 85.32, stock: 20 },
        {id: 2, image: image2, name: "Ordinateur", price: 899.99, stock: 5 },
        {id: 3, image: image3, name: "Ecran", price: 166.99, stock: 10},
        {id: 4, image: image4, name: "Bureau", price: 350.50, stock: 6},
    ];

    return (
        <div>
            {products.map(product =>
                <div className="Product" key={product.id}>
                    <img src={product.image} alt="Product image" />
                    <div className="Product_detail">
                        <p className="like">Like</p>
                        <h3 className={"product_name" + (product.stock === 0 && 'out-of-stock')}>{product.name} <ProductStockStatus stock = {product.stock}/></h3>
                        <p className="ProductDescription">Description:
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Animi autem dicta ipsam iure maiores molestias nam, odio perferendis</p>
                        <p className="price">${product.price}</p>
                        <QuantitySelector />
                    </div>
                </div>
            )}
        </div>
    );
};