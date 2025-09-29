/**
 * @see https://theme-plume.vuejs.press/guide/document/ 查看文档了解配置详情。
 *
 * Notes 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 *
 * 请注意，你应该先在这里配置好 Notes，然后再启动 vuepress，主题会在启动 vuepress 时，
 * 读取这里配置的 Notes，然后在与 Note 相关的 Markdown 文件中，自动生成 permalink。
 *
 * 如果你发现 侧边栏没有显示，那么请检查你的配置是否正确，以及 Markdown 文件中的 permalink
 * 是否是以对应的 note 配置的 link 的前缀开头。 是否展示侧边栏是根据 页面链接 的前缀 与 `note.link`
 * 的前缀是否匹配来决定。
 */

/**
 * 在受支持的 IDE 中会智能提示配置项。
 *
 * - `defineNoteConfig` 是用于定义单个 note 配置的帮助函数
 * - `defineNotesConfig` 是用于定义 notes 集合的帮助函数
 *
 * 通过 `defineNoteConfig` 定义的 note 配置，应该填入 `defineNotesConfig` 的 notes 数组中
 */
import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

/* =================== locale: zh-CN ======================= */

const zhDemoNote = defineNoteConfig({
  dir: '/',
  // `dir` 所指向的目录中的所有 markdown 文件，其 permalink 需要以 `link` 配置作为前缀
  // 如果 前缀不一致，则无法生成侧边栏。
  // 所以请确保  markdown 文件的 permalink 都以 `link` 开头
  link: '/',
  // 手动配置侧边栏结构
  // sidebar: ['', 'foo', 'bar'],
  // 根据文件结构自动生成侧边栏
  sidebar: [
    {
      text: '第一章 解锁RAG',
      prefix: 'chapter1',
      collapsed: true,
      items: 'auto'
    },
    {
      text: '第二章 数据准备',
      prefix: 'chapter2',
      collapsed: true,
      items: 'auto'
    },
    {
      text: '第三章 索引构建',
      prefix: 'chapter3',
      collapsed: true,
      items: 'auto'
    },
    {
      text: '第四章 检索优化',
      prefix: 'chapter4',
      collapsed: true,
      items: 'auto'
    },
    {
      text: '第五章 生成集成',
      prefix: 'chapter5',
      collapsed: true,
      items: 'auto'
    },
    {
      text: '第六章 RAG系统评估',
      prefix: 'chapter6',
      collapsed: true,
      items: 'auto'
    },
    {
      text: '第七章 高级RAG架构（拓展选修篇）',
      prefix: 'chapter7',
      collapsed: true,
      items: 'auto'
    },
    {
      text: '第八章 项目实战一（基础篇）',
      prefix: 'chapter8',
      collapsed: true,
      items: 'auto'
    },
    {
      text: '第九章 项目实战一优化（选修篇）',
      prefix: 'chapter9',
      collapsed: true,
      items: 'auto'
    },
    {
      text: '第十一章 Neo4J 简单应用',
      prefix: 'chapter11',
      collapsed: true,
      items: 'auto'
    }]

})

/**
 * 导出所有的 note
 * 每一个 note 都应该填入到 `notes.notes` 数组中
 * （zhDemoNote 为参考示例，如果不需要它，请删除）
 */
export const zhNotes = defineNotesConfig({
  dir: '/',
  link: '/',
  notes: [zhDemoNote],
})

/* =================== locale: en-US ======================= */

const enDemoNote = defineNoteConfig({
  dir: '/',
  // `dir` 所指向的目录中的所有 markdown 文件，其 permalink 需要以 `link` 配置作为前缀
  // 如果 前缀不一致，则无法生成侧边栏。
  // 所以请确保  markdown 文件的 permalink 都以 `link` 开头
  link: '/',
  // 手动配置侧边栏结构
  // sidebar: ['', 'foo', 'bar'],
  // 根据文件结构自动生成侧边栏
  sidebar: [
    {
      text: 'Chapter 1: Unlocking RAG',
      prefix: 'chapter1',
      collapsed: true,
      items: 'auto'
    }]
})

/**
 * 导出所有的 note
 * 每一个 note 都应该填入到 `notes.notes` 数组中
 * （enDemoNote 为参考示例，如果不需要它，请删除）
 */
export const enNotes = defineNotesConfig({
  dir: '/en/',
  link: '/en/',
  notes: [enDemoNote],
})

