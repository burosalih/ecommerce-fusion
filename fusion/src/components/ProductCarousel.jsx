import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductCarousel = ({ products, currentProductId }) => {
  const filteredProducts = products.filter(
    (product) => product._id !== currentProductId
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative w-full mx-auto overflow-hidden">
      <Slider {...settings}>
        {filteredProducts.map((product) => (
          <div key={product._id} className="h-64 relative">
            <Link to={`/product/${product._id}`} className="outline-none block">
              <img
                className="absolute inset-3 mx-auto max-h-48 p-4"
                src={product.slika}
                alt={product.naziv}
                style={{ objectFit: "contain" }}
              />
            </Link>
            <div className="absolute bottom-0 w-full bg-white">
              <p className="text-center font-bold">{product.naziv}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarousel;