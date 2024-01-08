import axios from "axios";
import { getLocalStore } from "../utils/local";

const dataUser = getLocalStore("user_info");
export const https = axios.create({
  // baseURL là đoạn đầu url sử dụng chung của tất cả các request
  baseURL: "https://movienew.cybersoft.edu.vn",
  //   timeout sẽ giúp ngưng gọi dữ liệu khi quá thời gian
  timeout: 15000,
  headers: {
    Authorization: `Bearer ${dataUser ? dataUser.accessToken : dataUser}`,
    TokenCybersoft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAwOSIsIkhldEhhblN0cmluZyI6IjE4LzA1LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxNTk5MDQwMDAwMCIsIm5iZiI6MTY5MjI5MTYwMCwiZXhwIjoxNzE2MTM4MDAwfQ.qCglC_oyHM79HVc5mRXJfocVkww4VUpWO7ug7MWtJoY",
  },
});
