import React from "react";

import "./App.css";

import { Routes, Route } from "react-router-dom";

import { Layout } from "./components/UI/layout";

import "./styles.css";

import Contact from "./components/contact";

import ProductPage from "./components/home";

import ProductSpecificPage from "./components/specificPage/index.jsx";

import { Checkout } from "./components/cart";

import { CheckoutSuccess } from "./components/checkoutSuccess";

export function Home() {
  return (
    <main>
      <ProductPage />
    </main>
  );
}

function RouteNotFound() {
  return <div>Page not found</div>;
}

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<ProductSpecificPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkoutSuccess" element={<CheckoutSuccess />} />
          <Route path="*" element={<RouteNotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
