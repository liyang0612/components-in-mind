# PreviewImage 组件

### 默认使用(同步)

```jsx
import { PreviewImage } from 'components-in-mind';

export default () => (
  <PreviewImage url="https://nwzimg.wezhan.cn/contents/sitefiles2061/10308347/images/40769792.png" />
);
```

### 异步使用

```jsx
import { PreviewImage } from 'components-in-mind';

export default () => {
  const mockFetch = () =>
    new Promise(function (resolve) {
      setTimeout(() => {
        resolve({
          code: '200',
          data: 'https://nwzimg.wezhan.cn/contents/sitefiles2061/10308347/images/40769792.png',
        });
      }, 1000);
    });

  const request = async () => {
    const res = await mockFetch();
    return res.data;
  };

  return <PreviewImage request={request} />;
};
```

### API

| Name    | Description            | Type                  | Default  |
| ------- | ---------------------- | --------------------- | -------- |
| title   | 弹窗标题               | string 和 ReactNode   | 图片预览 |
| url     | 图片地址               | string                |
| request | 获取图片地址的异步请求 | () => Promise(string) | () => '' |
