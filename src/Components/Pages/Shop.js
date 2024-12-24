import React, {useContext, useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import axios from "axios";

const Shop = () => {
  
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products"
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

    if (!products || products.length === 0) {
      return <div>Loading...</div>; 
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
                <h4>Shop</h4>
                <div className="breadcrumb__links">
                  <Link to="/">Home</Link>
                  <span>Shop</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="shop spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="shop__sidebar">
                <div className="shop__sidebar__search">
                  <form action="#">
                    <input type="text" placeholder="Search..." />
                    <button type="submit">
                      <span className="icon_search"></span>
                    </button>
                  </form>
                </div>
                <div className="shop__sidebar__accordion">
                  <div className="accordion" id="accordionExample">
                    <div className="card">
                      <div className="card-heading">
                        <Link data-toggle="collapse" data-target="#collapseOne">
                          Categories
                        </Link>
                      </div>
                      <div
                        id="collapseOne"
                        className="collapse show"
                        data-parent="#accordionExample"
                      >
                        <div className="card-body">
                          <div className="shop__sidebar__categories">
                            <ul className="nice-scroll">
                              <li>
                                <Link to="#">Men (20)</Link>
                              </li>
                              <li>
                                <Link to="#">Women (20)</Link>
                              </li>
                              <li>
                                <Link to="#">Bags (20)</Link>
                              </li>
                              <li>
                                <Link to="#">Clothing (20)</Link>
                              </li>
                              <li>
                                <Link to="#">Shoes (20)</Link>
                              </li>
                              <li>
                                <Link to="#">Accessories (20)</Link>
                              </li>
                              <li>
                                <Link to="#">Kids (20)</Link>
                              </li>
                              <li>
                                <Link to="#">Kids (20)</Link>
                              </li>
                              <li>
                                <Link to="#">Kids (20)</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-heading">
                        <Link data-toggle="collapse" data-target="#collapseTwo">
                          Branding
                        </Link>
                      </div>
                      <div
                        id="collapseTwo"
                        className="collapse show"
                        data-parent="#accordionExample"
                      >
                        <div className="card-body">
                          <div className="shop__sidebar__brand">
                            <ul>
                              <li>
                                <Link to="#">Louis Vuitton</Link>
                              </li>
                              <li>
                                <Link to="#">Chanel</Link>
                              </li>
                              <li>
                                <Link to="#">Hermes</Link>
                              </li>
                              <li>
                                <Link to="#">Gucci</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-heading">
                        <Link
                          data-toggle="collapse"
                          data-target="#collapseThree"
                        >
                          Filter Price
                        </Link>
                      </div>
                      <div
                        id="collapseThree"
                        className="collapse show"
                        data-parent="#accordionExample"
                      >
                        <div className="card-body">
                          <div className="shop__sidebar__price">
                            <ul>
                              <li>
                                <Link to="#">$0.00 - $50.00</Link>
                              </li>
                              <li>
                                <Link to="#">$50.00 - $100.00</Link>
                              </li>
                              <li>
                                <Link to="#">$100.00 - $150.00</Link>
                              </li>
                              <li>
                                <Link to="#">$150.00 - $200.00</Link>
                              </li>
                              <li>
                                <Link to="#">$200.00 - $250.00</Link>
                              </li>
                              <li>
                                <Link to="#">250.00+</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-heading">
                        <Link
                          data-toggle="collapse"
                          data-target="#collapseFour"
                        >
                          Size
                        </Link>
                      </div>
                      <div
                        id="collapseFour"
                        className="collapse show"
                        data-parent="#accordionExample"
                      >
                        <div className="card-body">
                          <div className="shop__sidebar__size">
                            <label for="xs">
                              xs
                              <input type="radio" id="xs" />
                            </label>
                            <label for="sm">
                              s
                              <input type="radio" id="sm" />
                            </label>
                            <label for="md">
                              m
                              <input type="radio" id="md" />
                            </label>
                            <label for="xl">
                              xl
                              <input type="radio" id="xl" />
                            </label>
                            <label for="2xl">
                              2xl
                              <input type="radio" id="2xl" />
                            </label>
                            <label for="xxl">
                              xxl
                              <input type="radio" id="xxl" />
                            </label>
                            <label for="3xl">
                              3xl
                              <input type="radio" id="3xl" />
                            </label>
                            <label for="4xl">
                              4xl
                              <input type="radio" id="4xl" />
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-heading">
                        <Link
                          data-toggle="collapse"
                          data-target="#collapseFive"
                        >
                          Colors
                        </Link>
                      </div>
                      <div
                        id="collapseFive"
                        className="collapse show"
                        data-parent="#accordionExample"
                      >
                        <div className="card-body">
                          <div className="shop__sidebar__color">
                            <label className="c-1" for="sp-1">
                              <input type="radio" id="sp-1" />
                            </label>
                            <label className="c-2" for="sp-2">
                              <input type="radio" id="sp-2" />
                            </label>
                            <label className="c-3" for="sp-3">
                              <input type="radio" id="sp-3" />
                            </label>
                            <label className="c-4" for="sp-4">
                              <input type="radio" id="sp-4" />
                            </label>
                            <label className="c-5" for="sp-5">
                              <input type="radio" id="sp-5" />
                            </label>
                            <label className="c-6" for="sp-6">
                              <input type="radio" id="sp-6" />
                            </label>
                            <label className="c-7" for="sp-7">
                              <input type="radio" id="sp-7" />
                            </label>
                            <label className="c-8" for="sp-8">
                              <input type="radio" id="sp-8" />
                            </label>
                            <label className="c-9" for="sp-9">
                              <input type="radio" id="sp-9" />
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-heading">
                        <Link data-toggle="collapse" data-target="#collapseSix">
                          Tags
                        </Link>
                      </div>
                      <div
                        id="collapseSix"
                        className="collapse show"
                        data-parent="#accordionExample"
                      >
                        <div className="card-body">
                          <div className="shop__sidebar__tags">
                            <Link to="#">Product</Link>
                            <Link to="#">Bags</Link>
                            <Link to="#">Shoes</Link>
                            <Link to="#">Fashion</Link>
                            <Link to="#">Clothing</Link>
                            <Link to="#">Hats</Link>
                            <Link to="#">Accessories</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="shop__product__option">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="shop__product__option__left">
                      <p>Showing 1–12 of 126 results</p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="shop__product__option__right">
                      <p>Sort by Price:</p>
                      <select>
                        <option value="">Low To High</option>
                        <option value="">$0 - $55</option>
                        <option value="">$55 - $100</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
      {products.map((product) => (
        <div key={product.id} className="col-lg-4 col-md-6 col-sm-6">
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
            </div>
          </div>
        </div>
      ))}
    </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="product__pagination">
                    <Link className="active" to="#">
                      1
                    </Link>
                    <Link to="#">2</Link>
                    <Link to="#">3</Link>
                    <span>...</span>
                    <Link to="#">21</Link>
                  </div>
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
                  <img src="img/payment.png" alt="" />{" "}
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
                    MONY
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

export default Shop;
