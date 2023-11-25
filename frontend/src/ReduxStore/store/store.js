import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../slices/Apislice/APIslice";

const store = configureStore({
	reducer: {
		[apiSlice.reducerPath]: apiSlice.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(apiSlice.middleware),

	devTools: process.env.NODE_ENV !== "production",
});

export default store;
