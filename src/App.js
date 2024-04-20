import React from "react";
import Home from "./Home";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import NavBar from "./NavBar";

import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";
import Productss from "./shop/Productss";
import Blog from "./Blog/Blog";
import Faqs from "./FAQ'S/Faqs.js";
import Productdetail from "./shop/Productdetail.js";
import Cart from "./shop/Cart.js";
import Checkout from "./shop/Checkout.js";

import Wishlist from "./shop/Wishlist.js";
import Blogdetail from "./Blog/Blogdetail.js";
import { useState } from "react";
import { useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";

import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./App.css";
import Login from "./Login.js";
import Register from "./Register.js";
import Payment from "./shop/Payment.js";
import Chatbot from "./Chatbot.js";
import { useTranslation } from "react-i18next";
import i18n from "./i18n.js";
import ScrollToTop from "./ScrollToTop.js";

function App() {
  const [cartItems, setCartItems] = useState(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  });
  const [wishlistItems, setWishlistItems] = useState(() => {
    const storedWishlistItems = localStorage.getItem("wishlistItems");
    return storedWishlistItems ? JSON.parse(storedWishlistItems) : [];
  });
  const { t } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language, (err, t) => {
      if (err) return console.log("Error loading language:", err);
      console.log("Language changed to:", language);
    });
  };
  const addToCart = (item) => {
    const existingItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );
    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += item.quantity;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, item]);
    }
  };
  const removeFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };
  const addToWishlist = (item) => {
    const existingItemIndex = wishlistItems.findIndex(
      (wishlistItem) => wishlistItem.id === item.id
    );
    if (existingItemIndex === -1) {
      setWishlistItems([...wishlistItems, item]);
    }
  };

  const removeFromWishlist = (itemId) => {
    const updatedWishlistItems = wishlistItems.filter(
      (item) => item.id !== itemId
    );
    setWishlistItems(updatedWishlistItems);
  };
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
  }, [cartItems, wishlistItems]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Root cartItems={cartItems}  wishlistItems={wishlistItems} />} >

        <Route index element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Productss" element={<Productss />} />
        <Route
          path="/Productss/:id"
          element={
            <Productdetail
              addToCart={addToCart}
              addToWishlist={addToWishlist}
            />
          }
        />

        <Route path="/Blog" element={<Blog />} />
        <Route path="/Blog/:id" element={<Blogdetail />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Faqs" element={<Faqs />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Checkout"  element={<Checkout cartItems={cartItems} />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/Chatbot" element={<Chatbot />} />

        <Route
          path="/Cart"
          element={
            <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
          }
        />
        <Route
          path="/Wishlist"
          element={
            <Wishlist
              wishlistItems={wishlistItems}
              removeFromWishlist={removeFromWishlist}
            />
            
          }
        />
        </Route>
      </>
    )
  );

  return (
    <div className={`${t("dir")} app`}  >

      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

const Root = ({cartItems,wishlistItems}) => {
  return (
    <>
     <ScrollToTop />

    <NavBar cartItems={cartItems} wishlistItems={wishlistItems} />
    <Outlet />
    </>
  )
}

