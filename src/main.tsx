import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles/styles.css'

import { register } from 'swiper/element/bundle'
register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

import Home from './containers/Home'
import Catalog from './containers/Catalog';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Home />
    
  </React.StrictMode>,
)
