import { Drawer, Layout, Menu, Breadcrumb, Icon, Row, Col } from "antd";
import Link from "next/link";
import { Input } from "antd";
import { Button } from "antd";
const { TextArea } = Input;
import { Modal } from "antd";
import instance from "../server/chat";
import web3 from "../server/web3";

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
      value: "",
      collapsed: false,
      visible: false,
      messages: DUMMY_DATA,
      modalVisible: false,
      bountySetValue: [],
      ManagerName: "",
      BountyPaid: true,
      MessageArray: [],
      StateAccounts: [],
      messageToSend: ""
    };
    this.messageSender = this.messageSender.bind(this);
    this.setModalVisible = this.setModalVisible.bind(this);
    this.syncMessages = this.syncMessages.bind(this);
    // this.calling = this.calling.bind(this);
  }
  messageSender(event) {
    //event.target.value;
    if (this.state.BountyPaid == true) {
      var localAccount = web3.eth.accounts[0];
      console.log(this.state.StateAccounts[0]);
      let msg;
      if (this.state.StateAccounts[0] == this.state.ManagerName) {
        var msg = "0" + this.state.messageToSend;
      } else {
        var msg = "1" + this.state.messageToSend;
      }

      instance.methods.sendMessage(msg).send({
        from: this.state.StateAccounts[0]
      });
    } else {
      //TODO pay bounty and refresh state
    }
    this.syncMessages();
  }
  setModalVisible(modalVisible) {
    this.setState({ modalVisible: true });
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

  async stateSync() {
    await instance.methods.bounty().call((error, response) => {
      if (error) {
        console.log("error", error);
      } else {
        // console.log('response',response);
        this.setState({
          bountySetValue: web3.utils.fromWei(response, "ether")
        });
      }
    });
    const accounts = await web3.eth.getAccounts();
    this.setState({ StateAccounts: accounts });
    await instance.methods.manager().call((error, response) => {
      if (error) {
        console.log("managererror", error);
      } else {
        console.log("managerresponse", response);
        this.setState({
          ManagerName: response
        });
      }
    });

    await instance.methods.bountyPaid().call((error, response) => {
      if (error) {
        console.log("BountyPaiderror", error);
      } else {
        console.log("BountyPaidresponse", response);
        this.setState({
          BountyPaid: response
        });
      }
    });
    await instance.methods.getMessages().call((error, response) => {
      if (error) {
        console.log("GetMessagesPaiderror", error);
      } else {
        console.log("getMessagesResponse", response);
        this.setState({
          MessageArray: response
        });
      }
    });
    console.log("MessageArray", this.state.MessageArray);
  }

  async syncMessages() {
    await instance.methods.getMessages().call((error, response) => {
      if (error) {
        console.log("GetMessagesPaiderror", error);
      } else {
        console.log("getMessagesResponse", response);
        this.setState({
          MessageArray: response
        });
      }
    });
  }
  async componentDidMount() {
    //  console.log("2wlehwkufhdkdsahf");
    //  console.log("%%%%%",instance);
    //  console.log(instance.options.address);

    //  bountyPaid

    this.stateSync();

    // await instance.newMessage().watch((error, response) => {
    //   if (!error) {
    //     this.stateSync();
    //   }
    // });

    await instance.events.newMessage({}, (error, data) => {
      if (error) console.log("Error: " + error);
      else console.log("Log data: " + data);
    });
  }

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
            <Breadcrumb style={{ margin: "16px 0" }} />
            <ul className="message-list" />
            {this.state.MessageArray.map(function(message, index) {
              if (message.indexOf("1")) {
                return (
                  <div>
                  <Row>
                      <Col xs={{ span: 18 }} lg={{ span: 4 }}>
                    <div
                      style={{
                        borderRadius: 50,
                        padding: 14,
                        color: "#fff",
                        background: "#438EF7",
                        minHeight: 30,
                        textAlign: "left"
                      }}
                      key={index}
                    >
                      <b style={{fontSize:12, color:'#041527'}}>Hemant <br/></b> {message.slice(1, message.length)}
                    </div>
                    </Col>
                    </Row>
                    <br/>
                  </div>
                );
              } else {
                {
                  return (
                    <div>
                     <Row>
                      <Col xs={{ span: 18 }} lg={{ span:4,offset:0 }} style={{float:"right"}}>
                      <div
                        style={{
                          borderRadius: 50,
                          padding: 14,
                          background: "#fff",
                          minHeight: 30,
                          textAlign: "left"
                        }}
                        key={index}
                      >
                        <b style={{fontSize:12, color:"#438EF7"}}>Aditya<br/></b> {message.slice(1, message.length)}
                      </div>
                      </Col>
                      </Row>
                      <br />
                    </div>
                  );
                }
              }
            })}
          </Content>
          <Row>
            <Col xs={{ span: 18 }} lg={{ span: 23 }}>
              <TextArea
                type="text"
                onChange={event =>
                  this.setState({ messageToSend: event.target.value })
                }
                rows={4}
              />
            </Col>
            <Col xs={{ span: 2 }} lg={{ span: 1 }}>
              <Button
                onClick={this.messageSender}
                type="primary"
                style={{ height: 95 }}
              >
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
          <p type="primary" onClick={() => this.setModalVisible(true)}>
            Set Bounty
          </p>
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
          Your Current Bounty is {this.state.bountySetValue} Either
        </Modal>
      </Layout>
    );
  }
}

export default Chat;
