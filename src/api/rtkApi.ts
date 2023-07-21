import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fakestoreapi.com',
    prepareHeaders: headers => {
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  endpoints: () => ({}),
  reducerPath: 'api',
  tagTypes: ['Products'],
});
