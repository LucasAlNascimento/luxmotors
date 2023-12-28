import { combineReducers } from "redux";
import userReducer from './user/reducer';
import carsReducer from "./cars/reducer";


const rootReducer = combineReducers({
  userReducer,
  carsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
