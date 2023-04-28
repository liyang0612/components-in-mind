## Crud

增删查改为一体的组件，多应用于表单项。

- 外部只需要传入 columns 就可以
- 直接作为表单项，直接通过 form 拿到该字段下的数据
- 在一些复杂表单的时候应用较多

## 基本使用（前端 Crud）

```jsx
import React from 'react';
import { Form, Input, Button, message } from 'antd'
import { Crud } from 'component-in-mind';
import type { CrudColumn } from 'component-in-mind';

export default () => {

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

  const [columns, setColumns] = React.useState<CrudColumn[]>([]);
  const dataSource = []
  const [form] = Form.useForm();
  React.useEffect(() => {
    const num = 6;
    let i = num, data = [];
    while( i > 0) {
      data.push({
        title: `列头${i}`,
        dataIndex: `value_${i}`,
        formItem: {
          rules: [{ required: true, message: '必填项' }],
          component: i % 2 === 0 ? inputNode : selectNode
        },
      });

      const dataKeyValue = {};
      for (var j = num; j > 0; j--) {
        dataKeyValue[`value_${j}`] = j % 2 === 0 ? `数据${i}` : 1
      }
      dataSource.push(dataKeyValue)

      i--;
    }
    setColumns(data)
    form.setFieldValue('key_2', dataSource)
  }, [])

  const handleSubmit = async () => {
    const values = await form.validateFields();
    message.info(`表单数据：${JSON.stringify(values)}`)
  }

  return <Form form={form}>
    <Form.Item name="key_1" label="表单项一"><Input placeholder="请输入"/></Form.Item>
    <Form.Item name="key_2" label="表单项二">
      <Crud columns={columns}/>
    </Form.Item>
    <div><Button type="primary" onClick={handleSubmit}>提交</Button></div>
  </Form>;
};
```
