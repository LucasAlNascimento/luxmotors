import React from 'react'
import ReactDOM from 'react-dom/client'
import Routing from './Routing';

import './styles/styles.css'

import { register } from 'swiper/element/bundle'
register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

import { Provider } from "react-redux";
import store from './redux/store';
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from 'redux-persist';

let persistor = persistStore(store);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Routing />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
