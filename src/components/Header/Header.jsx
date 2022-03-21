
import "./Header.css";
import logo from "../../assets/images/logo.png";

export const Header = () => {
    return (
        <div className="Header">
            <img src={logo} alt="Shop logo"/>
            <h1>Welcome to my shop</h1>
        </div>
    );
};