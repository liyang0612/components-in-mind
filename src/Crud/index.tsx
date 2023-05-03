import {
  Button,
  Form,
  FormItemProps,
  Input,
  InputProps,
  message,
  Modal,
  Select,
  SelectProps,
  Table,
} from 'antd';
import type { ColumnProps } from 'antd/es/table';
import React, { useEffect, useRef, useState } from 'react';
import useDataBase, { DataItemType } from './useDataBase';

interface FormItemType<T = any> extends FormItemProps<T> {
  component:
    | {
        type: 'select';
        props?: SelectProps;
      }
    | {
        type: 'input';
        props?: InputProps;
      };
}
interface CrudColumnExtra {
  formItem?: FormItemType;
  /** 隐藏列 */
  hideColumn?: boolean;
  /** 隐藏表单项 */
  hideFormItem?: boolean;
  // 下面是重载的属性
  title: string | React.ReactNode;
  dataIndex: string;
}

export type CrudColumns<T> = CrudColumnExtra & ColumnProps<T>;

interface CrudProps<RecordType> {
  /** 默认数据 */
  defaultValue?: RecordType[],
  /** 列集合 */
  columns: CrudColumns<RecordType>[];
  /** 支持受控组件；可作为form组件使用 */
  value?: RecordType[],
  /** change事件 */
  onChange?: (Data: RecordType[]) => void;
}

function Crud<RecordType>(
  props: React.PropsWithChildren<CrudProps<RecordType>>,
) {
  const { columns, defaultValue = [], value = [], onChange = () => {} } = props;
  const isInitRef = useRef(true);
  const [form] = Form.useForm();
  const [visible, setVisible] = useState(false);
  /** 正在编辑的当前的值 */
  const [currentRow, setCurrentRow] = useState<DataItemType<RecordType>>();
  const database = useDataBase<RecordType>();
  const tableData = database.read();

  useEffect(() => {
    database.setData(database.initData(value));
  }, [value])

  // 默认值只赋值一次
  if (!value && isInitRef.current && defaultValue.length) {
    database.setData(database.initData(defaultValue));
    isInitRef.current = false;
  }

  const toggle = () => {
    setVisible(!visible);
  };

  const handleOpen = () => {
    toggle();
  };

  const handleClose = () => {
    toggle();
    form.resetFields();
    setCurrentRow(undefined);
  };

  const handleSave = async () => {
    const values = await form.validateFields();
    let newData = []
    if (currentRow) {
      newData = database.update(currentRow.key, values);
      message.success('更新成功');
    } else {
      newData = database.create(values);
      message.success('新增成功');
    }
    handleClose();
    onChange(newData)
  };

  const handleDel = async (row: DataItemType<RecordType>) => {
    const newData = database.del(row.key);
    onChange(newData);
    message.success('删除成功');
  }

  const handleEdit = async (row: DataItemType<RecordType>) => {
    setCurrentRow(row);
    form.setFieldsValue(row)
    handleOpen();
  }

  const FormItemDomMap: Record<string, any> = {
    select: Select,
    input: Input,
  };

  const actionColumn: CrudColumns<DataItemType<RecordType>> = {
    title: '操作',
    dataIndex: 'opt',
    hideFormItem: true,
    render: (index, record) => {
      return (
        <div>
          <a type="link" onClick={() => handleDel(record)}>删除</a>&nbsp;&nbsp;
          <a type="link" onClick={() => handleEdit(record)}>编辑</a>
        </div>
      );
    },
  };

  const tableColumns = [...columns, actionColumn];

  const FormItemList = columns.filter((item) => item.formItem && !item.hideFormItem).map((item) => {
    const { component = {} as FormItemType['component'], ...formItem } = item.formItem ?? {};
    const childrenNode = React.createElement(
      FormItemDomMap[component.type ?? 'input'],
      component?.props as Record<string, any>,
    );
    return (
      <Form.Item
        key={item.dataIndex}
        name={item.dataIndex}
        label={item.title}
        {...formItem}
      >
        {childrenNode}
      </Form.Item>
    );
  });

  return (
    <>
      <Button onClick={handleOpen}>
        新增
      </Button>
      <Table
        columns={tableColumns as Exclude<CrudColumns<RecordType>, CrudColumnExtra>}
        dataSource={tableData}
      />
      <Modal open={visible} onCancel={handleClose} onOk={handleSave}>
        <Form form={form}>{FormItemList}</Form>
      </Modal>
    </>
  );
}

export default Crud;
