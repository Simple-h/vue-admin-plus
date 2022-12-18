import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// vite.config.ts
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/style/main.scss";'
      }
    }
  },
  resolve: {
    // ↓路径别名，主要是这部分
    alias: {
      "@": path.resolve("./src"), // @代替src
    }
  }
})
