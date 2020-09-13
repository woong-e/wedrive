import React, {Component} from 'react';
import {Result, Button} from 'antd';

import {appRootPath} from '../../../settings';

export default class extends Component {

  backHome = () => {
    this.props.history.push(`${appRootPath}`);
  }

  render() {
    return (
      <Result
        status="404"
        title="404"
        subTitle="죄송합니다. 방문하신 페이지가 존재하지 않습니다."
        extra={<Button type="primary" onClick={this.backHome}>Back Home</Button>}
      />
    );
  }
}
