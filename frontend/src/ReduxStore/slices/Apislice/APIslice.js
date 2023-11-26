import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define our single API slice object
export const apiSlice = createApi({
	// The cache reducer expects to be added at `state.api` (already default - this is optional)
	reducerPath: "api",

	// All of our requests will have URLs starting with '/'
<<<<<<< HEAD
	baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/" }),
=======
	baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000" }),
>>>>>>> 59afcf12d1978d93b8d5f34091dfb702f626a894

	// automatic refreshing with cache invalidation
	tagTypes: ["Event"],

	// The "endpoints" represent operations and requests for this server
	endpoints: (builder) => ({}),
});
