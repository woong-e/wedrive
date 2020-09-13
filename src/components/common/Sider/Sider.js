import React, { Component } from 'react';
import {Layout, Menu} from 'antd';

import {Link} from "react-router-dom";
import {appRootPath} from "../../../settings";
import menu from "./menu";

class Sider extends Component {
  //
  getMenuItem = ({key, label, leftIcon}) => {
    return (
      <Menu.Item key={key} icon={leftIcon}>
        <Link to={`${appRootPath}/${key}`}>
          {label}
        </Link>
      </Menu.Item>
    )
  }

  render() {
    //
    const {
      collapsed,
      current,
      onChangeCurrent
    } = this.props;
    const {Sider}= Layout;
    const logo = {
      margin: '16px',
      height: '32px',
      fontSize: '24px',
      lineHeight: '32px',
      textAlign: 'center',
    }

    return (
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div style={logo}>
          <Link to={appRootPath} style={{color: '#ffffff'}} onClick={() => onChangeCurrent('')}>과제</Link>
        </div>
        <Menu
          theme='dark'
          mode='inline'
          selectedKeys={current}
          onClick={onChangeCurrent}
        >
          {menu.map(menu => this.getMenuItem(menu))}
        </Menu>
      </Sider>
    )
  }
}

export default Sider;