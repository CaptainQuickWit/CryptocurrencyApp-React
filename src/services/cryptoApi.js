import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
  'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
  'x-rapidapi-host': process.env.REACT_APP_CRYPTO_RAPIDAPI_HOST,
};

const baseUrl = process.env.REACT_APP_CRYPTO_API_URL;
const createRequest = (url) => ({url, headers: cryptoApiHeaders});

/*
const storedData = JSON.parse(localStorage.getItem("data"));
  if (storedData !== null) {
    //logic here
  }
*/
export const cryptoApi = createApi({
  
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl}),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      
      query: ( ) => createRequest('/coins')
    })
  })
});

export const {
  useGetCryptosQuery,
} = cryptoApi; 