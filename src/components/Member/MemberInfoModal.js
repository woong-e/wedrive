import React, {Component} from 'react';
import {Modal} from 'antd';
import JoinInfo from "./JoinInfo";

class MemberInfoModal extends Component {
  //
  render() {
    //
    const {
      form,
      visible,
      onFinish,
      onChangeValue,
      onCloseInformation,
    } = this.props;

    return (
      <Modal
        title='사용자 정보'
        width={500}
        visible={visible}
        footer={false}
        onCancel={onCloseInformation}
      >
        <JoinInfo
          form={form}
          onChangeValue={onChangeValue}
          onFinish={onFinish}
        />
      </Modal>
    )
  }
}

export default MemberInfoModal;