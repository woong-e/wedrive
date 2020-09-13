import React, {Component} from 'react';
import {Modal} from 'antd';
import DaumPostcode from 'react-daum-postcode';

class AddressModal extends Component {
  //
  render() {
    //
    const {
      visible,
      onChangeAddress,
      onCloseAddress,
    } = this.props;

    return (
      <Modal
        title='주소검색'
        visible={visible}
        width={500}
        bodyStyle={{height: '550px', overflowY: 'auto'}}
        onCancel={onCloseAddress}
        footer={false}
      >
        <DaumPostcode
          height={470}
          onComplete={onChangeAddress}
        />
      </Modal>
    )
  }
}

export default AddressModal;