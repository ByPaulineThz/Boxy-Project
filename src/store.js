import { configureStore } from "@reduxjs/toolkit";
import shadow from "./features/shadows";
import boxProperties from "./features/boxProperties";
import backgroundColor from "./features/backgroundColor";

export const store = configureStore({
  reducer: {
    shadow,
    boxProperties,
    backgroundColor,
  },
});
