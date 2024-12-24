import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
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
                    <Link to="/shop">Shop</Link>
                  </li>
                  <li>
                    <Link to="">Pages</Link>
                    <ul className="dropdown">
                      <li>
                        <Link to="/about">About Us</Link>
                      </li>
                      <li>
                        <Link to="/shop-detail">Shop Details</Link>
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
                  <li className="active">
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

      <section
        className="breadcrumb-blog set-bg"
        data-setbg="img/breadcrumb-bg.jpg"
        style={{ background: `url('/img/breadcrumb-bg.jpg')` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Our Blog</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="blog spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="blog__item">
                <div
                  className="blog__item__pic set-bg"
                  data-setbg="img/blog/blog-1.jpg"
                  style={{ background: `url('/img/blog/blog-1.jpg')`  }}
                ></div>
                <div className="blog__item__text">
                  <span>
                    <img src="img/icon/calendar.png" alt="" /> 16 February 2020
                  </span>
                  <h5>What Curling Irons Are The Best Ones</h5>
                  <Link to="#">Read More</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="blog__item">
                <div
                  className="blog__item__pic set-bg"
                  data-setbg="img/blog/blog-2.jpg"
                  style={{ background: `url('/img/blog/blog-2.jpg')`  }}
                ></div>
                <div className="blog__item__text">
                  <span>
                    <img src="img/icon/calendar.png" alt="" /> 21 February 2020
                  </span>
                  <h5>Eternity Bands Do Last Forever</h5>
                  <Link to="#">Read More</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="blog__item">
                <div
                  className="blog__item__pic set-bg"
                  data-setbg="img/blog/blog-3.jpg"
                  style={{ background: `url('/img/blog/blog-3.jpg')`  }}
                ></div>
                <div className="blog__item__text">
                  <span>
                    <img src="img/icon/calendar.png" alt="" /> 28 February 2020
                  </span>
                  <h5>The Health Benefits Of Sunglasses</h5>
                  <Link to="#">Read More</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="blog__item">
                <div
                  className="blog__item__pic set-bg"
                  data-setbg="img/blog/blog-4.jpg"
                  style={{ background: `url('/img/blog/blog-4.jpg')`  }}
                ></div>
                <div className="blog__item__text">
                  <span>
                    <img src="img/icon/calendar.png" alt="" /> 16 February 2020
                  </span>
                  <h5>Aiming For Higher The Mastopexy</h5>
                  <Link to="#">Read More</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="blog__item">
                <div
                  className="blog__item__pic set-bg"
                  data-setbg="img/blog/blog-5.jpg"
                  style={{ background: `url('/img/blog/blog-5.jpg')`  }}
                ></div>
                <div className="blog__item__text">
                  <span>
                    <img src="img/icon/calendar.png" alt="" /> 21 February 2020
                  </span>
                  <h5>Wedding Rings A Gift For A Lifetime</h5>
                  <Link to="#">Read More</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="blog__item">
                <div
                  className="blog__item__pic set-bg"
                  data-setbg="img/blog/blog-6.jpg"
                  style={{ background: `url('/img/blog/blog-6.jpg')`  }}
                ></div>
                <div className="blog__item__text">
                  <span>
                    <img src="img/icon/calendar.png" alt="" /> 28 February 2020
                  </span>
                  <h5>The Different Methods Of Hair Removal</h5>
                  <Link to="#">Read More</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="blog__item">
                <div
                  className="blog__item__pic set-bg"
                  data-setbg="img/blog/blog-7.jpg"
                  style={{ background: `url('/img/blog/blog-7.jpg')`  }}
                ></div>
                <div className="blog__item__text">
                  <span>
                    <img src="img/icon/calendar.png" alt="" /> 16 February 2020
                  </span>
                  <h5>Hoop Earrings A Style From History</h5>
                  <Link to="#">Read More</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="blog__item">
                <div
                  className="blog__item__pic set-bg"
                  data-setbg="img/blog/blog-8.jpg"
                  style={{ background: `url('/img/blog/blog-8.jpg')`  }}
                ></div>
                <div className="blog__item__text">
                  <span>
                    <img src="img/icon/calendar.png" alt="" /> 21 February 2020
                  </span>
                  <h5>Lasik Eye Surgery Are You Ready</h5>
                  <Link to="#">Read More</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="blog__item">
                <div
                  className="blog__item__pic set-bg"
                  data-setbg="img/blog/blog-9.jpg"
                  style={{ background: `url('/img/blog/blog-9.jpg')`  }}
                ></div>
                <div className="blog__item__text">
                  <span>
                    <img src="img/icon/calendar.png" alt="" /> 28 February 2020
                  </span>
                  <h5>Lasik Eye Surgery Are You Ready</h5>
                  <Link to="#">Read More</Link>
                </div>
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

export default Blog;
