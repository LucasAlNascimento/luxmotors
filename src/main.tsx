import React from "react";
import ReactDOM from "react-dom/client";
import Routing from "./Routing";
import { Toaster } from "sonner";

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
      <Toaster
        position="top-right"
        theme="light"
				offset={{ top: 80, right: 16 }}
        toastOptions={{
          style: {
            fontFamily: "DM Sans, sans-serif",
            fontSize: "11px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            borderRadius: "0",
            border: "1px solid #e5e7eb",
            boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
          },
        }}
      />
    </Providers>
  </React.StrictMode>,
);