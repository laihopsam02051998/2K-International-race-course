import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./containers/Home";
import AboutUs from "./containers/AboutUs";
import ModelProduct from "./containers/ModelProduct";
import News from "./containers/News";
import Advertisement from "./containers/Advertisement";
import Contact from "./containers/Contact";
// import ManagementUser from "./containers/ManagementUser";
import BookingService from "./containers/BookingServices";
import CarDetailing from "./containers/CarDetailing";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";
import { Fragment } from "react";
import PaintProtection from "./containers/PaintProtection";
import DetailCar from "./containers/Details/DetailCar";
import NewDetail from "./containers/News/NewDetail";
import DetailAccessory from "./containers/Details/DetailAccessory";
import ScrollToTop from "./Services/ScrollToTop";
function App() {
  return (
    <Router history={history}>
      <Fragment>
        <Header />
        <ScrollToTop>
          <Switch>
            <Route path="/AboutUs" component={AboutUs} />
            <Route path="/ModelProduct" component={ModelProduct} />
            <Route path="/News" component={News} />
            <Route path="/Advertisement" component={Advertisement} />
            <Route path="/Contact" component={Contact} />
            <Route path="/BookingService" component={BookingService} />
            <Route path="/CarDetailing" component={CarDetailing} />
            <Route path="/PaintProtection" component={PaintProtection} />
            <Route path="/DetailAccessory" component={DetailAccessory} />
            <Route path="/DetailCar/:Id" component={DetailCar} />
            <Route path="/NewDetail/:Id" component={NewDetail} />
            <Route exact path="/" component={Home} />
          </Switch>
        </ScrollToTop>
        <Footer />
      </Fragment>
    </Router>
  );
}

export default App;
