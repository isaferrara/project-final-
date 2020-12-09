import React, {useState, useEffect} from 'react'
import { Typography, Skeleton, Divider, Card, Upload, Button, Modal,Form, Input, Space} from 'antd'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import ReactPlayer from 'react-player/youtube'
import axios from 'axios'
import {  getSingleTopic, updateTopic} from '../services/topics.js'
import { UploadOutlined, InboxOutlined, FontSizeOutlined } from '@ant-design/icons';

const cloudinaryAPI = 'https://api.cloudinary.com/v1_1/djjro5m0g/image/upload' 

export const LinkContent = (props) => {
    const [form] = Form.useForm()
    const [contenty, setContent] = useState(props)
    const [video, setVideo] = useState(null)
    const [pathsy, setPath] = useState(props)
    const [changes, setChanges] = useState(false)


    return (
        <div>
        {contenty?
        (<div>
                    <Form.Item name="link" >
                    <Input placeholder="Video link (youtube)" bordered={false} style={{ backgroundColor:'white' }} value={<ReactPlayer /> } />
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
export default LinkContent