import type { ButtonProps } from 'antd';
import { Button, Modal, Select, Spin, Tag } from 'antd';
import React, { useMemo, useState } from 'react';
import './index.css';

const enum AccordSignStatus {
  SIGNED = 'SIGNED',
  WAITSIGN = 'WAITSIGN',
}

interface AccordListType {
  /** 协议的业务id，可用来签署和预览内容 */
  id: string;
  name: string;
  /** 用于表示协议是否已签署 */
  status: AccordSignStatus;
}

interface SignAccordProps {
  /** 获取协议列表 */
  requestAccordList: () => Promise<AccordListType[]>;
  /** 获取协议图片 */
  requestAccordImg: (accordItem: AccordListType) => Promise<string>;
  /** 点击按钮的配置属性，同 antd */
  btnProps?: ButtonProps;
  btnText?: string;
  modalTitle?: string;
}

const SignAccord: React.FC<React.PropsWithChildren<SignAccordProps>> = (
  props,
) => {
  const { requestAccordList, requestAccordImg, btnProps, btnText, modalTitle } =
    props;

  const [visible, setVisible] = useState(false);
  /** 协议数据列表 */
  const [accordData, setAccordData] = useState<AccordListType[]>([]);
  const [requestAccordLoading, setRequestAccordLoading] = useState(false);
  /** 协议图片 */
  const [accordImg, setAccordImg] = useState('');
  const [accordImgLoading, setAccordImgLoading] = useState(false);

  const toggle = () => {
    setVisible(!visible);
  };

  const handleClickSign = async () => {
    setRequestAccordLoading(true);
    const data = await requestAccordList();
    setRequestAccordLoading(false);
    setAccordData(data);
    if (data.length) {
      toggle();
    }
  };

  const handleCancel = () => {
    toggle();
  };

  const handleChangeAccord = async (accordItem: AccordListType) => {
    setAccordImgLoading(true);
    const imgurl = await requestAccordImg(accordItem);
    setAccordImgLoading(false);
    setAccordImg(imgurl);
  };

  /** select组件的options参数 */
  const selectOptions = useMemo(() => {
    const getLabelNode = ({ name, status }: Omit<AccordListType, 'id'>) => (
      <div>
        {name}{' '}
        {status === AccordSignStatus.SIGNED && <Tag color="green">已签署</Tag>}
      </div>
    );
    return accordData.map(({ id, ...rest }) => ({
      value: id,
      label: getLabelNode(rest),
    }));
  }, [accordData]);

  const titleNode = modalTitle || '协议签署';

  return (
    <>
      <Button
        type="link"
        onClick={handleClickSign}
        {...btnProps}
        loading={requestAccordLoading}
      >
        {btnText || '签署'}
      </Button>
      <Modal
        title={titleNode}
        open={visible}
        width={1000}
        onCancel={handleCancel}
        destroyOnClose
      >
        <Select
          style={{ width: 200 }}
          options={selectOptions}
          onChange={handleChangeAccord}
        />
        <Spin tip="Loading" spinning={accordImgLoading}>
          <div className="sign-accord-content">
            {accordImg && (
              <img src={accordImg} alt="协议图片" title="协议图片" />
            )}
          </div>
        </Spin>
      </Modal>
    </>
  );
};

export default SignAccord;
