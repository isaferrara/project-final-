import React, { useState } from 'react'
import { Row, Col, Form, Input, Button, Typography, Divider, Upload } from 'antd'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import {PasswordInput} from 'antd-password-input-strength'
import { signupFn } from '../services/auth'
import axios from 'axios'

const { Title } = Typography

const cloudinaryAPI = 'https://api.cloudinary.com/v1_1/djjro5m0g/image/upload' 

const googleUrl = process.env.NODE_ENV === 'development' ?
  "http://localhost:3000/auth/google" : '/auth/google'

const Signup = ({ history }) => {
  const [form] = Form.useForm()
  const [img, setImg] = useState(null)
  const [loading, setLoading] = useState(null)

  async function handleSubmit(userInput) {
    //await signupFn(userInput)
    //history.push('/login')
    //console.log(userInput)
    const usr = {...userInput, image: img}
    const {data : newUsr} = await signupFn(usr)
    console.log(newUsr)
    history.push('/login')
  }

  const onReset = () => {
    form.resetFields();
  };

  async function handleUploadFile(file){
    //console.log(info)
    setLoading(true)
    const data = new FormData()

    data.append('file', file)
    data.append('upload_preset', 'project-final-')

    const {data: {secure_url}} = await axios.post(cloudinaryAPI, data)

    setImg(secure_url)
    setLoading(false)
  }

  const uploadButton = (
      <div>
        {loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div style={{ marginTop: 8 }}>Upload</div>
      </div>
    );

  return (
    <div style={{background: '#004a6e', width: '100%', height:'1200px', paddingTop:'0'}}>
    <div style={{ padding: '100px 304px'}}>
    <div style={{padding: '50px', background: 'white', borderRadius: '20px', background: '#F8F8F8'}}> 
    <Row>
      <Col span={24}>
        <Title level={1} style={{ padding:'0'}}>Signup</Title>
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

          <Form.Item name='image' label="Image:" rules={[{ required: true, message: 'Please add an image!' }]}>
            <Upload 
              name="image"
              showUploadList={false}
              beforeUpload={handleUploadFile}
              listType="picture-card"
            >
              {img ? <img src={img} style={{width : '100%'}} /> : uploadButton}
            </Upload>  
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
    </div>
  </div>
  </div>
  )
}

export default Signup
