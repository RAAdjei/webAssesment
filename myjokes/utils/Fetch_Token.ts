// utils/fetchWithToken.js
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { env } from 'next-runtime-env';

const fetchWithToken = async (args: any, api: any, extraOptions: any) => {

const token =  "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWt1YSBua3J1bWFoIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZW1haWxhZGRyZXNzIjoiam9obkBnbWFpbC5jb20iLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiIzIiwiZXhwIjoxNzE5Mzk3NzAzfQ.7gaDPKIb3QiAKDirNnLuoE1OgR0L6Ri92t6vlp8vGfgAcqbI3a5mF32YZqWb6Ct_16CjQYeiHNz5TPEWFcdmFg"

  let headers: any = {};
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  return fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
    prepareHeaders: (headers) => {
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  })(args, api, extraOptions);
};

export default fetchWithToken;
