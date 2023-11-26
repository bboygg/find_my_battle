import { apiSlice } from "../Apislice/APIslice";

export const extendedEventsApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getEvent: builder.query({
			query: () => "events",
			providesTags: (result = [], error, arg) => [
				"Event",
				...result.map(({ id }) => ({ type: "Event", id })),
			],
		}),

		getEventById: builder.query({
			query: (eventId) => `events/${eventId}/`,
			providesTags: (result, error, arg) => [{ type: "Event", id: arg }],
		}),
	}),
});

export const { useGetEventQuery, useGetEventByIdQuery } =
	extendedEventsApiSlice;
