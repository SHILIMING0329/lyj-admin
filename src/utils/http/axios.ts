import useUserStore from "../../store/modules/user";
setTimeout(() => {}, 500);

import axios from "axios";

//1. 创建axios对象
const service = axios.create({
  // baseURL: "127.0.0.1:8080/api", //设置服务器地址
  timeout: 60 * 1000, // 超时设置
  withCredentials: true, // 检查跨站点访问控制
  changeOrigin: true, //允许跨域
});

//2. 请求拦截器
service.interceptors.request.use(
  (config) => {
    const userStore = useUserStore();
    const token = userStore.getToken || localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

//3. 响应拦截器
service.interceptors.response.use(
  (response) => {
    //判断code码
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default service;
