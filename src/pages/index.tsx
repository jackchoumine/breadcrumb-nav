// @ts-nocheck
/*
 * @Description :
 * @Date        : 2021-09-27
 * @Author      : JackChou
 * @LastEditTime: 2021-09-27 04:05:34 +0800
 * @LastEditors : JackChou
 */
import BreadcrumbDemoOne, { BreadcrumbDemoTwo } from '../components/Nav/Example'

export default function IndexPage() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h3>默认情况</h3>
      <BreadcrumbDemoOne />
      <h3>设置尺寸，和最多显示个数</h3>
      <BreadcrumbDemoTwo />
    </div>
  )
}
