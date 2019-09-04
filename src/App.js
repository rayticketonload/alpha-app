import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Layout } from 'antd';
import '@style/App.less';

const { Header, Footer, Content } = Layout;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      needFullHeight: false,
    };
  }

  getHeightFromWindow() {
    const antLayout = document.querySelector('#root > section.ant-layout');
    const wh = document.body.clientHeight;
    const lh = antLayout.clientHeight;

    if (lh < wh) {
      this.setState({
        needFullHeight: true,
      })
    };
  }

  componentDidMount() {
    this.getHeightFromWindow();
  }

  render() {
    const { children } = this.props;
    const { needFullHeight } = this.state;

    return (
      <Layout className="custom-wrap">
        <Header className="custom-header">
          <Link to="/login">login</Link>
          <Link to="/home">home</Link>
        </Header>
        <Content className="custom-content">{children}</Content>
        <Footer className="custom-footer">Footer</Footer>
      </Layout>
    );
  }
}

export default withRouter(App);
