import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiOutlineSearch } from "react-icons/ai";
import axios from "axios";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
function Blog() {
  const [search, setSearch] = useState("");
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
    <div className="bloggg">
      <Swiper
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="sliderabout"
      >
        <SwiperSlide>
          <div className="positionslider">
            <img src="images/blog-100.jpg" alt="" />
            <div className="positiondiv">
              <h5>{t("lifestyle")}</h5>
              <p>{t("Cruising")}</p>
              <a>{t("ReadMore")}</a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="positionslider">
            <img src="images/autumn-woman-EHKK4J9-1.jpg" alt="" />

            <div className="positiondiv">
              <h5>{t("lifestyle")}</h5>

              <p>{t("Cruising2")}</p>
              <a>{t("ReadMore")}</a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <Container className="SHOPALLL">
        <Row>
          <Col lg="9" md="9" sm="9">
            <div>
              {blogs
                .filter((blog) => {
                  if (search === "") {
                    return blog;
                  } else if (
                    blog.title.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return blog;
                  }
                })
                .map((blog) => (
                  <div key={blog.id}>
                    <Link to={`/Blog/${blog.id}`} className="lllink">
                      <div
                        className="blogitemmm wow slideInLeft"
                        data-wow-duration="2s"
                        data-wow-delay="0.1s"
                      >
                        <div>
                          <img
                            src={`http://localhost/ecommerce_graduation/uploads/blogs/${blog.photo}`}
                            alt=""
                            
                          />
                        </div>
                        <div>
                          <h3>{t("dir") == "ltr" ? blog.title : blog.title_ar}</h3>

                          <p>{t("dir") == "ltr" ? blog.description : blog.description_ar}</p>
                          <button>{t("ReadMore")}</button>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
            </div>
          </Col>
          <Col
            lg="3"
            md="3"
            sm="3"
            className="blogfilter wow slideInRight"
            data-wow-duration="2s"
            data-wow-delay="0.2s"
          >
            <div className="d-flex p-4">
              <input
                type="text"
                className="searchhhh"
                placeholder="Search"
                onChange={(event) => {
                  setSearch(event.target.value);
                }}
              />
              <AiOutlineSearch className="searchhhhicon" />
            </div>
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
              {blogs.slice(0,3).map((blog) => (
                <Link to={`/Blog/${blog.id}`}>
              <div
                
                className="lllink"
              >
                <div className="divforthird">
                  <div>
                    <img
                    src={`http://localhost/ecommerce_graduation/uploads/blogs/${blog.photo}`}
                    alt=""
                    />
                  </div>
                  <div>
                    <h3>{t("dir") == "ltr" ? blog.title : blog.title_ar}</h3>

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
        </Row>
      </Container>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Blog;
