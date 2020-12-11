import React from 'react'
import { Row, Col, Form, Input, Button, Typography, Divider,message } from 'antd'
import { loginFn, profile } from '../services/auth'
import { useContextInfo } from '../hooks/context'
import authLayout from '../components/authLayout'

const { Title } = Typography

const googleUrl = process.env.NODE_ENV === 'development' ?
  "http://localhost:3000/auth/google" : '/auth/google'

const Login = ({ history }) => {
  const [form] = Form.useForm()
  const { login } = useContextInfo()

  async function handleSubmit(userInput) {
    /*const { data } = await loginFn(userInput)
    login(data);
    history.push(`/dash/${data._id}`)*/

    try {
      await loginFn(userInput)
      const {
        data: { user }
      } = await profile()
      console.log(user)
      login(user)
      history.push(`/dash/${user._id}`)
    } catch (err) {
      message.error("Error with email or password")
    }
  }
  return (
    <div style={{background: '#004a6e', width: '100%', height:'800px', paddingTop:'0'}}>
    <div style={{ padding: '100px 304px'}}>
    <div style={{padding: '50px', background: 'white', borderRadius: '20px', background: '#F8F8F8'}}> 
    <Row>
      <Col span={24}>
        <Title level={1} style={{color:'gray'}}>Login to empower your skills!</Title>
      </Col>
      <Divider />
      <Col span={24}>
        <Form layout="vertical" form={form} onFinish={handleSubmit}  style={{ borderRadius: '20px'}}>
          <Form.Item name='username' label="Username:" style={{color:'gray'}}>
            <Input  style={{ borderRadius: '20px', background:'white'}}/>
          </Form.Item>
          <Form.Item name='password' label="Password:" style={{color:'gray'}}>
            <Input.Password  />
          </Form.Item>
          <Button type="primary" block htmlType="submit" style={{color:'white'}}>
            Login
          </Button>
        </Form>
        <Divider>
          Or
        </Divider>
        <a href={googleUrl}>
          <Button block>Login with Google</Button>
        </a>
      </Col>
    </Row>
    </div>
  </div>
  </div>
  )
}

export default Login
