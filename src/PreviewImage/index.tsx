import { Button, Modal, Spin } from 'antd';
import React, { useState } from 'react';

interface PreviewImageProps {
  /** 图片路径 */
  url?: string;
  /** 获取图片的请求 */
  request?: () => Promise<string>;
  /** modal title */
  title?: string;
}

const imgStyle = { width: '100%' };

const PreviewImage: React.FC<React.PropsWithChildren<PreviewImageProps>> = (
  props,
) => {
  const { children, url, request = () => '', title = '图片预览' } = props;

  const [visible, setVisible] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const toggle = () => {
    setVisible(!visible);
  };

  const handleShow = async () => {
    if (url) {
      setImageUrl(url);
    } else {
      setLoading(true);
      const urlFromServer = await request();
      setLoading(false);
      setImageUrl(urlFromServer);
    }

    toggle();
  };

  return (
    <div>
      <div className="im-preview-click-box" onClick={handleShow}>
        {loading ? (
          <Spin size="small" />
        ) : (
          children || <Button type="link">查看</Button>
        )}
      </div>
      <Modal title={title} footer={null} open={visible} onCancel={toggle}>
        <img src={imageUrl} style={imgStyle} />
      </Modal>
    </div>
  );
};

export default PreviewImage;
