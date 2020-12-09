import React, {useState, useEffect} from 'react'
import { Skeleton, Button, Form, Input, } from 'antd'
import {  getSingleTopic, updateTopic} from '../services/topics.js'


export const TextContent = (props) => {
    const [form] = Form.useForm()
    const [contenty, setContent] = useState(props)

    return (
        <div>
        {contenty?
            (<div>
                <Form.Item name='text'>
                <Input.TextArea placeholder="Write something" bordered={false} style={{ backgroundColor:'white' }} />
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
export default TextContent