import React from "react";
import ReactDOM from "react-dom/client";
import Routing from "./Routing";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./styles/styles.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/cormorant-garamond/700.css";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";

import { register } from "swiper/element/bundle";
import { Providers } from "./providers/providers";
register();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Providers>
      <Routing />
      <ToastContainer position="top-right" autoClose={3000} />
    </Providers>
  </React.StrictMode>,
);