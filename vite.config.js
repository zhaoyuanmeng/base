import { defineConfig } from 'vite'
import { join,resolve} from "path";
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
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
  server: {
    base: './',
    proxy: {
      '^/api': {
        // target: 'http://video.zpkang.top:8080/', //老蒋的地址
        target: 'http://127.0.0.1:4523/mock/930299/', //api/fox地址
        changeOrigin: true, //开启代理
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
