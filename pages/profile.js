import React, {Component} from 'react'
import { Avatar } from 'antd';
import { Row, Col } from 'antd';

class Profile extends Component{
  render() {
    return (
      <div>
        <Row>
          <Col xs={{ span: 12, offset: 6 }} lg={{ span: 22, offset: 10 }} style={{paddingTop:"20px"}}>
            <Avatar size={64} icon="user" />
          </Col>
          <Col xs={{ span: 12, offset: 6 }} lg={{ span: 21, offset: 0 }} style={{paddingTop:"20px"}}>
            <h1 style={{textAlign: "center"}}>Aditya Gupta</h1>
            <h2 style={{textAlign: "center"}}>Student</h2>
          </Col>
        </Row>
      </div>
    );
  }
}
export default Profile;
