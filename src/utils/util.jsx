import axios from "axios";
export const BASE_URL1 = ``;

export const TOKEN = localStorage.getItem("Token");

export const API = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("Token")}`,
    "Content-type": "application/json;charset=utf-8",
  },
});

export const Auth = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-type": "application/json;charset=utf-8",
  },
});

export const APIImage = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("Token")}`,
    "Content-Type": "multipart/form-data",
  },
});
