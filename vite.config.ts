import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import legacy from "@vitejs/plugin-legacy";
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
// https://vitejs.dev/config/
export default defineConfig(({ mode, command, ssrBuild }) => {
  const root = process.cwd(); // 获得当前项目路径
  const env = loadEnv(mode, root); // 得到的就是当前环境的env对象。
  console.log(env);
  return {
    plugins: [
      vue(),
      legacy({
        targets: ["defaults", "not IE 11"],
      }),
      Components({ // 自动按需引入antdv组件
        resolvers: [
          AntDesignVueResolver({
            importStyle: false, // css in js
          }),
        ],
      }),
    ],
    server: {
      proxy: {
        '/api': {
          target: env.VITE_API_URL,
          changeOrigin: true,
          ws: true,
          rewrite: (path) => path.replace(new RegExp(`^/api`), ''),
          // only https
          // secure: false
        },
      },
    },
  };

});
