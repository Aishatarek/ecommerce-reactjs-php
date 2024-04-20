import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { useTranslation } from "react-i18next";
import i18n from "./i18n";
function Register() {
  const [user, setUser] = useState({
    f_name: "",
    s_name: "",
    email: "",
    password: "",
    address: "",
  });
  const { t } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language, (err, t) => {
      if (err) return console.log("Error loading language:", err);
      console.log("Language changed to:", language);
    });
  };
  const { f_name, s_name, email, password, address } = user;
  let navigate = useNavigate();

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("f_name", f_name);
    formData.append("s_name", s_name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("address", address);
    await axios({
      method: "post",
      url: "http://localhost/ecommerce_graduation/dashboard/users/readAll.php",
      data: formData,
      config: { headers: { "Content-Type": "multipart/form-data" } },
    })
      .then(function (response) {
        if (response) {
          alert("Registration successful. Please sign in.");
          navigate("/Login");
        } else {
          alert("Registration failed. Please try again.");
        }
      })
      .catch(function (error) {
        console.error("Error during registration:", error);
        alert("Registration failed. Please try again.");
      });
  };

  return (
   <>
    <div className="formmmmmmmm">
      <div className="theform">
        <form onSubmit={(e) => onSubmit(e)}>
          <h3>{t("CreateAccount")}</h3>

          <div>
            <input
              type="text"
              placeholder={t("FName")}
              name="f_name"
              value={f_name}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder={t("LName")}
              name="s_name"
              value={s_name}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder={t("Email")}
              name="email"
              value={email}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder={t("Password")}
              name="password"
              value={password}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder={t("Address")}
              name="address"
              value={address}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <button className="signinbtn">{t("Register")}</button>
        </form>
        <h5>
        {t("Have")} <Link to="/Login"> {t("LoginHere")}</Link>
        </h5>
      </div>
    </div>
    <Footer />
   </>
  );
}

export default Register;
