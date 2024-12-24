import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
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
                  <li>
                    <Link to="shop">Shop</Link>
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
                  <li className="active">
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

      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111551.9926412813!2d-90.27317134641879!3d38.606612219170856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sbd!4v1597926938024!5m2!1sen!2sbd"
          height="500"
          style={{ border: 0 }} 
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
          title=""
        ></iframe>
      </div>

      <section className="contact spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="contact__text">
                <div className="section-title">
                  <span>Information</span>
                  <h2>Contact Us</h2>
                  <p>
                    As you might expect of Link company that began as Link
                    high-end interiors contractor, we pay strict attention.
                  </p>
                </div>
                <ul>
                  <li>
                    <h4>America</h4>
                    <p>
                      195 E Parker Square Dr, Parker, CO 801 <br />
                      +43 982-314-0958
                    </p>
                  </li>
                  <li>
                    <h4>France</h4>
                    <p>
                      109 Avenue Léon, 63 Clermont-Ferrand <br />
                      +12 345-423-9893
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="contact__form">
                <form action="#">
                  <div className="row">
                    <div className="col-lg-6">
                      <input type="text" placeholder="Name" />
                    </div>
                    <div className="col-lg-6">
                      <input type="text" placeholder="Email" />
                    </div>
                    <div className="col-lg-12">
                      <textarea placeholder="Message"></textarea>
                      <button type="submit" className="site-btn">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
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

export default Contact;
