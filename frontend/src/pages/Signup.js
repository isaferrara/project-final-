import React from 'react'
import { Row, Col, Form, Input, Button, Typography, Divider } from 'antd'
import {PasswordInput} from 'antd-password-input-strength'
import { signupFn } from '../services/auth'

const { Title } = Typography

const googleUrl = process.env.NODE_ENV === 'development' ?
  "http://localhost:3000/auth/google" : '/auth/google'

const Signup = ({ history }) => {
  const [form] = Form.useForm()

  async function handleSubmit(userInput) {
    await signupFn(userInput)
    history.push('/login')
  }

  const onReset = () => {
    form.resetFields();
  };

  return (
    <Row>
      <Col span={24}>
        <Title level={1}>Signup</Title>
      </Col>
      <Divider />
      <Col span={24}>
        <Form layout="vertical" form={form} onFinish={handleSubmit}>
          <Form.Item name='username' label="Username:" rules={[{ 
            required: true, message: 'Please input your username!' }]}>
            <Input />
          </Form.Item>

          <Form.Item name='password' label="Password:" rules={[{ required: true, message: 'Please input your password!' }]} hasFeedback>
            <PasswordInput />
          </Form.Item>

          <Form.Item name='email' label="Email:" rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
          ]}>
            <Input />
          </Form.Item>
          
          <Form.Item name='name' label="Name:" rules={[{ required: true, message: 'Please input your name!' }]}>
            <Input/>  
          </Form.Item>

          <Button type="primary" block htmlType="submit">
            Signup
          </Button>

          <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
        </Form>
        <Divider>
          Or
        </Divider>
        <a href={googleUrl}>
          <Button block>Sign up with Google</Button>
        </a>
      </Col>
    </Row>
  )
}

export default Signup
