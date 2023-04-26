### Crud

增删查改为一体的组件，多应用与表单项，作为一个相对复杂的参数。

### 基本使用（前端 Crud）

```jsx
import React from 'react';
import { Crud } from 'component-in-mind';
import type { CrudColumn } from 'component-in-mind';

export default () => {
  const columns: CrudColumn[] = [
    {
      title: '列头1',
      dataIndex: 'formKey1',
      formItem: {
        type: 'input',
        props: {
          placeholder: '请输入',
        },
      },
    },
  ];

  return <Crud columns={columns} />;
};
```
