## Crud

增删查改为一体的组件，多应用于表单项。

- 外部只需要传入 columns 就可以
- 直接作为表单项，提交表单的时候，直接通过 form 拿到该字段下的数据

### 基本使用（前端 Crud）

```jsx
import React from 'react';
import { Crud } from 'component-in-mind';
import type { CrudColumn } from 'component-in-mind';

export default () => {
  const [columns, setColumns] = React.useState<CrudColumn[]>([]);

  const inputNode = {
    type: 'input',
    props: {
      placeholder: '请输入',
    },
  }

  const selectNode = {
    type: 'select',
    props: {
      placeholder: '请选择',
      options: [{
        value: 1,
        label: '选项1'
      }, {
        value: 2,
        label: '选项2'
      }]
    },
  }

  React.useEffect(() => {
    let i = 10, data = [];
    while( i > 0) {
      data.push({
        title: `列头${i}`,
        dataIndex: `value_${i}`,
        formItem: {
          rules: [{ required: true, message: '必填项' }],
          component: i % 2 === 0 ? inputNode : selectNode
        },
      });
      i--;
    }
    setColumns(data)
  }, [])

  return <Crud columns={columns} />;
};
```
