import React, {useState, useEffect} from 'react'
import { Typography, Skeleton, Divider, Card, Upload, Button, Modal,Form, Input, Space} from 'antd'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import ReactPlayer from 'react-player/youtube'
import axios from 'axios'
import {  getSingleTopic, updateTopic} from '../services/topics.js'
import { UploadOutlined, InboxOutlined, FontSizeOutlined } from '@ant-design/icons';

const cloudinaryAPI = 'https://api.cloudinary.com/v1_1/djjro5m0g/image/upload' 

export const ImgContent = (props) => {
    const [form] = Form.useForm()
    const [contenty, setContent] = useState(props)
 

    const normFile =  e => {
        if (Array.isArray(e)) {
          return e;
        }
        return e && e.fileList;
        };
    
    return (
        <div>
        {contenty?
        (<div>
                    <Form.Item name="upload" valuePropName="fileList" getValueFromEvent={normFile} style={{ marginLeft:'30px' }} >
                        <Upload name="logo" action="/upload.do" listType="picture">
                        <Button icon={<UploadOutlined />}> Upload image</Button>
                        </Upload>
                    </Form.Item>

                {/* SUBMIT BUTTON */}
                <div>
                        <Form.Item style={{ marginTop: '10px'}}>
                        <Button type="primary" htmlType="submit">
                        Submit
                        </Button>
                        </Form.Item>
                </div>

            </div>
            ):(
                <Skeleton active />
            )}
        </div>
    )
}
export default ImgContent