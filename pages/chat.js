import { Drawer, Layout, Menu, Breadcrumb, Icon, Row, Col } from "antd";
import Link from "next/link";
import { Input } from "antd";
import { Button } from "antd";
const { TextArea } = Input;

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

// Dummy data for messages
const DUMMY_DATA = [
  {
    senderId: "perborgen",
    text: "who'll win?"
  },
  {
    senderId: "janedoe",
    text: "who'll win?"
  }
];

class Chat extends React.Component {
  constructor(props) {
    super();
    this.state = {
      collapsed: false,
      visible: false,
      messages: DUMMY_DATA
    };
  }

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>User</span>
                </span>
              }
            >
              <Menu.Item key="1">Piyush</Menu.Item>
              <Menu.Item key="2">
                {" "}
                <Link href="/profile">
                  <div>Aditya</div>
                </Link>
              </Menu.Item>
              <Menu.Item key="3">Hemant</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="team" />
                  <span>Team</span>
                </span>
              }
            >
              <Menu.Item key="6">Team Blume</Menu.Item>
              <Menu.Item key="8">Team Hello</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Icon type="file" />
              <span>File</span>
            </Menu.Item>
            <Menu.Item key="10" onClick={this.showDrawer}>
              <Icon type="file" />
              <span>Settings</span>
            </Menu.Item>
            <Menu.Item key="11">
              <Link href="/">
                <div>
                  <Icon type="poweroff" theme="outlined" />
                  <span>Log Out</span>
                </div>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }} />
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Hemant</Breadcrumb.Item>
            </Breadcrumb>
            <ul className="message-list">
              {this.state.messages.map(message => {
                if (message.senderId === "perborgen")
                  return (
                    <div>
                      <div
                        key={message.id}
                        style={{
                          padding: 24,
                          background: "#fff",
                          minHeight: 60,
                          textAlign: "right"
                        }}
                      >
                        <b>{message.senderId}:</b>
                        {message.text}
                      </div>
                      <br />
                    </div>
                  );
                else
                  return (
                    <div>
                      <div
                        key={message.id}
                        style={{
                          padding: 24,
                          background: "#fff",
                          minHeight: 60,
                          textAlign: "left"
                        }}
                      >
                        <b>{message.senderId}:</b>
                        {message.text}
                      </div>
                      <br />
                    </div>
                  );
              })}
            </ul>
          </Content>
          <Row>
            <Col xs={{ span: 18 }} lg={{ span: 23 }}>
              <TextArea rows={4} />
            </Col>
            <Col xs={{ span: 2 }} lg={{ span: 1 }}>
              <Button type="primary" style={{ height: 95 }}>
                Send
              </Button>
            </Col>
          </Row>
          <Footer style={{ textAlign: "center" }}>
            <b>Created by Team blume</b>
          </Footer>
        </Layout>
        <Drawer
          title="User Settings"
          placement="right"
          closable={true}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <p type="primary">Set Price</p>
          <p type="primary">Set Messaging limit</p>
          <p type="primary">Control Privacy</p>
        </Drawer>
      </Layout>
    );
  }
}

export default Chat;
