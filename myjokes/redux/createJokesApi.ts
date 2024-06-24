import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const createJokesApi = createApi({
  reducerPath: "editPostApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://v2.jokeapi.dev/joke/" }),
  endpoints: (builder) => ({
    getPostsById: builder.query<any, void >({
      query: () => ({
        url : `Any`,
        method: "GET"
      }

      )
    }),

  }),
});

export const { useGetPostsByIdQuery } = createJokesApi;
