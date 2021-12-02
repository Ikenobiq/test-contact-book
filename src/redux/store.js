import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const contactsPersistConfig = {
  key: "contacts",
  storage,
  blacklist: ["filter"],
};
const store = configureStore({
  reducer: persistReducer(contactsPersistConfig, itemsReducer),
});
export const persistor = persistStore(store);
export default store;
