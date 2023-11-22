<template>
  <button @click="pcLogin">登录</button>
  <a-input v-model:value="value" placeholder="antdv组件测试" />
  <a-radio-group v-model:value="value1" @change="chang">
    <a-radio-button value="a">Hangzhou</a-radio-button>
    <a-radio-button value="b">Shanghai</a-radio-button>
    <a-radio-button value="c">Beijing</a-radio-button>
    <a-radio-button value="d">Chengdu</a-radio-button>
  </a-radio-group>
</template>
<script setup lang="ts">
import { PcLogin } from "../api/lm";
import useUserStore from "../store/modules/user";
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
const userStore = useUserStore();
const value = ref("");
const value1 = ref("a");
const chang = (val: any) => {
  console.log(val);
};
// const pcLogin = async () => {
//   let param = {
//     userName: "admin",
//     password: "123456",
//   };
//   let res = await PcLogin(param);
//   userStore.setToken(res.data.token);
//   let userInfo = {
//     name: res.data.name,
//     loginTime: res.data.loginTime,
//   };
//   userStore.setUserInfo(userInfo);
//   console.log(userStore.getUserInfo, "用户信息");
//   console.log(res, "登录");
//   router.push({
//     path: "/about",
//   })
// };
// console.log(import.meta.env.MODE, "{string} 应用运行的模式");
// console.log(
//   import.meta.env.BASE_URL,
//   "{string} 部署应用时的基本 URL。他由base 配置项决定"
// );
// console.log(import.meta.env.PROD, "{boolean} 应用是否运行在生产环境");
// console.log(
//   import.meta.env.DEV,
//   "{boolean} 应用是否运行在开发环境 (永远与 import.meta.env.PROD相反)"
// );
// console.log(import.meta.env.SSR, "{boolean} 应用是否运行在 server 上");
console.log(import.meta.env.VITE_API_URL, "请求地址");
</script>
<style scoped>
.read-the-docs {
  color: #888;
}
</style>
