import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; 
import taskReducer from "./taskSlice";

const persistConfig = {
  key: "root",
  storage, 
};

const persistedReducer = persistReducer(persistConfig, taskReducer);

const store = configureStore({
  reducer: persistedReducer, 
});

const persistor = persistStore(store);

export { store, persistor };
