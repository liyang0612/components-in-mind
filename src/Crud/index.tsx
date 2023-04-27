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
import React, { useState } from 'react';
import useDataBase from './useDataBase';

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
  hideColumn?: boolean;
  hideFormItem?: boolean;
  title: string | React.ReactNode;
  dataIndex: string;
}

export type CrudColumns<T> = CrudColumnExtra & ColumnProps<T>;

interface CrudProps<RecordType> {
  columns: CrudColumns<RecordType>[];
  /** 增删查改引起的变化事件 */
  onCrudChange?: (item: RecordType) => void;
}

function Crud<RecordType>(
  props: React.PropsWithChildren<CrudProps<RecordType>>,
) {
  const { columns } = props;

  const [form] = Form.useForm();
  const [visible, setVisible] = useState(false);
  const database = useDataBase<RecordType>();
  const tableData = database.read();

  const toggle = () => {
    setVisible(!visible);
  };

  const handleOpen = () => {
    toggle();
  };

  const handleClose = () => {
    toggle();
  };

  const handleSave = async () => {
    const values = await form.validateFields();
    database.create(values);
    message.success('新增成功');
    handleClose();
    form.resetFields();
  };

  const FormItemDomMap: Record<string, any> = {
    select: Select,
    input: Input,
  };

  const actionColumn: CrudColumns<RecordType> = {
    title: '操作',
    dataIndex: 'opt',
    hideFormItem: true,
    render: () => {
      return (
        <div>
          <Button type="link">删除</Button>
          <Button type="link">新增</Button>
        </div>
      );
    },
  };

  const tableColumns = [...columns, actionColumn];

  const FormItemList = columns
    .filter((item) => item.formItem && !item.hideFormItem)
    .map((item) => {
      const { component = {} as FormItemType['component'], ...formItem } =
        item.formItem ?? {};
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
      <Button onClick={handleOpen} type="primary">
        新增
      </Button>
      <Table
        columns={
          tableColumns as Exclude<CrudColumns<RecordType>, CrudColumnExtra>
        }
        dataSource={tableData}
      />
      <Modal open={visible} onCancel={handleClose} onOk={handleSave}>
        <Form form={form}>{FormItemList}</Form>
      </Modal>
    </>
  );
}

export default Crud;
