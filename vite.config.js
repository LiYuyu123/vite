import { defineConfig, loadEnv } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
//获取环境变量
const getTarget = (mode, target) => {
  return loadEnv(mode, process.cwd())[target]
}
const port = 8080
//代理地址
const targetPath = 'https://ibos-demo.hekr.me/prod-api'

// https://vitejs.dev/config/
export default ({ mode }) =>
  defineConfig({
    // 例如 https://www.baidu.com/。如果应用被部署在一个子路径上，你就需要用这个选项指定这个子路径
    // 如果你的应用被部署在 https://www.baidu.com/lzj/，则设置 VITE_APP_PUBLIC_PATH 为 /lzj/
    base: getTarget(mode, 'VITE_APP_PUBLIC_PATH') || './',
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      createHtmlPlugin({
        inject: {
          data: {
            //获取标题变量
            title: getTarget(mode, 'VITE_APP_TITLE') || '',
          },
        },
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'), // 为./src配置别名
      },
    },
    server: {
      host: '0.0.0.0',
      port: port,
      //项目启动时自动打开浏览器
      open: false,
      https: false,
      proxy: {
        // 配置需要代理的路径 --> 这里的意思是代理http://localhost:80/dev-api/后的所有路由
        [getTarget(mode, 'VITE_APP_BASE_API')]: {
          // 目标地址 --> 服务器地址
          target: targetPath,
          // 允许跨域
          changeOrigin: true,
          // 允许websocket代理
          ws: true,
          // 重写路径 --> 作用与vue配置pathRewrite作用相同
          rewrite: (path) =>
            path.replace(
              new RegExp('^' + [getTarget(mode, 'VITE_APP_BASE_API')]),
              ''
            ),
        },
      },
      hmr: true, //开启热更新
    },
    build: {
        //在npm run build 或 yarn build 时 ，生成文件的目录名称（要和baseUrl的生产环境路径一致）（默认dist）
        outDir: 'dist',
        //静态资源服务的文件夹
        assetsDir: 'static',
        rollupOptions: {
            //把静态资源打包到指定目录
            output: {
                chunkFileNames: 'static/js/[name]-[hash].js',
                entryFileNames: 'static/js/[name]-[hash].js',
                assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
            }
        }
    }
  })
