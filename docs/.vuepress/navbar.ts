/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export const zhNavbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  { text: '教程', link: '/chapter0/' },
  // {
  //   text: '项目实战',
  //   items: [
  //     { text: '项目实战一（基础篇）', link: '/chapter8/1.env_architecture' },
  //     { text: '项目实战一优化（选修篇）', link: '/chapter9/1.graph_rag_architecture' }
  //   ]
  // },
])

export const enNavbar = defineNavbarConfig([
  { text: 'Home', link: '/en/' },
  { text: 'Tutorial', link: '/en/chapter0/' },
])

