import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
// import products from "./products.json";
import ReactImageMagnify from "react-image-magnify";
import axios from "axios";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
const Productdetail = ({ addToCart, addToWishlist }) => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState({
    text: "",
    key: "",
  });
  const [products, setProduct] = useState([]);
  const [categories, setCategory] = useState([]);
  const [colors, setColor] = useState([]);
  const [reviewss, setReviewss] = useState([]);
  const { t } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language, (err, t) => {
      if (err) return console.log("Error loading language:", err);
      console.log("Language changed to:", language);
    });
  };
  const [review, setReview] = useState({
    name: "",
    email: "",
    reviewc: "",
  });

  const { name, email, reviewc } = review;

  const onInputChange = (e) => {
    setReview({ ...review, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadCategory();
    loadColor();
    loadProduct();
    loadReviewss();
  }, []);

  const loadProduct = async () => {
    const result = await axios.get(
      "http://localhost/ecommerce_graduation/dashboard/product/readAll.php"
    );
    setProduct(result.data);
  };
  const loadCategory = async () => {
    const result = await axios.get(
      "http://localhost/ecommerce_graduation/dashboard/categories/readAll.php"
    );
    setCategory(result.data);
  };
  const loadColor = async () => {
    const result = await axios.get(
      "http://localhost/ecommerce_graduation/dashboard/colors/readAll.php"
    );
    setColor(result.data);
  };
  const loadReviewss = async () => {
    const result = await axios.get(
      "http://localhost/ecommerce_graduation/dashboard/reviews/readAll.php"
    );
    setReviewss(result.data.reverse());
  };
  const handleQuantityChange = (event) => {
    const value = event.target.value;
    if (!isNaN(value) && parseInt(value) >= 1) {
      setQuantity(parseInt(value));
    }
  };

  const zoom = (e, imageId) => {
    const image = document.getElementById(imageId);
    if (!image) return;
    const x = (e.nativeEvent.offsetX / image.offsetWidth) * 100;
    const y = (e.nativeEvent.offsetY / image.offsetHeight) * 100;
    image.style.backgroundPosition = `${x}% ${y}%`;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();

    formData.append("name", name);
    formData.append("email", email);
    formData.append("review", reviewc);
    formData.append("product_id", id);

    await axios({
      method: "post",
      url: "http://localhost/ecommerce_graduation/dashboard/reviews/readAll.php",
      data: formData,
      config: { headers: { "Content-Type": "multipart/form-data" } },
    })
      .then(function (response) {
        alert("Message sent successfully.");
      })
      .catch(function (response) {
        console.log(response);
      });
  };

  return (
    <div className="slidessdetail pt-5">
      {products.map((product, index) =>
        product.id == id ? (
          <div className="slidessdetail pt-5">
            <div className="detailfixed d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <img
                  src={`http://localhost/ecommerce_graduation/uploads/products/${product.image}`}
                  alt=""
                />
                <div className="mx-2">
                  <p>{t("dir") == "ltr" ? product.name : product.name_ar}</p>
                  <h3>LE {product.price}</h3>
                </div>
              </div>
              <div>
                <button
                  className="cartbutn mx-3"
                  onClick={() => addToCart({...product, quantity: 1})}
                >
                  {t("AddCart")}
                </button>
                <button
                  className="wishbutn"
                  onClick={() => addToWishlist({ ...product, quantity: 1 })}
                >
                  <AiOutlineHeart />
                </button>
              </div>
            </div>
            {product.image4 ? (
              <div className="divswiper">
                <Swiper
                  slidesPerView={4}
                  spaceBetween={10}
                  freeMode={true}
                  pagination={{ clickable: true }}
                  className="mySwiper"
                >
                  {[
                    product.image,
                    product.image2,
                    product.image3,
                    product.image4,
                  ].map((image, index) => (
                    <SwiperSlide key={index}>
                      <div>
                        <div
                          id={`zoom_image${index}`}
                          style={{
                            backgroundImage: `url(http://localhost/ecommerce_graduation/uploads/products/${image})`,
                          }}
                          onMouseMove={(e) => zoom(e, `zoom_image${index}`)}
                        >
                          <img
                            src={`http://localhost/ecommerce_graduation/uploads/products/${image}`}
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            ) : product.image2 ? (
              <div className="d-flex justify-content-around py-5">
                <div>
                  <div
                    id="zoom_image0"
                    style={{
                      backgroundImage: `url(http://localhost/ecommerce_graduation/uploads/products/${product.image})`,
                    }}
                    onMouseMove={(e) => zoom(e, "zoom_image0")}
                  >
                    <img
                      src={`http://localhost/ecommerce_graduation/uploads/products/${product.image}`}
                    />
                  </div>
                </div>
                <div>
                  <div
                    id="zoom_image1"
                    style={{
                      backgroundImage: `url(http://localhost/ecommerce_graduation/uploads/products/${product.image2})`,
                    }}
                    onMouseMove={(e) => zoom(e, "zoom_image1")}
                  >
                    <img
                      src={`http://localhost/ecommerce_graduation/uploads/products/${product.image2}`}
                    />
                  </div>
                </div>
              </div>
            ) : null}

            <Container className="secprodetail">
              <section>
                <Row className=" mt-5">
                  <Col md="6" sm="12">
                    <ReactImageMagnify
                      {...{
                        smallImage: {
                          alt: "Wristwatch by Ted Baker London",
                          isFluidWidth: true,
                          src: `http://localhost/ecommerce_graduation/uploads/products/${product.image}`,
                        },
                        largeImage: {
                          src: `http://localhost/ecommerce_graduation/uploads/products/${product.image}`,
                          width: 1200,
                          height: 1800,
                        },
                      }}
                    />
                  </Col>

                  <Col md="6" sm="12" className="detaildiv">
                    <p>
                      <Link to="/Productss">{t("shop")}</Link> /
                      {t("dir") == "ltr" ? product.name : product.name_ar}
                    </p>

                    <h3>
                      {t("dir") == "ltr" ? product.name : product.name_ar}
                    </h3>

                    <h5>{product.price} LE</h5>

                    <div className="detailyyy">
                      <div className="d-flex my-3">
                        <input
                          className="inputdetail"
                          type="number"
                          value={quantity}
                          onChange={handleQuantityChange}
                          min={1}
                        />
                        <button
                          className="cartbutn"
                          onClick={() => addToCart({ ...product, quantity })}
                        >
                          {t("AddCart")}
                        </button>
                        <button
                          className="wishbutn"
                          onClick={() =>
                            addToWishlist({ ...product, quantity: 1 })
                          }
                        >
                          <AiOutlineHeart />
                        </button>
                      </div>
                      <h5>
                        {t("TotalPrice")}:
                        <span> LE {quantity * product.price}</span>
                      </h5>

                      <p>
                        {t("dir") == "ltr"
                          ? product.description
                          : product.description_ar}
                      </p>

                      <ul>
                        <li>
                          {t("Availability")}:<span>{t("Instock")}</span>
                        </li>

                        <li>
                          {t("Vendor")}:<span>{t("Fashion")}</span>
                        </li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </section>

              <section className="sec3detail py-5">
                <h3>{t("Additional")}</h3>
                <hr />
                <div>
                  <h3>{t("Weight")}</h3>
                  <p>{product.weight}</p>
                </div>
                <div>
                  <h3>{t("Dimensions")}</h3>
                  <p>{product.dimensions}</p>
                </div>
                <div>
                  <h3>{t("Color")}</h3>
                  <p>
                    {colors.map((color) => (
                      product.color_id == color.id ? (
                      <>{t("dir") == "ltr" ? color.title : color.title_ar}</>
                   ):"" ))}
                  </p>
                </div>
              </section>
            </Container>

            <section className="sec4detail">
              <h3>{t("Reviews")}</h3>
              {reviewss.map((item) =>
                item.product_id == id ? (
                  <div key={item.id} className="divlist">
                    <h5>{item.name}</h5>
                    <p className="m-3">{item.review}</p>
                    <hr />
                  </div>
                ) : null
              )}

              <form
                id="to-do-form"
                onSubmit={(e) => onSubmit(e)}
                encType="multipart/form-data"
              >
                <div className="d-flex">
                  <input
                    type="text"
                    placeholder={t("Name")}
                    name="name"
                    value={name}
                    onChange={(e) => onInputChange(e)}
                  />
                  <input
                    type="email"
                    className="mx-3"
                    placeholder={t("Email")}
                    name="email"
                    value={email}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <textarea
                  rows="5"
                  placeholder={t("Review")}
                  name="reviewc"
                  value={reviewc}
                  onChange={(e) => onInputChange(e)}
                >
                  {reviewc}
                </textarea>
                <br />
                <button type="submit">{t("Send")}</button>
              </form>
            </section>
            <footer>
              <Footer />
            </footer>
          </div>
        ) : (
          " "
        )
      )}
    </div>
  );
};

export default Productdetail;
