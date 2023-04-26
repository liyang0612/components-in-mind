import type { InputProps, SelectProps } from 'antd';
import { Button, Modal, Table } from 'antd';
import type { ColumnProps } from 'antd/es/table';
import React, { useState } from 'react';

interface CrudColumnExtra {
  formItem?:
    | {
        type: 'select';
        props?: SelectProps;
      }
    | {
        type: 'input';
        props?: InputProps;
      };
  hideColumn?: boolean;
  hideFormItem?: boolean;
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

  const [visible, setVisible] = useState(false);
  const [tableData] = useState([]);

  const toggle = () => {
    setVisible(!visible);
  };

  const handleOpen = () => {
    toggle();
  };

  const handleClose = () => {
    toggle();
  };

  return (
    <>
      <Button onClick={handleOpen}>新增</Button>
      <Table
        columns={columns as Exclude<CrudColumns<any>, CrudColumnExtra>}
        dataSource={tableData}
      />
      <Modal open={visible} onCancel={handleClose}></Modal>
    </>
  );
}

export default Crud;
