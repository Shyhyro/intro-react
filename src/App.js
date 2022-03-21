import './assets/css/App.css';

import {Header} from "./components/Header/Header";
import {Cart} from "./components/Cart/Cart";
import {Categories} from "./components/Categories/Categories";
import {Product} from "./components/Product/Product";
import {Test} from "./components/Test/Test";

function App() {
    return (
        <>
            <Header />
            <Cart />
            <div className="right">
                <Categories />
                <Product />
                <Test />
            </div>
        </>
    );
}

export default App;