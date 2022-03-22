
import "./Header.css";
import logo from "../../assets/images/logo.png";

export const Header = ({title}) => {
    return (
        <div className="Header">
            <img src={logo} alt="Shop logo"/>
            <h1>{title}</h1>
        </div>
    );
};