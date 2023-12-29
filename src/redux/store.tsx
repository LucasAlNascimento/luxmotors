import { configureStore } from "@reduxjs/toolkit";
import sliceCars from "./cars/sliceCars";


const store = configureStore({
    reducer: {
        cars: sliceCars,
    }
})

export default store;