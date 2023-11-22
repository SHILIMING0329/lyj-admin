import axios from "../utils/http/axios";
import proxyApi from "./proxyApi";
enum Api {
  login = "ucac/pcLogin",
}
export const PcLogin = (data: any) => {
  return axios({
    url: proxyApi.api1 + Api.login,
    method: "post",
    data,
  });
};
