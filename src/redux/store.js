import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import memberReducer from "./memberReducer";
import authReducer from "./authReducer";

export const store = configureStore({
  reducer: {
    member: memberReducer,
    auth: authReducer,
  },
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
});
