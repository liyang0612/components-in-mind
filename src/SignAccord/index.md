# SignAccord

### 默认使用

```jsx
import { SignAccord } from 'component-in-mind';

export default () => {
  const [mockData, setMockData] = React.useState([
    { id: '1', name: '协议1', status: 'WAITSIGN' },
    { id: '2', name: '协议2', status: 'WAITSIGN' },
    { id: '3', name: '协议3', status: 'WAITSIGN' },
    { id: '4', name: '协议4', status: 'WAITSIGN' },
    { id: '5', name: '协议5', status: 'WAITSIGN' },
  ]);

  const requestAccordList = async () => {
    const fn = () =>
      new Promise(function (resolve) {
        setTimeout(() => {
          resolve();
        }, 2000);
      });
    await fn();
    return mockData;
  };

  const requestAccordImg = async () => {
    const fn = () =>
      new Promise(function (resolve) {
        setTimeout(() => {
          resolve();
        }, 2000);
      });
    await fn();
    return 'https://txt25.book118.com/2018/0601/book170020/170019265.png';
  };

  const requestSign = async (accordParams) => {
    console.log('协议相关数据: ', accordParams);
    const fn = () =>
      new Promise(function (resolve) {
        setTimeout(() => {
          resolve();
          const newData = [];
          mockData.forEach((item) => {
            if (item.id === accordParams.id) {
              newData.push({ ...item, status: 'SIGNED' });
            } else {
              newData.push(item);
            }
          });
          setMockData(newData);
        }, 2000);
      });
    await fn();
    console.log(mockData);
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
