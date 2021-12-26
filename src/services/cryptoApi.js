import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';




const cryptoApiHeaders = {
  'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
  'x-rapidapi-host': process.env.REACT_APP_CRYPTO_RAPIDAPI_HOST,
};


//const baseUrl = 'https://coinranking1.p.rapidapi.com'; <== do not use this
const baseUrl = process.env.REACT_APP_CRYPTO_API_URL;

const createRequest = (url) => ({url, headers: cryptoApiHeaders})

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

/*
const cryptoApiHeaders = {
  headers: {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'b827c25191msh9a002d7ef599089p1b25bfjsn9da9bd4237c7' ||| 57c70944e9mshceb81b6f7fcf433p1beddbjsnf4a64a893c0a
  }
}

const baseUrl = 'https://coinranking1.p.rapidapi.com/coins';

const createRequest = (url) => ({url, headers: cryptoApiHeaders})

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

////////////////////////
////////////////////////
////////////////////////


var axios = require("axios").default;
'x-rapidapi-key': 'b827c25191msh9a002d7ef599089p1b25bfjsn9da9bd4237c7'
var options = {
  method: 'GET',
  url: 'https://coinranking1.p.rapidapi.com/coins',
  headers: {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'b827c25191msh9a002d7ef599089p1b25bfjsn9da9bd4237c7'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});


////////////////////////
////////////////////////
////////////////////////

/*
const runQuery = () => {
  var axios = require("axios").default;

  var options = {
  method: 'GET',
  url: 'https://coinranking1.p.rapidapi.com/coins',
  headers: {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'b827c25191msh9a002d7ef599089p1b25bfjsn9da9bd4237c7'
  }
};

  axios.request(options).then(function (response) {
  	console.log(response.data);
  }).catch(function (error) {
  	console.error(error);
  });
}

export default runQuery;*/
/*
const cryptoApiHeaders = {
  headers: {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '57c70944e9mshceb81b6f7fcf433p1beddbjsnf4a64a893c0a' <=== this is the other guy's key 
  }
}*/
