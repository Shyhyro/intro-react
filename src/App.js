import './assets/css/App.css';


import {Header} from "./components/Header/Header";
import {Cart} from "./components/Cart/Cart";
import {Categories} from "./components/Categories/Categories";
import {ProductsList} from "./components/ProductsList/ProductsList";
import {useState} from "react";

function App() {
    const productsList = [
        // Ces données viennent normalement du Back!
        {id: 1, cart: 0, image: "image1.png", name: "Disque dur", description: "Une petite description", price: 85.32, stock: 20 },
        {id: 2, cart: 0, image: "image2.png", name: "Ordinateur", description: "Une petite description", price: 899.99, stock: 5 },
        {id: 3, cart: 0, image: "image3.png", name: "Ecran", description: "Une petite description", price: 166.99, stock: 10},
        {id: 4, cart: 0, image: "image4.png", name: "Bureau", description: "Une petite description", price: 350.50, stock: 6},
        {id: 5, cart: 0, image: "image5.png", name: "Chaise", description: "Une petite description", price: 200.80, stock: 0},
    ];
    // Je déclare mon state product qui contiendra TOUS mes produits,
    // ainsi que 'cart' qui indiquera si le produit est dans le panier.
    const [products, setProducts] = useState([...productsList]);
    const [isProductUpdated, setIsProductUpdated] = useState(false);

    if (isProductUpdated) {
        setProducts(products);
        setIsProductUpdated(false);
    }

    return (
        <>
            <Header title="Welcome" />
            <div className="app">
                <Cart products={products} />
                <div className="app-main">
                    <Categories />
                    <ProductsList products={products} setIsProductUpdated={setIsProductUpdated} />
                </div>
            </div>
        </>
    );
}

export default App;