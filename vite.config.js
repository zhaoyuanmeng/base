import { defineConfig } from 'vite'
import { join,resolve } from "path";
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    port:8090, //vite项目启动时自定义端口
    // hmr:true, //开启热更新
    host:'0.0.0.0' //设置监听network的
  },
  plugins: [vue()],
  resolve: {
    // 配置路径的
    alias: {
      '@': join(__dirname, "src"),
    }
  },
  // 打包用的
  build:{
    assetsDir:"static",
    rollupOptions:{
      input:{
        index:resolve(__dirname,"index.html"),
        project:resolve(__dirname,"project.html")
      },
      output:{
        chunkFileNames:'static/js/[name]-[hash].js',
        entryFileNames:"static/js/[name]-[hash].js",
        assetFileNames:"static/[ext]/name-[hash].[ext]"
      }
    },
  },
})
