import React from 'react';
import Crud, { CrudColumns } from './index';

export default () => {
  const columns: CrudColumns<{ formKey1: string }>[] = [
    {
      title: '列头1',
      dataIndex: 'formKey1',
      formItem: {
        component: {
          type: 'input',
          props: {
            placeholder: '请输入',
          },
        },
      },
      render: (value, record) => record.formKey1,
    },
  ];

  return (
    <>
      <Crud columns={columns} />
    </>
  );
};
