import { useEffect, useRef, useState } from 'react';

type DataItemType<T> = T & { key: string };

function useDataBase<ItemType>(defaultData?: ItemType[]) {
  const keyRef = useRef(0);
  const [data, setData] = useState<DataItemType<ItemType>[]>([]);

  const initData = (data: ItemType[]) => {
    keyRef.current = data.length;
    return data.map((item, index) => ({ ...item, key: `key_${index}` }));
  };

  useEffect(() => {
    setData(initData(defaultData || []));
  }, []);

  const create = (item: ItemType) => {
    keyRef.current += 1;
    setData([...data, { ...item, key: `key_${keyRef.current}` }]);
  };

  const read = () => data;

  const update = (key: string, newItem: ItemType) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].key === key) {
        data[i] = { ...newItem, key };
        continue;
      }
    }
    setData(data);
  };

  const del = (key: string) => data.filter((item) => item.key !== key);

  return {
    create,
    read,
    update,
    del,
  };
}

export default useDataBase;
