import React, {Component} from 'react'
import { Avatar } from 'antd';
import { Row, Col } from 'antd';
import { Checkbox } from 'antd';

class Profile extends Component{
  onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }
  render() {
    return (
      <div>
        <Row>
          <Col xs={{ span: 12, offset: 6 }} lg={{ span: 22, offset: 10 }} style={{paddingTop:"20px"}}>
            <Avatar size={64} icon="user" />
          </Col>
          <Col xs={{ span: 12, offset: 6 }} lg={{ span: 21, offset: 0 }} style={{paddingTop:"20px"}}>
            <h1 style={{textAlign: "center"}}>Aditya Gupta</h1>
            <h2 style={{textAlign: "center"}}>Bounty setter?</h2>
            <Checkbox onChange={this.onChange}>Checkbox</Checkbox>
          </Col>
        </Row>
      </div>
    );
  }
}
export default Profile;
