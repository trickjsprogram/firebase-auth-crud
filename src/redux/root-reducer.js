import { combineReducers } from "redux";
// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import userReducer from "./reducer";

// const persistConfig = {
//   key: "root",
//   storage,
//   whitelist: ["data"],
// };

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
