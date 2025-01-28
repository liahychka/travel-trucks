import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { campersReducer } from "./campers/slice";

// Конфіг для campersReducer
const campersPersistConfig = {
  key: "campers",
  storage,
  whitelist: ["items"], // Зберігаємо лише список кемперів
};

// Налаштування store
export const store = configureStore({
  reducer: {
    campers: persistReducer(campersPersistConfig, campersReducer), // Зберігаємо campers
    // filters: filterReducer, // Додати, якщо потрібно
    // auth: persistReducer(authPersistConfig, authSlice), // Адаптувати для авторизації
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Ініціалізація persistor
export const persistor = persistStore(store);
