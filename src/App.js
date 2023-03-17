import React from "react";

import "./App.css";

import { Routes, Route } from "react-router-dom";

import { Layout } from "./components/UI/layout";

import "./styles.css";

import ContactPage from "./components/contact";

import ProductPage from "./components/home";

import ProductSpecificPage from "./components/specificPage/index.jsx";

import { CartPage } from "./components/cart";

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
          <Route path="/cartPage" element={<CartPage />} />
          <Route path="/cartPage" component={CartPage} />
          <Route path="/checkoutPage" element={<CheckoutPage />} />
          <Route
            path="/checkout"
            render={(props) => (
              <CheckoutPage {...props} cart={props.location.state.cart} />
            )}
          />
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
