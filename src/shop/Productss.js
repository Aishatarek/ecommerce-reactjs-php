import React, { useEffect, useState } from "react";
// import products from "./products.json";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import { FaSearchPlus } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import axios from "axios";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
function Productss() {
  const [search, setSearch] = useState("");
  const [search3, setSearch3] = useState(0);
  const [search4, setSearch4] = useState(0);
  const [search5, setSearch5] = useState(0);
  const [sort, setSort] = useState("");
  const [products, setProduct] = useState([]);
  const [categories, setCategory] = useState([]);
  const [colors, setColor] = useState([]);
  const { t } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language, (err, t) => {
      if (err) return console.log("Error loading language:", err);
      console.log("Language changed to:", language);
    });
  };
  useEffect(() => {
    loadCategory();
    loadColor();
    loadProduct();
  }, []);

  const loadProduct = async () => {
    const result = await axios.get(
      "http://localhost/ecommerce_graduation/dashboard/product/readAll.php"
    );
    setProduct(result.data.reverse());
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
  return (
    <div>
      <div className="divteam">
        <div>
          <h3>{t("shop")}</h3>

          <Link to="/">{t("Home")} </Link>
          <span> / {t("shop")}</span>
        </div>
      </div>
      <Container className="SHOPALLL">
        <Row>
          <Col lg="9" md="9" sm="9">
            <div>
              <form className="formmms">
                <select
                  className="selectttt"
                  onChange={(event) => {
                    setSort(event.target.value);
                  }}
                >
                  <option>{t("Featured")}</option>

                  <option value="1-10">{t("Price1")}</option>
                  <option value="10-1">{t("Price2")}</option>
                  <option value="a-z">{t("Alphabetically1")} </option>
                  <option value="z-a">{t("Alphabetically2")}</option>
                </select>
              </form>
              <Row>
                {products
                  .filter((product) => {
                    const productNameMatch = product.name
                      .toLowerCase()
                      .includes(search.toLowerCase());
                    const categoryMatch =
                      search4 == 0 || product.category_id == search4;
                    const priceMatch =
                      search3 == 0 || product.price <= parseInt(search3);
                    const colorMatch =
                      search5 == 0 || product.color_id == search5;

                    return (
                      productNameMatch &&
                      categoryMatch &&
                      priceMatch &&
                      colorMatch
                    );
                  })
                  .sort((x, y) => {
                    if (sort === "1-10") {
                      return x.price < y.price ? -1 : 1;
                    } else if (sort === "10-1") {
                      return x.price > y.price ? -1 : 1;
                    } else if (sort === "a-z") {
                      return x.name < y.name ? -1 : 1;
                    } else if (sort === "z-a") {
                      return x.name > y.name ? -1 : 1;
                    }
                  })
                  .map((product) => (
                    <Col lg="4" md="4" sm="12" key={product.id}>
                      <div
                        className="productitemm wow slideInLeft"
                        data-wow-duration="2s"
                        data-wow-delay="0.1s"
                      >
                        <div className="productitemmimg">
                          <img
                            src={
                              "http://localhost/ecommerce_graduation/uploads/products/" +
                              product.image
                            }
                            alt=""
                            className="img1item"
                          />

                          {product.image2 ? (
                            <img
                              src={
                                "http://localhost/ecommerce_graduation/uploads/products/" +
                                product.image2
                              }
                              alt=""
                              className="img2item"
                            />
                          ) : null}
                          <div className="productitemicon">
                            <Link
                              to={`/Productss/${product.id}`}
                              className="lllink"
                            >
                              <button>
                                <FaSearchPlus />
                              </button>
                            </Link>
                          </div>
                        </div>
                        <Link to="#" className="lllink">
                          <p>
                            {t("dir") == "ltr" ? product.name : product.name_ar}
                          </p>
                          <h4></h4>
                          <h3>
                            <span>
                              <del>
                                <small>LE {product.old_price}</small>
                              </del>
                            </span>
                            LE {product.price}
                          </h3>
                        </Link>
                      </div>
                    </Col>
                  ))}
              </Row>
            </div>
          </Col>
          <Col lg="3" md="3" sm="3">
            <form className="formaa">
              <hr />
              <h3>{t("Categories")}</h3>

              <input
                type="radio"
                name="fav_language1"
                value={0}
                onChange={(event) => {
                  setSearch4(event.target.value);
                }}
              />
              <label>
                <span></span> {t("All")}
              </label>

              <br />
              {categories.map((category) => (
                <>
                  <input
                    type="radio"
                    name="fav_language1"
                    value={category.id}
                    onChange={(event) => {
                      setSearch4(event.target.value);
                    }}
                  />
                  <label>
                    <span></span>
                    {t("dir") == "ltr" ? category.title : category.title_ar}
                  </label>
                  <br />
                </>
              ))}

              <hr />
              <h3>{t("Price")}</h3>

              <input
                type="range"
                className="rangeee"
                id="range"
                name="range"
                max="3000"
                min="0"
                onChange={(event) => {
                  setSearch3(event.target.value);
                }}
              />
              <br />
              <div className="dflexyyy">
                <output name="textrange" id="textrange" for="range">
                  {search3} LE
                </output>
              </div>

              <hr />
              <h3>{t("Color")}</h3>
              <input
                type="radio"
                name="color"
                value={0}
                onChange={(event) => {
                  setSearch4(event.target.value);
                }}
              />
              <label>
                <span></span>
              </label>
              {colors.map((color) => (
                <>
                  <input
                    type="radio"
                    name="color"
                    className="gray"
                    value={color.id}
                    onChange={(event) => {
                      setSearch5(event.target.value);
                    }}
                  />
                  <label>
                    <span style={{ backgroundColor: color.title }}></span>
                  </label>
                </>
              ))}

              <hr />
              <div className="d-flex">
                <input
                  type="text"
                  className="searchhhh"
                  placeholder={t("Search")}
                  onChange={(event) => {
                    setSearch(event.target.value);
                  }}
                />
                <AiOutlineSearch className="searchhhhicon" />
              </div>
              <hr />
            </form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Productss;
