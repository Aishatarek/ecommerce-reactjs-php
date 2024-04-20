import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import xa from "react-bootstrap/Navbar";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { TbWorld } from "react-icons/tb";
import { useState } from "react";
import { NavItem } from "react-bootstrap";
import { AiOutlineHeart } from "react-icons/ai";
import { FaShoppingBasket } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { useTranslation } from "react-i18next";
import i18n from "./i18n";

function NavBar({ cartItems, wishlistItems }) {
  const [stickyClass, setStickyClass] = useState("relative");
  const [closee, setClosee] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [user, setUser] = useState("");
  const LogOut = () => {
    localStorage.removeItem("name");
    localStorage.clear();
    var name = localStorage.getItem("name");
    setUser(name);
  };
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos && currentScrollPos > 500);
    setPrevScrollPos(currentScrollPos);
    if (visible) {
      setStickyClass("fixed top-0 left-0 z-50");
    } else {
      setStickyClass("relative");
    }
  };
  useEffect(() => {
    var name = localStorage.getItem("name");
    setUser(name);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const wishlistQuantity = wishlistItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const { t } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language, (err, t) => {
      if (err) return console.log("Error loading language:", err);
      console.log("Language changed to:", language);
    });
  };
  return (
    <>
      {["lg"].map((expand) => (
        <Navbar
          className={`h-16 navvvv w-full bg-gray-200 ${stickyClass}`}
          expanded={closee}
          key={expand}
          bg="light"
          variant="light"
          expand={expand}
        >
          <Container fluid className="d-flex justify-content-between">
            <Link to="/" className="ImgNav">
         
            </Link>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              onClick={() => setClosee(true)}
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className="justify-content-between "
            >
              <Offcanvas.Header closeButton onClick={() => setClosee(false)}>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <Link
                    to="/"
                    className="offcanlink"
                    onClick={() => setClosee(false)}
                  >
                    <div>
                    <p className="logoP">Peace</p>

                    </div>
                  </Link>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="w-100 ml-auto textttt">
                <Nav className="mr-auto navyy" navbar>
                  <div>
                    <NavItem>
                      <Link className="navlinkk" to="/">
                        {t("Home")}
                      </Link>
                    </NavItem>
                    <NavItem>
                      <Link className="navlinkk" to="/AboutUs">
                        {t("About")}
                      </Link>
                    </NavItem>
                    <NavItem>
                      <Link className="navlinkk" to="/Productss">
                      {t("shop")}
                      </Link>
                    </NavItem>
                    <NavItem>
                      <Link className="navlinkk" to="/ContactUs">
                        {t("contact")}
                      </Link>
                    </NavItem>
                  </div>
                  <div>
                  <p className="logoP">Peace</p>

                  </div>
                  <div>
                    
                    <NavItem>
                      <Link className="navlinkk" to="/Faqs">
                        {t("faq")}
                      </Link>
                    </NavItem>
                    <NavItem>
                      <Link className="navlinkk" to="/Blog">
                        {t("blog")}
                      </Link>
                    </NavItem>
                    <NavItem>
                      {user ? (
                        <NavDropdown title={user} id="basic-nav-dropdown">
                          <NavDropdown.Item to="" onClick={() => LogOut()}>
                            Log Out
                          </NavDropdown.Item>
                        </NavDropdown>
                      ) : (
                        <>
                          <Link to="/Login">
                            <CiUser className="iconnm my-2" />
                          </Link>
                        </>
                      )}
                    </NavItem>
                    <NavItem>
                        <NavDropdown
                          title={<TbWorld />}
                          id="basic-nav-dropdown"
                        >
                          <NavDropdown.Item
                            to="#"
                            onClick={() => changeLanguage("en")}
                          >
                            en
                          </NavDropdown.Item>
                          <NavDropdown.Divider />

                          <NavDropdown.Item
                            to="#"
                            onClick={() => changeLanguage("ar")}
                          >
                            ar
                          </NavDropdown.Item>
                        </NavDropdown>
                      </NavItem>
                    <NavItem>
                  
                      <Link to="/Wishlist" className="cartLink">
                        <span>({wishlistQuantity})</span>
                        <AiOutlineHeart className="iconnm" />
                      </Link>
                    </NavItem>

                    <NavItem>
                      <Link to="/Cart" className="cartLink">
                        <span>({totalQuantity > 0 && totalQuantity})</span>
                        <FaShoppingBasket className="iconnm" />
                      </Link>
                    </NavItem>
                  </div>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavBar;
