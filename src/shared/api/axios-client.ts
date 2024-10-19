import axios from "axios";

export const aladinClient = axios.create({
  params: {
    ttbkey: process.env.ALADIN_API_KEY,
    Output: "JS",
    Cover: "Big",
    Version: 20131101,
  },
});
