# Xtx-shop-uniapp-ts
## 项目介绍

Xtx-shop-uniapp-ts 是一个基于 uni-app 和 TypeScript 开发的跨平台电商类应用项目，旨在利用 uni-app 的跨平台能力，同时结合 TypeScript 的类型安全特性，构建高效、可维护的电商解决方案。项目集成了多种 uni 生态组件和工具，支持多端部署（如 H5、微信小程序、支付宝小程序等）。

## 技术栈

| 技术 / 工具                 | 版本                         | 说明               |
| --------------------------- | ---------------------------- | ------------------ |
| uni-app                     | 3.0.0-alpha-3081220230802001 | 跨平台应用开发框架 |
| Vue                         | ^3.2.47                      | 前端视图框架       |
| TypeScript                  | ^5.1.6                       | 强类型编程语言     |
| Pinia                       | 2.0.27                       | 状态管理库         |
| pinia-plugin-persistedstate | ^3.2.0                       | Pinia 持久化插件   |
| vue-i18n                    | ^9.2.2                       | 国际化解决方案     |
| @dcloudio/uni-ui            | ^1.5.10                      | uni 生态 UI 组件库 |
| ESLint                      | ^8.22.0                      | 代码规范检查       |
| Husky                       | ^8.0.0                       | Git 钩子工具       |
| lint-staged                 | ^13.0.3                      | 暂存区代码检查     |
| Vite                        | ^4.4.9                       | 构建工具           |



## 快速开始

### 环境要求

- Node.js: 建议 v14+（需支持 ES6+ 特性）
- 包管理器: pnpm（项目依赖管理使用 pnpm）
- HBuilderX: ^3.1.0（部分 uni 模块对 HBuilderX 版本有要求）

### 开发工具

 - HBuilderX: ^3.1.0
 - VsCode:^1.102.2
 - 微信开发者工具:^1.06

### 安装依赖

克隆项目后，执行以下命令安装依赖：


```
pnpm install
```

### 开发环境启动

根据目标平台启动开发服务器，示例如下：

- H5 端：

  ```
  uni dev -p h5
  ```

- 微信小程序端：

  ```
  uni dev -p mp-weixin
  ```

- 支付宝小程序端：

  ```
  uni dev -p mp-alipay
  ```

其他平台可参考 `package.json` 中的 `build` 命令格式，将 `build` 替换为 `dev` 即可。

### 构建生产版本

针对不同平台构建生产包，示例如下：

- H5 端：

  ```
  uni build -p h5
  ```

- 微信小程序端：

  ```
  uni build -p mp-weixin
  ```

更多平台构建命令可查看 `package.json` 的 `scripts` 部分。

## 项目结构

plaintext

```
Xtx-shop-uniapp-ts/
├── src/
│   ├── uni_modules/          # uni 生态模块（uni-scss、uni-popup 等）
│   │   ├── uni-scss/         # 全局样式工具
│   │   ├── uni-popup/        # 弹窗组件
│   │   └── uni-transition/   # 过渡动画组件
│   ├── pages/                # 页面目录
│   ├── components/           # 自定义组件
|   ├── composables/		  # 通用方法
│   ├── store/                # Pinia 状态管理
│   ├── locale/               # 国际化配置（vue-i18n）
│   ├── styles/               # 全局样式
│   └── main.ts               # 入口文件
├── package.json              # 项目配置及依赖
├── pnpm-lock.yaml            # pnpm 依赖锁文件
├── .eslintrc.js              # ESLint 配置
└── README.md                 # 项目说明文档
```

## 核心特性

1. **跨平台支持**
   基于 uni-app 框架，可同时部署到 H5、微信 / 支付宝 / 百度等多端小程序及 App，减少多端开发成本。
2. **类型安全**
   采用 TypeScript 开发，提供类型校验和 IDE 智能提示，减少运行时错误，提升代码可维护性。
3. **状态管理**
   使用 Pinia 进行状态管理，并通过 `pinia-plugin-persistedstate` 实现状态持久化，适配多端存储特性。
4. **国际化**
   集成 `vue-i18n`，支持多语言切换，满足国际化业务需求。
5. **UI 与样式**
   - 基于 `@dcloudio/uni-ui` 组件库，提供丰富的预设组件。
   - 通过 `uni-scss` 提供的全局样式变量和辅助类，快速实现统一的页面布局（颜色、边距、圆角等）。
6. **代码规范**
   集成 ESLint、Husky 和 lint-staged，确保代码风格一致，减少团队协作冲突。

## 注意事项

1. 依赖安装必须使用 pnpm，以确保依赖版本与 `pnpm-lock.yaml` 一致。
2. 开发微信小程序等平台时，需提前安装对应平台的开发者工具，并在 HBuilderX 中配置工具路径。
3. 提交代码前会自动执行 ESLint 检查，需修复所有报错才能提交（通过 Husky 和 lint-staged 实现）。
4. 部分 uni 模块（如 uni-scss）对 HBuilderX 版本有要求（^3.1.0），建议使用指定版本以避免兼容性问题。
