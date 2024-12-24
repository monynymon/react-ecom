import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

const ShoppingCart = () => {
  const { cartItems, removeFromCart, decreaseQuantity, increaseQuantity } =
    useContext(CartContext);

  const getCartTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <>
      <header className="header">
        <div className="header__top">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-7">
                <div className="header__top__left">
                  <p>Free shipping, 30-day return or refund guarantee.</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-5">
                <div className="header__top__right">
                  <div className="header__top__links">
                    <Link to="#">Sign in</Link>
                    <Link to="#">FAQs</Link>
                  </div>
                  <div className="header__top__hover">
                    <span>
                      Usd <i className="arrow_carrot-down"></i>
                    </span>
                    <ul>
                      <li>USD</li>
                      <li>EUR</li>
                      <li>USD</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3">
              <div className="header__logo">
                <Link to="/">
                  <img src="img/logo.png" alt="" />
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <nav className="header__menu mobile-menu">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li className="active">
                    <Link to="/shop">Shop</Link>
                  </li>
                  <li>
                    <Link to="">Pages</Link>
                    <ul className="dropdown">
                      <li>
                        <Link to="/about">About Us</Link>
                      </li>
                      
                      <li>
                        <Link to="/shopping-cart">Shopping Cart</Link>
                      </li>
                      <li>
                        <Link to="/checkout">Check Out</Link>
                      </li>
                      <li>
                        <Link to="/blog-detail">Blog Details</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contacts</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-3 col-md-3">
              <div className="header__nav__option">
                <Link to="#" className="search-switch">
                  <img src="img/icon/search.png" alt="" />
                </Link>
                <Link to="#">
                  <img src="img/icon/heart.png" alt="" />
                </Link>
                <Link to="#">
                  <img src="img/icon/cart.png" alt="" /> <span>0</span>
                </Link>
                <div className="price">$0.00</div>
              </div>
            </div>
          </div>
          <div className="canvas__open">
            <i className="fa fa-bars"></i>
          </div>
        </div>
      </header>

      <section className="breadcrumb-option">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb__text">
                <h4>Shopping Cart</h4>
                <div className="breadcrumb__links">
                  <Link to="/">Home</Link>
                  <Link to="/shop">Shop</Link>
                  <span>Shopping Cart</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="shopping-cart spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="shopping__cart__table">
                <table>
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.length === 0 ? (
                      <tr>
                        <td colSpan="4" style={{ textAlign: "center" }}>
                          Cart is empty
                        </td>
                      </tr>
                    ) : (
                      cartItems.map((item) => (
                        <tr key={item.id}>
                          <td className="product__cart__item">
                            <div className="product__cart__item__text">
                              <img src={item.image} alt={item.title} style={{ width:"50px", height:"50px" }}/>
                              <h6>{item.name}</h6>
                              <h5>${item.price}</h5>
                            </div>
                          </td>
                          <td className="quantity__item">
                            <button className="m-3 rounded" onClick={() => decreaseQuantity(item.id)}>
                              -
                            </button>
                            {item.name} {item.quantity}
                            <button className="m-3 rounded" onClick={() => increaseQuantity(item.id)}>
                              +
                            </button>
                          </td>
                          <td className="cart__price">
                            ${item.price * item.quantity}
                          </td>
                          <button onClick={() => removeFromCart(item.id)}>
                            Remove
                          </button>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="continue__btn">
                    <Link to="/shop">Continue Shopping</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="cart__total">
                <h6>Cart total</h6>
                <ul>
                  <li>
                    Total <span>${(getCartTotal()).toFixed(2)}</span>
                  </li>
                </ul>
                <Link to="/checkout" className="primary-btn">
                  Proceed to checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer__about">
                <div className="footer__logo">
                  <Link to="#">
                    <img src="img/footer-logo.png" alt="" />
                  </Link>
                </div>
                <p>
                  The customer is at the heart of our unique business model,
                  which includes design.
                </p>
                <Link to="#">
                  <img src="img/payment.png" alt="" />
                </Link>
              </div>
            </div>
            <div className="col-lg-2 offset-lg-1 col-md-3 col-sm-6">
              <div className="footer__widget">
                <h6>Shopping</h6>
                <ul>
                  <li>
                    <Link to="#">Clothing Store</Link>
                  </li>
                  <li>
                    <Link to="#">Trending Shoes</Link>
                  </li>
                  <li>
                    <Link to="#">Accessories</Link>
                  </li>
                  <li>
                    <Link to="#">Sale</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6">
              <div className="footer__widget">
                <h6>Shopping</h6>
                <ul>
                  <li>
                    <Link to="#">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="#">Payment Methods</Link>
                  </li>
                  <li>
                    <Link to="#">Delivary</Link>
                  </li>
                  <li>
                    <Link to="#">Return & Exchanges</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 offset-lg-1 col-md-6 col-sm-6">
              <div className="footer__widget">
                <h6>NewLetter</h6>
                <div className="footer__newslatter">
                  <p>
                    Be the first to know about new arrivals, look books, sales &
                    promos!
                  </p>
                  <form action="#">
                    <input type="text" placeholder="Your email" />
                    <button type="submit">
                      <span className="icon_mail_alt"></span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="footer__copyright__text">
                <p>
                  Copyright ©
                  <script>document.write(new Date().getFullYear());</script>2020
                  All rights reserved | This template is made with{" "}
                  <i className="fa fa-heart-o" aria-hidden="true"></i> by{" "}
                  <Link to="https://colorlib.com" target="_blank">
                    Colorlib
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="search-model">
        <div className="h-100 d-flex align-items-center justify-content-center">
          <div className="search-close-switch">+</div>
          <form className="search-model-form">
            <input
              type="text"
              id="search-input"
              placeholder="Search here....."
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
