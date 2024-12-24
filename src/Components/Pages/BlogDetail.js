import React from "react";
import { Link } from "react-router-dom";

const BlogDetail = () => {
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

      <section className="blog-hero spad">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-9 text-center">
              <div className="blog__hero__text">
                <h2>
                  Are you one of the thousands of Iphone owners who has no idea
                </h2>
                <ul>
                  <li>By Deercreative</li>
                  <li>February 21, 2019</li>
                  <li>8 Comments</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-details spad">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-12">
              <div className="blog__details__pic">
                <img src="img/blog/details/blog-details.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="blog__details__content">
                <div className="blog__details__share">
                  <span>share</span>
                  <ul>
                    <li>
                      <Link to="#">
                        <i className="fa fa-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="twitter">
                        <i className="fa fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="youtube">
                        <i className="fa fa-youtube-play"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="linkedin">
                        <i className="fa fa-linkedin"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="blog__details__text">
                  <p>
                    Hydroderm is the highly desired anti-aging cream on the
                    block. This serum restricts the occurrence of early aging
                    sings on the skin and keeps the skin younger, tighter and
                    healthier. It reduces the wrinkles and loosening of skin.
                    This cream nourishes the skin and brings back the glow that
                    had lost in the run of hectic years.
                  </p>
                  <p>
                    The most essential ingredient that makes hydroderm so
                    effective is Vyo-Serum, which is Link product of natural
                    selected proteins. This concentrate works actively in
                    bringing about the natural youthful glow of the skin. It
                    tightens the skin along with its moisturizing effect on the
                    skin. The other important ingredient, making hydroderm so
                    effective is “marine collagen” which along with Vyo-Serum
                    helps revitalize the skin.
                  </p>
                </div>
                <div className="blog__details__quote">
                  <i className="fa fa-quote-left"></i>
                  <p>
                    “When designing an advertisement for Link particular product
                    many things should be researched like where it should be
                    displayed.”
                  </p>
                  <h6>_ John Smith _</h6>
                </div>
                <div className="blog__details__text">
                  <p>
                    Vyo-Serum along with tightening the skin also reduces the
                    fine lines indicating aging of skin. Problems like dark
                    circles, puffiness, and crow’s feet can be control from the
                    strong effects of this serum.
                  </p>
                  <p>
                    Hydroderm is Link multi-functional product that helps in
                    reducing the cellulite and giving the body Link toned shape,
                    also helps in cleansing the skin from the root and not
                    letting the pores clog, nevertheless also let’s sweeps out
                    the wrinkles and all signs of aging from the sensitive near
                    the eyes.
                  </p>
                </div>
                <div className="blog__details__option">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="blog__details__author">
                        <div className="blog__details__author__pic">
                          <img src="img/blog/details/blog-author.jpg" alt="" />
                        </div>
                        <div className="blog__details__author__text">
                          <h5>Aiden Blair</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="blog__details__tags">
                        <Link to="#">#Fashion</Link>
                        <Link to="#">#Trending</Link>
                        <Link to="#">#2020</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blog__details__btns">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <Link to="" className="blog__details__btns__item">
                        <p>
                          <span className="arrow_left"></span> Previous Pod
                        </p>
                        <h5>
                          It S Classified How To Utilize Free Classified Ad
                          Sites
                        </h5>
                      </Link>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <Link
                        to=""
                        className="blog__details__btns__item blog__details__btns__item--next"
                      >
                        <p>
                          Next Pod <span className="arrow_right"></span>
                        </p>
                        <h5>
                          Tips For Choosing The Perfect Gloss For Your Lips
                        </h5>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="blog__details__comment">
                  <h4>Leave A Comment</h4>
                  <form action="#">
                    <div className="row">
                      <div className="col-lg-4 col-md-4">
                        <input type="text" placeholder="Name" />
                      </div>
                      <div className="col-lg-4 col-md-4">
                        <input type="text" placeholder="Email" />
                      </div>
                      <div className="col-lg-4 col-md-4">
                        <input type="text" placeholder="Phone" />
                      </div>
                      <div className="col-lg-12 text-center">
                        <textarea placeholder="Comment"></textarea>
                        <button type="submit" className="site-btn">
                          Post Comment
                        </button>
                      </div>
                    </div>
                  </form>
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

export default BlogDetail;
