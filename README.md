# 面包屑组件

`BreadcrumbNav`面包屑导航，`BreadcrumbNav.Item` 是面包屑，`BreadcrumbNav.Separator` 面包屑分隔组件。

> BreadcrumbNav.Item、BreadcrumbNav.Separator 必须是 BreadcrumbNav 的子组件。

## 基本使用

```jsx
<BreadcrumbNav>
  <BreadcrumbNav.Item
    navTo={{
      path: 'https://cn.vuejs.org',
      params: { name: 'jack', age: 25 },
    }}
  >
    vue
  </BreadcrumbNav.Item>
  <BreadcrumbNav.Separator>{'>>'}</BreadcrumbNav.Separator>
  <BreadcrumbNav.Item navTo={'https://angular.cn'}>angular</BreadcrumbNav.Item>
</BreadcrumbNav>
```

## 设置最大显示格式和尺寸

```jsx
<BreadcrumbNav showMaxItemCount={4} size='small'>
  <BreadcrumbNav.Item
    navTo={{
      path: 'https://cn.vuejs.org',
      params: { name: 'jack', age: 25 },
    }}
  >
    vue
  </BreadcrumbNav.Item>
  <BreadcrumbNav.Separator>{'>>'}</BreadcrumbNav.Separator>
  <BreadcrumbNav.Item navTo={'https://angular.cn'}>angular</BreadcrumbNav.Item>
</BreadcrumbNav>
```

## props

| prop | 说明 | 类型 | 是否必需 | 默认值 | 其他 |
| :-: | :-: | :-: | :-: | :-: | :-: |
| showMaxItemCount | 最多的面包屑个数 | number | 否 |  | 整数，最小为 2 最大不得超过面包屑个数 |
| size | 面包屑尺寸 | string | 否 | 'medium' | 只能是三个取值，small,medium,large |
