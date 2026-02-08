import React from "react";
import ReactDOM from "react-dom/client";
import Routing from "./Routing";

import "./styles/styles.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

import { register } from "swiper/element/bundle";
import { Providers } from "./providers/providers";
register();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Providers>
      <Routing />
    </Providers>
  </React.StrictMode>,
);
