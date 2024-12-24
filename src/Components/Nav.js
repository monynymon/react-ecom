import React, {useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Hero from "./Hero";
import axios from "axios";
import { CartContext } from "../Context/CartContext";

function Nav() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products?limit=8"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const { addToCart } = useContext(CartContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <header className="header fixed-top">
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
                  <li className="active">
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/shop">Shop</Link>
                  </li>
                  <li>
                    <Link to="#">Pages</Link>
                    <ul className="dropdown">
                      <li>
                        <Link to="/about">About Us</Link>
                      </li>
                      <li>
                        <Link to="/shopping-cart">Shopping Cart</Link>
                      </li>
                      <li>
                        <Link to="/checkout">Checkout</Link>
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
                    <Link to="/contact">Contact</Link>
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
      <Hero />
      <section className="banner spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 offset-lg-4">
              <div className="banner__item">
                <div className="banner__item__pic">
                  <img src="img/banner/banner-1.jpg" alt="" />
                </div>
                <div className="banner__item__text">
                  <h2>Clothing Collections 2030</h2>
                  <Link to="/shop">Shop now</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="banner__item banner__item--middle">
                <div className="banner__item__pic">
                  <img src="img/banner/banner-2.jpg" alt="" />
                </div>
                <div className="banner__item__text">
                  <h2>Accessories</h2>
                  <Link to="/shop">Shop now</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="banner__item banner__item--last">
                <div className="banner__item__pic">
                  <img src="img/banner/banner-3.jpg" alt="" />
                </div>
                <div className="banner__item__text">
                  <h2>Shoes Spring 2030</h2>
                  <Link to="/shop">Shop now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="product spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <ul className="filter__controls">
                <li className="active" data-filter="*">
                  Best Sellers
                </li>
                <li data-filter=".new-arrivals">New Arrivals</li>
                <li data-filter=".hot-sales">Hot Sales</li>
              </ul>
            </div>
          </div>
          <div className="row product__filter">
            {products.map((product) => (
              <div
                key={product.id}
                className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals"
              >
                <div className="product__item">
                  <div className="product__item__pic">
                    <img
                      src={product.image}
                      alt={product.title || "Product Image"}
                      className="product-image border border-grey-500 p-3"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                    <span className="label">New</span>
                    <ul className="product__hover">
                      <li>
                        <Link to="#">
                          <img src="img/icon/heart.png" alt="" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <img src="img/icon/compare.png" alt="" />{" "}
                          <span>Compare</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <img src="img/icon/search.png" alt="" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="product__item__text">
                    <h6>{product.title}</h6>
                    <Link
                      to="#"
                      onClick={() => addToCart(product)}
                      className="add-cart"
                    >
                      + Add To Cart
                    </Link>
                    <div className="rating">
                      <i className="fa fa-star-o"></i>
                      <i className="fa fa-star-o"></i>
                      <i className="fa fa-star-o"></i>
                      <i className="fa fa-star-o"></i>
                      <i className="fa fa-star-o"></i>
                    </div>
                    <h5>${product.price}</h5>
                    <div className="product__color__select">
                      <label htmlFor="pc-1">
                        <input type="radio" id="pc-1" />
                      </label>
                      <label className="active black" htmlFor="pc-2">
                        <input type="radio" id="pc-2" />
                      </label>
                      <label className="grey" htmlFor="pc-3">
                        <input type="radio" id="pc-3" />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="categories spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="categories__text">
                <h2>
                  Clothings Hot <br /> <span>Shoe Collection</span> <br />{" "}
                  Accessories
                </h2>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="categories__hot__deal">
                <img src="img/product-sale.png" alt="" />
                <div className="hot__deal__sticker">
                  <span>Sale Of</span>
                  <h5>$29.99</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 offset-lg-1">
              <div className="categories__deal__countdown">
                <span>Deal Of The Week</span>
                <h2>Multi-pocket Chest Bag Black</h2>
                <div
                  className="categories__deal__countdown__timer"
                  id="countdown"
                >
                  <div className="cd-item">
                    <span>3</span>
                    <p>Days</p>
                  </div>
                  <div className="cd-item">
                    <span>1</span>
                    <p>Hours</p>
                  </div>
                  <div className="cd-item">
                    <span>50</span>
                    <p>Minutes</p>
                  </div>
                  <div className="cd-item">
                    <span>18</span>
                    <p>Seconds</p>
                  </div>
                </div>
                <Link to="/shop" className="primary-btn text-white">
                  Shop now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="instagram spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="instagram__pic">
                <div
                  className="instagram__pic__item"
                  style={{
                    backgroundImage: `url('/img/instagram/instagram-1.jpg')`,
                  }}
                ></div>
                <div
                  className="instagram__pic__item"
                  style={{
                    backgroundImage: `url('/img/instagram/instagram-2.jpg')`,
                  }}
                ></div>
                <div
                  className="instagram__pic__item"
                  style={{
                    backgroundImage: `url('/img/instagram/instagram-3.jpg')`,
                  }}
                ></div>
                <div
                  className="instagram__pic__item"
                  style={{
                    backgroundImage: `url('/img/instagram/instagram-4.jpg')`,
                  }}
                ></div>
                <div
                  className="instagram__pic__item"
                  style={{
                    backgroundImage: `url('/img/instagram/instagram-5.jpg')`,
                  }}
                ></div>
                <div
                  className="instagram__pic__item"
                  style={{
                    backgroundImage: `url('/img/instagram/instagram-6.jpg')`,
                  }}
                ></div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="instagram__text">
                <h2>Instagram</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <h3>#Electronics</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="latest spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <span>Latest News</span>
                <h2>Fashion New Trends</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="blog__item">
                <div
                  className="blog__item__pic"
                  style={{ backgroundImage: `url('/img/blog/blog-1.jpg')` }}
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
                  className="blog__item__pic"
                  style={{ backgroundImage: `url('/img/blog/blog-2.jpg')` }}
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
                  className="blog__item__pic"
                  style={{ backgroundImage: `url('/img/blog/blog-3.jpg')` }}
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
          </div>
        </div>
      </section>

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

      <Footer />
    </>
  );
}

export default Nav;
