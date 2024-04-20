import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../Footer";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
const Checkout = ({ cartItems }) => {
  const [fields, setFields] = useState({});
  const [errors, setErrors] = useState({});
  const [order, setOrder] = useState({
    products: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "",
  });
  const { t } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language, (err, t) => {
      if (err) return console.log("Error loading language:", err);
      console.log("Language changed to:", language);
    });
  };
  const { products, name, email, phone, address, city, country } = order;

  let navigate = useNavigate();

  const handleChange = (field, e) => {
    setFields({ ...fields, [field]: e.target.value });
    setOrder({ ...order, [e.target.name]: e.target.value });

  };

  const handleValidation = () => {
    let errors = {};
    let formIsValid = true;

    if (!fields["name"] || !fields["name"].match(/^[a-zA-Z\s]+$/)) {
      errors["name"] = "First name must be only letters";
      formIsValid = false;
    }

    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "Email cannot be empty";
    } else if (typeof fields["email"] !== "undefined") {
      if (!fields["email"].match("@")) {
        formIsValid = false;
        errors["emails"] = "use @";
      }
    }

    if (!fields["Address"]) {
      formIsValid = false;
      errors["Address"] = "Address cannot be empty";
    }

    if (!fields["City"]) {
      formIsValid = false;
      errors["City"] = "City cannot be empty";
    } else if (typeof fields["City"] !== "City") {
      if (!fields["City"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["City"] = "City must be only letters";
      }
    }

    if (!fields["Country"]) {
      formIsValid = false;
      errors["Country"] = "Country cannot be empty";
    } else if (typeof fields["Country"] !== "Country") {
      if (!fields["Country"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["Country"] = "Country must be only letters";
      }
    }

    if (!fields["number"]) {
      formIsValid = false;
      errors["number"] = "number cannot be empty";
    } else if (typeof fields["number"] !== "number") {
      if (!fields["number"] == 11) {
        formIsValid = false;
        errors["number"] = "number must be 11 digit";
      }
      setErrors(errors);
      return formIsValid;
    }
  };
  const getList = (data) => {
    return data.map(item => ({
      name: item.name,
      price: item.price,
      quantity: item.quantity

    }));
  };
  const list = getList(cartItems);

  const contactSubmit = async (e) => {
    e.preventDefault();
    if (handleValidation()) {
      let formData = new FormData();
      let jsonString = "";
      list.forEach((item, index) => {
        jsonString += `{ name: ${item.name} ,quantity: ${item.quantity} ,total price: ${item.price} }`;
        if (index !== list.length - 1) {
          jsonString += ",\n"; 
        }
      });
      formData.append("products", JSON.stringify(jsonString, null, 2) );
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("address", address);
      formData.append("city", city);
      formData.append("country", country);
  
      await axios({
        method: "post",
        url: "http://localhost/ecommerce_graduation/dashboard/orders/readAll.php",
        data: formData,
        config: { headers: { "Content-Type": "multipart/form-data" } },
      })
        .then(function (response) {
          // alert("Order Confirmed");
          navigate("/Payment");
        })
        .catch(function (response) {
          console.log(response);
        });

    } else {
      alert("Wrong Information");
    }
  };

  return (
    <div className="checkout">
      <Container fluid>
        <form onSubmit={contactSubmit} >
          <Row>
            <Col lg="8" md="8" sm="12" className="formcheckout">
              <h3>{t("Billingdetails")}</h3>

              <input
                type="text"
                name="name"
                placeholder={t("Name")}
                onChange={(e) => handleChange("name", e)}
                value={fields["name"] || ""}
              />
              <span>{errors["name"]}</span>

              <div className="checkform">
                <input
                  type="number"
                  name="phone"
                  placeholder={t("Phone")}
                  onChange={(e) => handleChange("number", e)}
                  value={fields["number"]}
                />
              </div>
              <span>{errors["number"]}</span>
              <div className="checkform">
                <input
                  type="email"
                  placeholder={t("Email")}
                  name="email"
                  onChange={(e) => handleChange("email", e)}
                  value={fields["email"]}
                />
              </div>
              <span>{errors["email"]}</span>
              <div className="checkform">
                <input
                  type="text"
                  name="address"
                  placeholder={t("StreetAddress")}
                  onChange={(e) => handleChange("Address", e)}
                  value={fields["Address"]}
                />
              </div>
              <span>{errors["Address"]}</span>
              <div className="checkform">
                <input
                  type="text"
                  name="city"
                  placeholder={t("City")}
                  onChange={(e) => handleChange("City", e)}
                  value={fields["City"]}
                />
              </div>
              <span>{errors["City"]}</span>
              <div className="checkform">
                <input
                  type="text"
                  name="country"
                  placeholder={t("Country")}
                  onChange={(e) => handleChange("Country", e)}
                  value={fields["Country"]}
                />
              </div>
              <span>{errors["Country"]}</span>

              <div className="d-flex align-items-center justify-content-between">
                <input type="submit" value={t("PlaceOrder")} />
                <Link to="/Cart">
                  
                  <button>{t("BackCart")}</button>
                </Link>
              </div>
            </Col>

            <Col lg="4" md="4" sm="12" className="col2ccheck">
              {cartItems.map((item) => (
                <div className="cartcheckout">
                  <img
                    src={
                      "http://localhost/ecommerce_graduation/uploads/products/" +
                      item.image
                    }
                    alt=""
                  />

                  <p>{t("dir") == "ltr" ? item.name : item.name_ar}</p>
                  <p>{item.price} LE</p>
                  <div className="dcartt">{item.quantity}</div>
                </div>
              ))}
            </Col>
          </Row>
        </form>
      </Container>

      <Footer />
    </div>
  );
};

export default Checkout;
