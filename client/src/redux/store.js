import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";


// create a combined reducer

const rootReducer = combineReducers({
  user: userReducer,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

// persist reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    persistedReducer,
  },
  middleware: (buildGetDefaultMiddleware) =>
    buildGetDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store)
