import React from "react";

import "./App.css";

import { Routes, Route, useParams } from "react-router-dom";

import { Layout } from "./components/UI/layout";

import "./styles.css";

import ContactPage from "./components/contact";

import ProductPage from "./components/home";

import ProductSpecificPage from "./components/specificPage/index.jsx";

export function Home() {
  return (
    <main>
      <ProductPage />
    </main>
  );
}

function CheckoutPage() {
  return <div>Checkout Page</div>;
}

function CheckoutSuccessPage() {
  return <div>Checkout Success Page</div>;
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
          <Route path="/contactPage" element={<ContactPage />} />
          <Route path="/product/:id" element={<ProductSpecificPage />} />
          <Route path="/productPage" element={<ProductPage />} />
          <Route path="/checkoutPage" element={<CheckoutPage />} />
          <Route
            path="/checkoutSuccessPage"
            element={<CheckoutSuccessPage />}
          />
          <Route path="*" element={<RouteNotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
