import { Button, ButtonProps, message, Modal, Select, Spin, Tag } from 'antd';
import React, { useMemo, useRef, useState } from 'react';
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
  /** 签署协议 */
  requestSign: (params: AccordListType) => Promise<void | true | false>;
  /** 点击按钮的配置属性，同 antd */
  btnProps?: ButtonProps;
  btnText?: string;
  modalTitle?: string;
}

const SignAccord: React.FC<React.PropsWithChildren<SignAccordProps>> = (
  props,
) => {
  const {
    requestAccordList,
    requestAccordImg,
    requestSign,
    btnProps,
    btnText,
    modalTitle,
  } = props;

  const [visible, setVisible] = useState(false);
  /** 协议数据列表 */
  const [accordData, setAccordData] = useState<AccordListType[]>([]);
  const [requestAccordLoading, setRequestAccordLoading] = useState(false);
  /** 协议图片 */
  const [accordImg, setAccordImg] = useState('');
  const [requestAccordImgLoading, setRequestAccordImgLoading] = useState(false);
  const [requestSignLoading, setRequestSignLoading] = useState(false);
  /** 当前显示多的协议下标 */
  const currentIndexRef = useRef<number>(0);
  /** 当前协议 */
  const [currentAccord, setCurrentAccord] = useState<AccordListType>();

  const disabled =
    requestAccordLoading || requestAccordImgLoading || requestSignLoading;

  const toggle = () => {
    setVisible(!visible);
  };

  const handleCancel = () => {
    toggle();
  };

  /** 更新当前协议内容 */
  const updateAccordImg = async (accordItem: AccordListType) => {
    setRequestAccordImgLoading(true);
    const imgurl = await requestAccordImg(accordItem);
    setRequestAccordImgLoading(false);
    setAccordImg(imgurl);
  };

  /** 打开弹窗之前，请求并设置协议列表 */
  const beforeOpen = async () => {
    setRequestAccordLoading(true);
    const data = await requestAccordList();
    setRequestAccordLoading(false);
    setAccordData(data);
    return data;
  };

  /** 打开弹窗之后，设置并请求当前协议内容 */
  const afterOpen = (data: AccordListType[]) => {
    const currentAccordImg = data[0];
    setCurrentAccord(currentAccordImg);
    updateAccordImg(currentAccordImg);
  };

  /** 获取协议列表并打开窗口 */
  const handleOpen = async () => {
    const data = await beforeOpen();
    if (!data.length) {
      return;
    }
    toggle();
    afterOpen(data);
  };

  /** 切换协议 */
  const handleChangeAccord = (id: string) => {
    const currentAccord = accordData.filter((item, index) => {
      currentIndexRef.current = index;
      return item.id === id;
    })[0];
    setCurrentAccord(currentAccord);
    updateAccordImg(currentAccord);
  };

  /** 签署下一个 */
  const handleNext = () => {
    currentIndexRef.current += 1;
    // 循环显示
    if (currentIndexRef.current >= accordData.length) {
      currentIndexRef.current = 0;
    }
    const currentAccord = accordData[currentIndexRef.current];
    setCurrentAccord(currentAccord);
    updateAccordImg(currentAccord);
  };

  /** 签署 */
  const handleSign = async () => {
    setRequestSignLoading(true);
    const result = await requestSign(currentAccord as AccordListType);
    setRequestSignLoading(false);
    if (result === true) {
      message.success('签署成功');
    }
    if (result === false) {
      message.error('签署失败');
    }
  };

  /** select组件的options参数 */
  const selectOptions = useMemo(() => {
    const getLabelNode = ({ name, status }: Omit<AccordListType, 'id'>) => (
      <div>
        {name}
        {status === AccordSignStatus.SIGNED && <Tag color="green">已签署</Tag>}
      </div>
    );
    return accordData.map(({ id, ...rest }) => ({
      value: id,
      label: getLabelNode(rest),
    }));
  }, [accordData]);

  const titleNode = modalTitle || '协议签署';

  const footerNode = (
    <div>
      {currentAccord?.status === AccordSignStatus.WAITSIGN ? (
        <Button
          loading={requestSignLoading}
          onClick={handleSign}
          disabled={disabled}
        >
          签署
        </Button>
      ) : (
        <Button onClick={handleNext}>下一个</Button>
      )}
    </div>
  );

  return (
    <>
      <Button
        type="link"
        onClick={handleOpen}
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
        footer={footerNode}
      >
        <Select<string>
          value={currentAccord?.id}
          disabled={disabled}
          style={{ width: 200 }}
          options={selectOptions}
          onChange={handleChangeAccord}
          placeholder="请选择"
        />
        <Spin tip="Loading" spinning={requestAccordImgLoading}>
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
