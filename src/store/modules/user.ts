import { defineStore } from "pinia";

interface userState {
  token?: string | "";
  userInfo?: object | null;
}
/**
 * 函数
 * @param state 存贮的信息
 */
const useUserStore = defineStore("user", {
  state: (): userState => ({
    token: "",
    userInfo: null,
  }),
  getters: {
    getUserInfo(state) {
      return state.userInfo;
    },
    getToken(state) {
      return state.token;
    },
  },
  actions: {
    setUserInfo(state: any) {
      this.userInfo = state;
    },
    setToken(state: any) {
      this.token = state;
    },
  },
});
export default useUserStore