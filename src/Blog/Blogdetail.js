import React, { Component, useEffect, useState } from "react";
import Footer from "../Footer";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import axios from "axios";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
function Blogdetail() {
  const { id } = useParams();
  const [blogs, setBlog] = useState([]);
  const { t } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language, (err, t) => {
      if (err) return console.log("Error loading language:", err);
      console.log("Language changed to:", language);
    });
  };
  useEffect(() => {
    loadBlog();
  }, []);

  const loadBlog = async () => {
    const result = await axios.get(
      "http://localhost/ecommerce_graduation/dashboard/blog/readAll.php"
    );
    setBlog(result.data.reverse());
  };
  return (
    <div>
      <Container className="SHOPALLL">
        <Row>
          <Col lg="3" md="3" sm="3" className="blogfilter ">
            <div className="seconddivblog">
              <img src="images/azamat-zhanisov (1).jpg" alt="" />
              <div>
                <h3>{t("MARIGOLD")}</h3>
                <p>{t("Photographer")}</p>
                <p>
                {t("established")}
                </p>
                <img src="images/logo-sidebar_480x480.png" alt="" />
              </div>
            </div>
            <div className="thirddivblog">
              <h3 className="thirddivh3">{t("RECENT")}</h3>
              {blogs.slice(0, 3).map((blog) => (
                <Link to={`/Blog/${blog.id}`}>
                  <div className="lllink">
                    <div className="divforthird">
                      <div>
                        <img
                          src={`http://localhost/ecommerce_graduation/uploads/blogs/${blog.photo}`}
                          alt=""
                        />
                      </div>
                      <div>
                        <h3>
                          {t("dir") == "ltr" ? blog.title : blog.title_ar}
                        </h3>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="fourthblog">
              <form>
                <h3>{t("SUBSCRIBE")}</h3>

                <input type="email" placeholder={t("Youremail")} />
                <input type="submit" value={t("subscribe")} />
              </form>
            </div>
          </Col>
          {blogs.map((blog) => (
            <>
              {blog.id == id ? (
                <Col lg="9" md="9" sm="9" className="bllogsdetail">
                  <img
                    src={`http://localhost/ecommerce_graduation/uploads/blogs/${blog.photo}`}
                    alt=""
                  />
                  <h3>{t("dir") == "ltr" ? blog.title : blog.title_ar}</h3>
                  <p>
                    {t("dir") == "ltr" ? blog.description : blog.description_ar}
                  </p>
                  <img src="/images/a07c4489811283_480x480.jpg" alt="" />
                </Col>
              ) : (
                ""
              )}
            </>
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Blogdetail;
