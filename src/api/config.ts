import axiosBase from "axios";

// APIのURL
export const apiBaseUrl =
  process.env.NEXT_PUBLIC_API_BASEURL || "http://localhost:3000/api";

// axiosの基本設定
export const axios = axiosBase.create({
  baseURL: apiBaseUrl,
  headers: { "Content-Type": "application/json" },
  responseType: "json",
});
