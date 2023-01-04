import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const babiesAPI = createApi({
  reducerPath: 'babiesAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  endpoints: (build) => ({
    getBaby: build.query({
      query: (id) => ({
        url: `babies/${id}`,
      }),
    }),
    getAllBabies: build.query({
      query: () => ({
        url: `babies`,
      }),
    }),
    // getAllConfirmedBabies: build.query({
    //   query: () => ({
    //     url: `babies-confirmed`,
    //   }),
    // }),
    addBaby: build.mutation({
      query: (body) => ({
        url: 'babies',
        method: 'POST',
        body: body,
      }),
    }),
  }),
});

export const {
  useGetBabyQuery,
  useGetAllBabiesQuery,
  useGetAllConfirmedBabiesQuery,
  useAddBabyMutation,
} = babiesAPI;
