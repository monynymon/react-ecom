import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Hero() {
  useEffect(() => {
    if (window.$) {
      // Initialize Owl Carousel
      window.$(".hero__slider").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        items: 1, // Adjust as needed
        autoplay: true,
      });
    } else {
      console.error("jQuery is not loaded");
    }
  }, []);

  return (
    <section className="hero p-5">
      <div className="hero__slider owl-carousel">
        <div
          className="hero__items"
          style={{ backgroundImage: `url('/img/hero/hero-1.jpg')` }}
        >
          <div class="container">
            <div class="row">
              <div class="col-xl-5 col-lg-7 col-md-8">
                <div class="hero__text">
                  <h6>Summer Collection</h6>
                  <h2>Fall - Winter Collections 2030</h2>
                  <p>
                    A specialist label creating luxury essentials. Ethically
                    crafted with an unwavering commitment to exceptional
                    quality.
                  </p>
                  <Link to="/shop" class="primary-btn">
                    Shop now <span class="arrow_right"></span>
                  </Link>
                  <div class="hero__social">
                    <Link to="#">
                      <i class="fa fa-facebook"></i>
                    </Link>
                    <Link to="#">
                      <i class="fa fa-twitter"></i>
                    </Link>
                    <Link to="#">
                      <i class="fa fa-pinterest"></i>
                    </Link>
                    <Link to="#">
                      <i class="fa fa-instagram"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="hero__items"
          style={{ backgroundImage: `url('/img/hero/hero-2.jpg')` }}
        >
          <div class="container">
            <div class="row">
              <div class="col-xl-5 col-lg-7 col-md-8">
                <div class="hero__text">
                  <h6>Summer Collection</h6>
                  <h2>Fall - Winter Collections 2030</h2>
                  <p>
                    A specialist label creating luxury essentials. Ethically
                    crafted with an unwavering commitment to exceptional
                    quality.
                  </p>
                  <Link to="/shop" class="primary-btn">
                    Shop now <span class="arrow_right"></span>
                  </Link>
                  <div class="hero__social">
                    <Link to="#">
                      <i class="fa fa-facebook"></i>
                    </Link>
                    <Link to="#">
                      <i class="fa fa-twitter"></i>
                    </Link>
                    <Link to="#">
                      <i class="fa fa-pinterest"></i>
                    </Link>
                    <Link to="#">
                      <i class="fa fa-instagram"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
