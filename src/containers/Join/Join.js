import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Row, Col} from "antd";

import actions from "../../store/member/actions";
import {indexSelector} from "../../store/member/selectors";

import {changeValue} from '../../helpers/utility';
import LayoutWrapper from "../../components/common/LayoutWrapper/LayoutWrapper";
import PageHeader from "../../components/common/PageHeader/PageHeader";
import Box from "../../components/common/Box/Box";
import JoinInfo from "../../components/Member/JoinInfo";
import AddressModal from "../../components/common/AddressModal/AddressModal";

class Join extends Component {
  //
  constructor(props) {
    super(props);

    this.colSpan = {
      xs: {span: 24},
      sm: {span: 24},
      lg: {span: 24},
      xl: {span: 12}
    }

    this.joinInfoRef = React.createRef();
  }

  componentDidMount() {
    this.props.actions.initialize();
  }

  handleChangeValue = e => {
    changeValue(e, this.props.actions.changeValue);
  }

  handleChangeAddress = ({address}) => {
    this.props.actions.changeAddress(address);
    this.joinInfoRef.current.setFieldsValue({
      'address': address,
    })
    this.handleCloseAddress();
  }

  handleShowAddress = () => {
    this.props.actions.addressVisible(true);
  }

  handleCloseAddress = () => {
    this.props.actions.addressVisible(false);
  }

  onFinish = values => {
    this.props.actions.join(values);
    this.joinInfoRef.current.resetFields();
  }

  render() {
    //
    const {
      form,
      addressVisible,
    } = this.props;

    return (
      <LayoutWrapper>
        <PageHeader>회원가입</PageHeader>

        <Row gutter={this.colSpan} style={{width: '100%'}}>
          <Col {...this.colSpan}>
            <Box>
              <JoinInfo
                joinInfoRef={this.joinInfoRef}
                form={form}
                required={this.required}
                onFinish={this.onFinish}
                onChangeValue={this.handleChangeValue}
                onShowAddress={this.handleShowAddress}
              />
            </Box>
          </Col>
        </Row>

        <AddressModal
          visible={addressVisible}
          onChangeAddress={this.handleChangeAddress}
          onCloseAddress={this.handleCloseAddress}
        />
      </LayoutWrapper>
    )
  }
}

const stateToProps = (state) => ({
  form: indexSelector.form(state),
  addressVisible: indexSelector.addressVisible(state),
});

const dispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(
  stateToProps,
  dispatchToProps,
)(Join);