import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import Footer from "../Footer";
function Wishlist({ wishlistItems, removeFromWishlist }) {
  const { t } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language, (err, t) => {
      if (err) return console.log("Error loading language:", err);
      console.log("Language changed to:", language);
    });
  };
  return (
    <div>
      <div className="carttt">
        <h3 className="h3cart">{t("WishList")}</h3>

        <Container>
          <div className="fff">
            <div className="tblewidth">
              <table className="tbleee ">
                <thead>
                  <tr>
                    <th>
                      <p>{t("PRODUCTDETAILS")}</p>
                    </th>
                    <th>
                      <p>{t("UNITPRICE")} </p>
                    </th>

                    <th>
                      <p>{t("DELETE")}</p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {wishlistItems.map((product1) => (
                    <tr className="divcarttttt">
                      <td className="hhh5">
                        <img
                          src={
                            "http://localhost/ecommerce_graduation/uploads/products/" +
                            product1.image
                          }
                          alt=""
                        />
                        <p>{t("dir") == "ltr" ? product1.name : product1.name_ar}</p>
                      </td>
                      <td>
                        <p>{product1.price} LE</p>
                      </td>

                      <td>
                        <button
                          className="buttonx"
                          onClick={() => removeFromWishlist(product1.id)}
                        >
                          x
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="cartbuttons mt-5">
            <Link to="/Productss">
              
              <button className="btn2cart">{t("UpdateWishList")}</button>
            </Link>
          </div>
        </Container>
      </div>

        <Footer />
    </div>
  );
}

export default Wishlist;
