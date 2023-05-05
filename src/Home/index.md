# 关于组件

项目中的组件级别大概可分为原子组件、分子组件、区块 和 模板

- 原子组件为不可以再分或者没必要再分割的组件
- 分子组件为基于原子组件扩展的相对复杂且应用场景相对小些的组件（本示例则是属于分子组件）
- 区块则是页面当中通用性较高的一部分区域
- 模板很好理解，就是直接对可复用页面的封装

### Crud 组件

功能：实现一个前端的表单和列表的增删查改，操作期间不和后端交互
场景：相对复杂的表单，在用户保存前，数据库不会插入任何数据。

### SignAccord 组件

功能：支持多协议签署的组件
场景：电子签章功能

将异步模块完全通过 api 暴露在外部，可以根据具体业务场景，使用不同的接口以及业务字段