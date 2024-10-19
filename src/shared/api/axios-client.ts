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
