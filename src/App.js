import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import WOW from 'wowjs';
import { FaAngleUp } from "react-icons/fa";
import { Toaster } from "sonner"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import queryConfig from "./config/react-query.config";

//Pages
import HomeDefault from "./pages/HomeDefault";
import About from "./pages/About";
import ListingsThree from "./pages/ListingsThree";
import ListingsDetails from "./pages/ListingsDetails";
import Categories from "./pages/Categories";
import Visited from "./pages/Visited";
import Team from "./pages/Team";
import TeamDetails from "./pages/TeamDetails";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import ScrollToTopRoute from './components/scroll-to-top-route/ScrollToTopRoute';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/effect-fade';

import './output.css'

const queryClient = new QueryClient({
  defaultOptions: queryConfig,
});

function App() {
  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  }, []
  );
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <ScrollToTopRoute />
        <Routes>
          <Route path={`${process.env.PUBLIC_URL}/`} exact element={<HomeDefault />} />
          <Route path={`${process.env.PUBLIC_URL}/about`} exact element={<About />} />
          <Route path={`${process.env.PUBLIC_URL}/listings`} exact element={<ListingsThree />} />
          <Route path={`${process.env.PUBLIC_URL}/listings/:id`} exact element={<ListingsDetails />} />
          <Route path={`${process.env.PUBLIC_URL}/listings-details`} exact element={<ListingsDetails />} />
          <Route path={`${process.env.PUBLIC_URL}/categories`} exact element={<Categories />} />
          <Route path={`${process.env.PUBLIC_URL}/visited`} exact element={<Visited />} />
          <Route path={`${process.env.PUBLIC_URL}/team`} exact element={<Team />} />
          <Route path={`${process.env.PUBLIC_URL}/team-details`} exact element={<TeamDetails />} />
          <Route path={`${process.env.PUBLIC_URL}/contact`} exact element={<Contact />} />
          <Route path={`${process.env.PUBLIC_URL}/*`} exact element={<Error />} />
          <Route path={`${process.env.PUBLIC_URL}/error`} exact element={<Error />} />
        </Routes>
        <ScrollToTop className="scrollUp" smooth top="1500" component={<FaAngleUp />} />
        <Toaster position='top-right' richColors />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
