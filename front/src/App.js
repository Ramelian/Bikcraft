import { Routes, Route } from "react-router-dom";
import { Header, Footer } from "./components";
import { Home, Catalog, Product, InfoPage, Contacts, OrderPage, NotFoundPage } from "./pages";
import { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import { BikesContext } from "./Context";
import axios from "./axios.js";

const fadeIn = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add("active");
      observer.unobserve(entry.target);
    }
  });
};

const App = () => {
  const { pathname } = useLocation();
  const { mobile, setMobile } = useContext(BikesContext);
  const { bikes, setBikes, setLoading } = useContext(BikesContext);
  // Animation
  useEffect(() => {
    const elements = document.querySelectorAll("[data-anime]");

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(fadeIn, {
        rootMargin: "-20% 0px",
      });

      elements.forEach((element) => {
        observer.observe(element);
      });
    } else {
      elements.forEach((element) => {
        element.classList.add("active");
      });
    }
  }, [pathname, mobile, bikes]);

  useEffect(() => {
    if (bikes.length !== 0) {
      setLoading(false);
    }
  }, [bikes, setLoading]);

  useEffect(() => {
    const handleResize = () => {
      setMobile(() => {
        return window.innerWidth <= 800;
      });
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Call handleResize initially to set the initial screen size
    handleResize();

    axios
      .get("/product")
      .then((response) => setBikes(response.data))
      .catch((err) => console.log(err));

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setBikes, setMobile]);

  console.log(bikes);
  return (
    <>
      <Header mobile={mobile} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
};
export default App;
