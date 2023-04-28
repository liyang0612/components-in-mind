import { useEffect, useRef, useState } from 'react';

export type DataItemType<T> = T & { key: string };

function useDataBase<ItemType>(defaultData?: ItemType[]) {
  const keyRef = useRef(0);
  const [data, setData] = useState<DataItemType<ItemType>[]>([]);

  /** 为数据添加key作为唯一标识 */
  const initData = (data: ItemType[]) => {
    keyRef.current = data.length;
    return data.map((item, index) => ({ ...item, key: `key_${index}` }));
  };

  useEffect(() => {
    setData(initData(defaultData || []));
  }, []);
  
  /** 修改 */
  const del = (key: string) => {
    const newData = data.filter((item) => item.key !== key);
    setData(newData);
    return newData;
  };

  /** 查询 */
  const read = () => data;

  /** 新增 */
  const create = (item: ItemType) => {
    keyRef.current += 1;
    const newData = [...data, { ...item, key: `key_${keyRef.current}` }]
    setData(newData);
    return newData;
  };

  /** 修改 */
  const update = (key: string, newItem: ItemType) => {
    const newData = []
    for (let i = 0; i < data.length; i++) {
      if (data[i].key === key) {
        newData.push({ ...newItem, key })
      } else {
        newData.push(data[i])
      }
    }
    setData(newData);
    return newData;
  };

  return {
    create,
    read,
    update,
    del,
    initData,
    setData
  };
}

export default useDataBase;
