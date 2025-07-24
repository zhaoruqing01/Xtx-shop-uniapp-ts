import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import Components from 'unplugin-vue-components/vite'
import { resolve } from 'path'

// 自定义组件解析器
const CustomResolver = (componentName: string) => {
  // 处理UniApp项目中的自定义组件
  // 假设组件放在src/components目录下
  if (componentName.startsWith('Uni') || componentName.startsWith('Xtx')) {
    return {
      name: componentName,
      from: resolve(__dirname, './src/components'),
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    // 开发阶段启用源码映射
    sourcemap: process.env.NODE_ENV === 'development',
  },
  plugins: [
    uni(),
    Components({
      // 开启TypeScript支持
      dts: 'src/components.d.ts',
      // 配置需要扫描的组件目录
      dirs: ['src/components', 'src/pages/components'],
      // 自定义解析器
      resolvers: [CustomResolver],
      // 配置组件的扩展
      extensions: ['vue'],
      // 配置全局组件的模式
      globs: ['src/components/**/*.vue', 'src/pages/**/components/**/*.vue'],
      // 允许子目录作为组件名的一部分
      directoryAsNamespace: true,
      // 忽略一些不需要自动导入的组件
      exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],
    }),
  ],
})
