import { defineConfig } from 'umi'

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // layout: {},
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
  // proxy: {
  //   '^api': {
  //     target: 'http://public-api-v1.aspirantzhang.com',
  //     changeOrigin: true,
  //     pathName: { '^api': '' },
  //   },
  // },
})
