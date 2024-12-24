import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <header class="header">
        <div class="header__top">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 col-md-7">
                <div class="header__top__left">
                  <p>Free shipping, 30-day return or refund guarantee.</p>
                </div>
              </div>
              <div class="col-lg-6 col-md-5">
                <div class="header__top__right">
                  <div class="header__top__links">
                    <Link to="#">Sign in</Link>
                    <Link to="#">FAQs</Link>
                  </div>
                  <div class="header__top__hover">
                    <span>
                      Usd <i class="arrow_carrot-down"></i>
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
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-3">
              <div class="header__logo">
                <Link to="/">
                  <img src="img/logo.png" alt="" />
                </Link>
              </div>
            </div>
            <div class="col-lg-6 col-md-6">
              <nav class="header__menu mobile-menu">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/shop">Shop</Link>
                  </li>
                  <li>
                    <Link to="">Pages</Link>
                    <ul class="dropdown">
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
                  <li class="active">
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contacts</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="col-lg-3 col-md-3">
              <div class="header__nav__option">
                <Link to="#" class="search-switch">
                  <img src="img/icon/search.png" alt="" />
                </Link>
                <Link to="#">
                  <img src="img/icon/heart.png" alt="" />
                </Link>
                <Link to="#">
                  <img src="img/icon/cart.png" alt="" /> <span>0</span>
                </Link>
                <div class="price">$0.00</div>
              </div>
            </div>
          </div>
          <div class="canvas__open">
            <i class="fa fa-bars"></i>
          </div>
        </div>
      </header>

      <section class="breadcrumb-option">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="breadcrumb__text">
                <h4>About Us</h4>
                <div class="breadcrumb__links">
                  <Link to="./index.html">Home</Link>
                  <span>About Us</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="about spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="about__pic">
                <img src="img/about/about-us.jpg" alt="" />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="about__item">
                <h4>Who We Are ?</h4>
                <p>
                  Contextual advertising programs sometimes have strict policies
                  that need to be adhered too. Let’s take Google as an example.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="about__item">
                <h4>Who We Do ?</h4>
                <p>
                  In this digital generation where information can be easily
                  obtained within seconds, business cards still have retained
                  their importance.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="about__item">
                <h4>Why Choose Us</h4>
                <p>
                  A two or three storey house is the ideal way to maximise the
                  piece of earth on which our home sits, but for older or infirm
                  people.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="testimonial">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-6 p-0">
              <div class="testimonial__text">
                <span class="icon_quotations"></span>
                <p>
                  “Going out after work? Take your butane curling iron with you
                  to the office, heat it up, style your hair before you leave
                  the office and you won’t have to make Link trip back home.”
                </p>
                <div class="testimonial__author">
                  <div class="testimonial__author__pic">
                    <img src="img/about/testimonial-author.jpg" alt="" />
                  </div>
                  <div class="testimonial__author__text">
                    <h5>Augusta Schultz</h5>
                    <p>Fashion Design</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 p-0">
              <div
                class="testimonial__pic set-bg"
                data-setbg="img/about/testimonial-pic.jpg"
              ></div>
            </div>
          </div>
        </div>
      </section>

      <section class="counter spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="counter__item">
                <div class="counter__item__number">
                  <h2 class="cn_num">102</h2>
                </div>
                <span>
                  Our <br />
                  Clients
                </span>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="counter__item">
                <div class="counter__item__number">
                  <h2 class="cn_num">30</h2>
                </div>
                <span>
                  Total <br />
                  Categories
                </span>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="counter__item">
                <div class="counter__item__number">
                  <h2 class="cn_num">102</h2>
                </div>
                <span>
                  In <br />
                  Country
                </span>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="counter__item">
                <div class="counter__item__number">
                  <h2 class="cn_num">98</h2>
                  <strong>%</strong>
                </div>
                <span>
                  Happy <br />
                  Customer
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="team spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-title">
                <span>Our Team</span>
                <h2>Meet Our Team</h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="team__item">
                <img src="img/about/team-1.jpg" alt="" />
                <h4>John Smith</h4>
                <span>Fashion Design</span>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="team__item">
                <img src="img/about/team-2.jpg" alt="" />
                <h4>Christine Wise</h4>
                <span>C.E.O</span>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="team__item">
                <img src="img/about/team-3.jpg" alt="" />
                <h4>Sean Robbins</h4>
                <span>Manager</span>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="team__item">
                <img src="img/about/team-4.jpg" alt="" />
                <h4>Lucy Myers</h4>
                <span>Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="clients spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-title">
                <span>Partner</span>
                <h2>Happy Clients</h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-3 col-md-4 col-sm-4 col-6">
              <Link to="#" class="client__item">
                <img src="img/clients/client-1.png" alt="" />
              </Link>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-4 col-6">
              <Link to="#" class="client__item">
                <img src="img/clients/client-2.png" alt="" />
              </Link>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-4 col-6">
              <Link to="#" class="client__item">
                <img src="img/clients/client-3.png" alt="" />
              </Link>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-4 col-6">
              <Link to="#" class="client__item">
                <img src="img/clients/client-4.png" alt="" />
              </Link>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-4 col-6">
              <Link to="#" class="client__item">
                <img src="img/clients/client-5.png" alt="" />
              </Link>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-4 col-6">
              <Link to="#" class="client__item">
                <img src="img/clients/client-6.png" alt="" />
              </Link>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-4 col-6">
              <Link to="#" class="client__item">
                <img src="img/clients/client-7.png" alt="" />
              </Link>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-4 col-6">
              <Link to="#" class="client__item">
                <img src="img/clients/client-8.png" alt="" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="footer__about">
                <div class="footer__logo">
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
            <div class="col-lg-2 offset-lg-1 col-md-3 col-sm-6">
              <div class="footer__widget">
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
            <div class="col-lg-2 col-md-3 col-sm-6">
              <div class="footer__widget">
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
            <div class="col-lg-3 offset-lg-1 col-md-6 col-sm-6">
              <div class="footer__widget">
                <h6>NewLetter</h6>
                <div class="footer__newslatter">
                  <p>
                    Be the first to know about new arrivals, look books, sales &
                    promos!
                  </p>
                  <form action="#">
                    <input type="text" placeholder="Your email" />
                    <button type="submit">
                      <span class="icon_mail_alt"></span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12 text-center">
              <div class="footer__copyright__text">
                <p>
                  Copyright ©
                  <script>document.write(new Date().getFullYear());</script>2020
                  All rights reserved | This template is made with{" "}
                  <i class="fa fa-heart-o" aria-hidden="true"></i> by{" "}
                  <Link to="https://colorlib.com" target="_blank">
                    Colorlib
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div class="search-model">
        <div class="h-100 d-flex align-items-center justify-content-center">
          <div class="search-close-switch">+</div>
          <form class="search-model-form">
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
}

export default About;
