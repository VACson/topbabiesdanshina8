import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const babiesAPI = createApi({
    reducerPath: 'babiesAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://babiesbackend.azurewebsites.net/api/v1' }),
    endpoints: (build) => ({
        getBaby: build.query({
            query: ( id ) => ({
                url: `babies/${id}`
            }),
        }),
        getAllBabies: build.query({
            query: ( id ) => ({
                url: `babies/`
            }),
        }),
        getAllConfirmedBabies: build.query({
            query: ( id ) => ({
                url: `babies-confirmed/`
            }),
        }),
        addBaby: build.mutation({
            query: ({body}) => ({
                url: 'baby/',
                method: 'post',
                body: body,
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            }),
        })
    })
})

export const { useGetBabyQuery, useGetAllBabiesQuery, useGetAllConfirmedBabiesQuery, useAddBabyMutation } = babiesAPI;
