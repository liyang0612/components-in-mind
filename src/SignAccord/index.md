# SignAccord

### 默认使用

```jsx
import { SignAccord } from 'components-in-mind';

export default () => {
  let mockData = [
    { id: '1', name: '协议1', status: 'WAITSIGN' },
    { id: '2', name: '协议2', status: 'WAITSIGN' },
    { id: '3', name: '协议3', status: 'WAITSIGN' },
    { id: '4', name: '协议4', status: 'WAITSIGN' },
    { id: '5', name: '协议5', status: 'WAITSIGN' },
  ];

  const createRequestMock = (updateDataFn) => {
    const fn = () =>
      new Promise(function (resolve) {
        updateDataFn && updateDataFn();
        setTimeout(() => {
          resolve();
        }, 500);
      });
    return fn;
  };

  const requestAccordList = async () => {
    await createRequestMock()();
    return mockData;
  };

  const requestAccordImg = async () => {
    await createRequestMock()();
    return 'https://txt25.book118.com/2018/0601/book170020/170019265.png';
  };

  const requestSign = async (accordParams) => {
    console.log('协议相关数据: ', accordParams);
    await createRequestMock(() => {
      const newData = [];
      mockData.forEach((item) => {
        if (item.id === accordParams.id) {
          newData.push({ ...item, status: 'SIGNED' });
        } else {
          newData.push(item);
        }
      });
      mockData = JSON.parse(JSON.stringify(newData));
    })();
    return true;
  };

  return (
    <SignAccord
      requestAccordList={requestAccordList}
      requestAccordImg={requestAccordImg}
      requestSign={requestSign}
    />
  );
};
```

### API

| Name              | Description      | Type                                                                      | Default          |
| ----------------- | ---------------- | ------------------------------------------------------------------------- | ---------------- |
| requestAccordList | 获取协议列表     | () => Promise&lt;AccordListType[]&gt;                                     |                  |
| requestAccordImg  | 获取协议内容图片 | (accord: AccordListType) => Promise&lt;字符串类型&gt;                     |
| requestSign       | 签署协议         | (accord: AccordListType) => Promise&lt;void &Iota; true &Iota; false&gt;; |
| btnProps          | 点击按钮属性     | 同 antd Button 属性                                                       | { type: 'link' } |
| btnText           | 按钮文字         | string                                                                    | 签署             |
| modalTitle        | 弹窗的 title     | string                                                                    | 签署协议         |

#### AccordListType

```
interface AccordListType {
  /** 协议的业务id，可用来签署和预览内容 */
  id: string;
  name: string;
  /** 用于表示协议是否已签署 */
  status: AccordSignStatus;
}
```
