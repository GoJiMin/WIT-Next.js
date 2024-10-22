import axios from "axios";

export const aladinClient = axios.create({
  baseURL: "http://www.aladin.co.kr/ttb/api",
  params: {
    ttbkey: process.env.ALADIN_API_KEY,
    Output: "JS",
    Cover: "Big",
    Version: 20131101,
  },
});

export const data4LibraryClient = axios.create({
  baseURL: "http://data4library.kr/api",
  params: {
    authKey: process.env.LIBRARY_BIG_DATA_API_KEY,
    pageSize: 20,
    format: "json",
  },
});
