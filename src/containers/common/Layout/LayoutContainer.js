import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Layout} from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';

import actions from "../../../store/app/actions";
import {indexSelector} from "../../../store/app/selectors";

import Sider from "../../../components/common/Sider/Sider";
import AppRouter from '../../../routers/AppRouter';

class LayoutContainer extends Component {
  //
  handleChangeCollapsed = () => {
    this.props.actions.changeCollapsed();
  };

  handleChangeCurrent = ({key}) => {
    this.props.actions.changeCurrent([key]);
  }

  render() {
    //
    const {
      form: {
        collapsed,
        current,
      }
    } = this.props;
    const {url} = this.props.match;
    const { Header, Content } = Layout;
    const appHeight = window.innerHeight;

    return(
      <Layout style={{height: appHeight}}>

        <Sider
          collapsed={collapsed}
          current={current}
          onChangeCurrent={this.handleChangeCurrent}
        />

        <Layout>
          <Header style={{backgroundColor: '#ffffff'}}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.handleChangeCollapsed,
            })}
          </Header>

          <Content
            style={{
              margin: '16px',
              padding: '24px',
              minHeight: '280px',
            }}
          >
            <AppRouter url={url} />
          </Content>
        </Layout>

      </Layout>
    )
  }
}

const stateToProps = (state) => ({
  form: indexSelector.form(state),
});

const dispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(
  stateToProps,
  dispatchToProps,
)(LayoutContainer);