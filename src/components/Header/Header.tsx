import "./Header.scss"
import { Link, NavLink } from "react-router";
import Btn, {Sizes, Types} from "../UI/Btn.tsx";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__logo">
          <Link to="/">
            <img src="/icons/plant.svg" alt="cyberbazar logo"/>
            CyberBazar
          </Link>
        </div>
        <form className="header__search" role="search">
          <input className="header__search-input" placeholder="Search" autoFocus/>
          <Btn size={Sizes.small} type={Types.submit} className="header__search-submit">Search</Btn>
        </form>
        <div className="header__icons">
          <a href="/favorites" className="header__icons-favorites"><img src="/icons/heart.svg" alt="heart icon"/></a>
          <div className="header__icons-bag">
            <button className="header__icons-bag-icon">
              <img src="/icons/bag.svg" alt="bag icon"/>
              <span className="header__icons-bag-icon_num">2</span>
            </button>

            <div className="header__icons-bag-content">
              <span>Shopping cart: </span>
              <span>$57.00</span>
            </div>
          </div>
        </div>
      </div>
      <nav className="header__nav">
        <div className="container">
          <ul className="header__nav-list">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/shop">Shop</NavLink></li>
            <li><NavLink to="/pages">Pages</NavLink></li>
            <li><NavLink to="/blog">Blog</NavLink></li>
            <li><NavLink to="/about">About Us</NavLink></li>
            <li><NavLink to="/contact">Contact Us</NavLink></li>
          </ul>
          <div className="header__nav-phone">
            <a href="tel:(219) 555-0114" className="header__nav-phone-number">
              <img src="/icons/phoneCall.svg" alt="phone call icon"/>
              (219) 555-0114
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header