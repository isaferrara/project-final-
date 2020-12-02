import React from 'react'
import { Row, Col, Form, Input, Button, Typography, Divider } from 'antd'
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

    return (
        <Row>
        <Col span={24}>
            <Title level={1}>Signup</Title>
        </Col>
        <Divider />
        <Col span={24}>
            <Form layout="vertical" form={form} onFinish={handleSubmit}>
            <Form.Item name='email' label="Email:">
                <Input />
            </Form.Item>
            <Form.Item name='password' label="Password:">
                <Input.Password />
            </Form.Item>
            <Button type="primary" block htmlType="submit">
                Signup
            </Button>
            </Form>
            <Divider>
            Or
            </Divider>
            <a href={googleUrl}>
            <Button block>Singup with Google</Button>
            </a>
        </Col>
        </Row>
    )
}

export default Signup
