import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Modal} from 'antd';
import {ExclamationCircleOutlined} from "@ant-design/icons";

import actions from "../../store/member/actions";
import {indexSelector} from "../../store/member/selectors";

import {changeValue} from "../../helpers/utility";
import LayoutWrapper from "../../components/common/LayoutWrapper/LayoutWrapper";
import PageHeader from "../../components/common/PageHeader/PageHeader";
import MemberList from "../../components/Member/MemberList";
import MemberInfoModal from "../../components/Member/MemberInfoModal";

class Member extends Component {
  //
  componentDidMount() {
    this.props.actions.fetchList();
  }

  handleChangeValue = e => {
    changeValue(e, this.props.actions.changeValue);
  }

  fetch = (id) => {
    this.props.actions.fetch(id);
    this.props.actions.informationVisible(true);
  }

  modify = () => {
    const {form} = this.props;
    this.props.actions.modify(form);
    this.handleCloseInformation();
  }

  userRemove = (id) => {
    const remove = this.props.actions.remove;

    Modal.confirm({
      title: '사용자 삭제',
      icon: <ExclamationCircleOutlined />,
      content: '사용자를 삭제하시겠습니까?',
      onOk() {
        remove(id);
      }
    });
  }

  onFinish = values => {
    this.props.actions.join(values);
  }

  handleCloseInformation = () => {
    this.props.actions.informationVisible(false);
  }

  render() {
    //
    const {
      form,
      list,
      informationVisible
    } = this.props;

    return (
      <LayoutWrapper>
        <PageHeader>사용자 목록</PageHeader>

        <MemberList
          list={list}
          fetch={this.fetch}
          userRemove={this.userRemove}
        />

        <MemberInfoModal
          form={form}
          visible={informationVisible}
          onFinish={this.modify}
          onChangeValue={this.handleChangeValue}
          onCloseInformation={this.handleCloseInformation}
        />

      </LayoutWrapper>
    )
  }
}

const stateToProps = (state) => ({
  form: indexSelector.form(state),
  list: indexSelector.list(state),
  informationVisible: indexSelector.informationVisible(state),
});

const dispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(
  stateToProps,
  dispatchToProps,
)(Member);