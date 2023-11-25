import { apiSlice } from "../Apislice/APIslice";

export const extendedPostsApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getPosts: builder.query({
			query: () => "posts",
			providesTags: (result = [], error, arg) => [
				"Post",
				...result.map(({ id }) => ({ type: "Post", id })),
				"ALLPOSTS",
			],
		}),
	}),
});
