import React, {Component} from 'react';
import {Button, Form, Input} from "antd";
import actions from '../../store/member/actions';

class JoinInfo extends Component {
  //
  constructor(props) {
    super(props);

    this.layout = {
      labelCol: {
        xs: {span: 24},
        sm: {span: 12},
        lg: {span: 8},
      },
      wrapperCol: {
        xs: {span: 24},
        sm: {span: 12},
        lg: {span: 16},
      },
    }
  }

  required = (label) => {
    return [{ required: true, message: `${label}를 입력해 주세요.` }]
  }

  render() {
    //
    const {
      form: {
        userId,
        name,
        phone,
        address,
        detailedAddress,
      },
      joinInfoRef,
      onFinish,
      onChangeValue,
      onShowAddress
    } = this.props;

    return (
      <Form
        ref={joinInfoRef}
        {...this.layout}
        layout="horizontal"
        onFinish={onFinish}
        style={{marginTop: '20px'}}
      >
        <Form.Item
          label='아이디'
          rules={this.required('아이디')}
        >
          <Input
            data-type={actions.CHANGE_USER_ID}
            data-key='userId'
            value={userId}
            onChange={onChangeValue}
          />
        </Form.Item>

        <Form.Item
          label='비밀번호'
          hasFeedback
          rules={this.required('비밀번호')}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label='비밀번호 확인'
          hasFeedback
          rules={[
            {
              required: true,
              message: '비밀번호를 확인해 주세요.'
            },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject('비밀번호가 일치하지 않습니다.');
              },
            }),
          ]}
        >
          <Input.Password
            data-type={actions.CHANGE_PASSWORD}
            data-key='password'
            onChange={onChangeValue}
          />
        </Form.Item>

        <Form.Item
          label='이름'
        >
          <Input
            data-type={actions.CHANGE_NAME}
            data-key='name'
            value={name}
            onChange={onChangeValue}
          />
        </Form.Item>

        <Form.Item
          label='전화번호'
        >
          <Input
            data-type={actions.CHANGE_PHONE}
            data-key='phone'
            value={phone}
            onChange={onChangeValue}
          />
        </Form.Item>

        <Form.Item
          label='주소'
        >
          <Input
            data-type={actions.CHANGE_ADDRESS}
            data-key='address'
            value={address}
            onChange={onChangeValue}
            onClick={onShowAddress}
          />
        </Form.Item>

        <Form.Item
          label='상세주소'
        >
          <Input
            data-type={actions.CHANGE_DETAILED_ADDRESS}
            data-key='detailedAddress'
            value={detailedAddress}
            onChange={onChangeValue}
          />
        </Form.Item>

        <div style={{textAlign: 'right'}}>
          <Button type='primary' htmlType="submit">저장</Button>
        </div>
      </Form>
    )
  }
}

export default JoinInfo;