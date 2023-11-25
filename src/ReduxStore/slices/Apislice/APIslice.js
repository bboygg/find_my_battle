import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define our single API slice object
export const apiSlice = createApi({
	// The cache reducer expects to be added at `state.api` (already default - this is optional)
	reducerPath: "api",

	// All of our requests will have URLs starting with '/'
	baseQuery: fetchBaseQuery({ baseUrl: "/" }),

	// automatic refreshing with cache invalidation
	tagTypes: [
		"Post",
		"ALLPOSTS",
		"User",
		"Comment",
		"Categories",
		"Tag",
		"AllComment",
	],

	// The "endpoints" represent operations and requests for this server
	endpoints: (builder) => ({}),
});
