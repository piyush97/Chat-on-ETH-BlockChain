import { Drawer, Layout, Menu, Breadcrumb, Icon, Row, Col } from "antd";
import Link from "next/link";
import { Input } from "antd";
import { Button } from "antd";
const { TextArea } = Input;
import { Modal } from 'antd';
import instance from '../server/chat';

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
      value: '',
      collapsed: false,
      visible: false,
      messages: DUMMY_DATA,
      modalVisible: false,
      bountySetValue:[],
    };
    
    this.setModalVisible = this.setModalVisible.bind(this);
    // this.calling = this.calling.bind(this);
  }

  setModalVisible(modalVisible) {
      this.setState({ modalVisible:true });
      
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

  componentDidMount()
  {
   async function calling() {
     console.log("2wlehwkufhdkdsahf")
     await instance.bounty.call((err, res) => {
       if (err) {
         console.log(err);
       } else {
         console.log(res);
       }
     })
   }
  }
  
 
  render() {
     
    return (
      <Layout style={{ minHeight: "100vh" }}>
        {this.calling}
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
              <Icon type="setting" theme="outlined" />
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
          <p type="primary" onClick={() => this.setModalVisible(true)}>Set Bounty</p>
          <p type="primary">Set Messaging limit</p>
          <p type="primary">Control Privacy</p>
        </Drawer>
        
        <Modal
          title="Set Bounty"
          style={{ top: 20 }}
          visible={this.state.modalVisible}
          onOk={() => this.setModalVisible(false)}
          onCancel={() => this.setModalVisible(false)}
        >
          Your Current Bounty is {JSON.stringify(this.state.bountySetValue)}
        </Modal>
      </Layout>
    );
  }
}

export default Chat;
