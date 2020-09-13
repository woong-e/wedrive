import React, {Component} from 'react';
import {Button, Table} from 'antd';

import Box from "../common/Box/Box";

class MemberList extends Component {
  //
  constructor(props) {
    super(props);
    const {
      userRemove,
      fetch
    } = this.props;

    const fontStyle = {
      color: '#1890ff',
      backgroundColor: 'transparent',
      textDecoration: 'none',
      outline: 'none',
      cursor: 'pointer',
      transition: 'color 0.3s',
    };

    this.columns = [
      {
        title: '아이디',
        dataIndex: 'userId',
        width: '30%',
        align: 'center',
        render: (text, record) => {
          return <span style={fontStyle} onClick={() => fetch(record.id)}>{text}</span>
        }
      },
      {
        title: '이름',
        dataIndex: 'name',
        width: '30%',
        align: 'center',
      },
      {
        title: '주소',
        dataIndex: 'address',
        width: '30%',
        align: 'center',
      },
      {
        title: '',
        width: '10%',
        align: 'center',
        render: (record) => {
          return <Button type='danger' size='small' onClick={() => userRemove(record.id)}>삭제</Button>
        }
      },
    ]
  }
  render() {
    //
    const {
      list
    } = this.props;

    return (
      <Box>
        <Table
          columns={this.columns}
          dataSource={list}
          size="middle"
          pagination={false}
        />
      </Box>
    )
  }
}

export default MemberList;