import React from 'react'
import {useState} from 'react'
import { Form, Input, Button, Upload } from 'antd'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { updateFn } from '../services/auth'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const cloudinaryAPI = 'https://api.cloudinary.com/v1_1/djjro5m0g/image/upload' 

function UpdateProfileForm({
    username,
    name,
    email,
    _id, image
    }) {
    const [form] = Form.useForm()
    //const [user, setUser] = useState()
    const [img, setImg] = useState(null)
    const [loading, setLoading] = useState(null)

    async function handleSubmit(values) {
        //await updateFn(_id, values)
        //setUser(values)
        //console.log(values)
        //history.push('/')

        const updatedUsr = {...values, image: img}
        const {data: newUpdatedUsr} = await updateFn(_id, updatedUsr)
        console.log(newUpdatedUsr)
    //const usr = {...userInput, image: img}
    //const {data : newUsr} = await signupFn(usr)
    //console.log(newUsr)
    //history.push('/login')
    }

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
        <Form form={form} layout="vertical" onFinish={handleSubmit} initialValues={{
        username,
        name,
        email, image
        }}>
        <Form.Item name="username" label="Username:">
            <Input />
        </Form.Item>
        <Form.Item name="email" label="Email:">
            <Input />
        </Form.Item>
        <Form.Item name="name" label="Name:">
            <Input />
        </Form.Item>
        <Form.Item name='image' label="Image:" >
            <Upload 
                name="image"
                showUploadList={false}
                beforeUpload={handleUploadFile}
                listType="picture-card"
                >
                {img ? <img src={img} style={{width : '100%'}} /> : uploadButton}
            </Upload>  
        </Form.Item>
        <Button block type="primary" htmlType="submit">
            Update
        </Button>
        </Form>
    )
}

export default UpdateProfileForm