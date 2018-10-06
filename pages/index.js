import React, {Component} from 'react'
import { Input } from 'antd'
import { Row, Col } from 'antd';
import { Button } from 'antd';
import Link from 'next/link'

class Index extends Component{
  state = {
    loading: false,
    iconLoading: false,
  }

  enterLoading = () => {
    this.setState({ loading: true });
  }

  enterIconLoading = () => {
    this.setState({ iconLoading: true });
  }
  
  render() {
    return (
      <div>
        <Row>
          <Col xs={{ span: 12, offset: 6 }} lg={{ span: 12, offset: 6 }}>
            <h1>Login</h1>
          </Col>
          <Col xs={{ span: 12, offset: 6 }} lg={{ span: 12, offset: 6 }}>
            <Input placeholder="enter email" type='email' />
          </Col>
        </Row>
        <Row>
          <Col xs={{ span: 12, offset: 6 }} lg={{ span: 12, offset: 6 }}>
            <Input placeholder="enter password" type='password' />
          </Col>      
        </Row>
        <Row>
        <br/>
        <Col xs={{ span: 12, offset: 6 }} lg={{ span: 12, offset: 6 }}>
         <Link href = '/signup'><a> Don't have an Account?</a></Link> 
        </Col>
        <Col xs={{ span: 12, offset: 6 }} lg={{ span: 12, offset: 6 }}>
         <Link href='/chat'><Button type="primary" loading={this.state.loading} onClick={this.enterLoading}>
            Login 
          </Button>
          </Link>
        </Col>
        </Row>
        
      </div>
    );
  }
}
export default Index;
