import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', 'f68de90bc2msh0afc2ba5c8e7022p11c4fejsn457033c3b522');
      return headers;
    }, 
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/charts/world' })
  })
})

export const { useGetTopChartsQuery } = shazamCoreApi;