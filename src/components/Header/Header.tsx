import "./Header.scss"
import {Link} from "react-router";

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
        <div className="header__search">
          <input className="header__search-input" placeholder="Search"/>
          <button className="header__search-submit">Search</button>
        </div>
        <div className="header__icons">
          <a href="/favorites" className="header__icons-favorites"><img src="/icons/heart.svg" alt="heart icon"/></a>
          <div className="header__icons-bag">
            <button className="header__icons-bag-icon"><img src="/icons/bag.svg" alt="bag icon"/></button>
            <div className="header__icons-bag-content">
              <span>Shopping cart</span>
              <span>$57.00</span>
            </div>
          </div>
        </div>
      </div>
      <nav className="header__nav">
        <div className="container">
          <ul className="header__nav-list">
            <li><a href="/">Home</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/pages">Pages</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
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