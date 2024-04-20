import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Footer from "./Footer";
import { useTranslation } from "react-i18next";
import i18n from "./i18n";
function Signin() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { t } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language, (err, t) => {
      if (err) return console.log("Error loading language:", err);
      console.log("Language changed to:", language);
    });
  };
  const [auth, setAuth] = useState("");
  let navigate = useNavigate();
  useEffect(() => {
    var auth = window.localStorage.getItem("name");
    setAuth(auth);
    if (auth != null) {
      navigate(`/`);
    }
  }, []);

  const { email, password } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    await axios({
      method: "post",
      url: "http://localhost/ecommerce_graduation/dashboard/users/readAll.php",
      data: formData,
      config: { headers: { "Content-Type": "multipart/form-data" } },
    })
      .then(function (response) {
        if (response) {
          //handle success
          window.localStorage.setItem("name", response.data.f_name);
          window.localStorage.setItem("id", response.data.id);
          window.location.href = "/";
        } else {
          alert("email or password are wrong");
        }
      })
      .catch(function (response) {
        console.log(response);
        alert("email or password are wrong");
      });
  };
  return (
    <>
      <div className="formmmmmmmm">
        <div className="theform">
          <form onSubmit={(e) => onSubmit(e)}>
            <h3>{t("SignIn")}</h3>

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

            <button className="signinbtn">{t("SignIn")}</button>
          </form>
          <h5>
            {t("DontHave")} <Link to="/Register"> {t("CreateNow")} </Link>
          </h5>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Signin;
