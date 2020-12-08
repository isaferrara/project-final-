import React, {useState, useEffect} from 'react'
import { Typography, Skeleton, Divider, Card, Upload, Button, Modal, Form, Input, Space} from 'antd'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { useContextInfo } from '../hooks/context'
import {  getSingleTopic, updateTopic} from '../services/topics.js'
import { UploadOutlined, InboxOutlined, FontSizeOutlined } from '@ant-design/icons';



const normFile = e => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };



export const ContentTopic = (props) => {
    const [form] = Form.useForm()
    const [contenty, setContent] = useState(props)
    const [pathsy, setPath] = useState(props)
    const [changes, setChanges] = useState(false)

    useEffect(() => {
        async function getInfoTopic() {
            const {data} = await getSingleTopic(props.match.params.id)
            setContent(data) 
         }
        getInfoTopic()
        }, [changes])

    const onFinish = async values => {
        
        for(let i=0; i< values.textContent.length; i++){
            
            let prevContent=contenty.content
            // console.log(prevContent, 'prev')
            let newContent=values.textContent[i].first
            console.log(newContent, 'new')
            let accTopics=[...prevContent ,'', ...newContent]
            // console.log(accTopics, 'all')
            
            const {data}= await updateTopic(props.match.params.id, {
            title: contenty.title,
            objective: contenty.objective,
            duration: contenty.duration,
            content:accTopics,

            })
         setChanges (true)
        setContent(data) 

    console.log('Received values of form:', data);
        }
    }


    return (
        <div>
        <h1> </h1>
        <Form name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off">


        {/* insert text */}
            <Form.List name="textContent">
                {(fields, { add, remove }) => (
                <>
                <div style={{border:'lightgray 1px dashed', padding:'10px', display:'flex', justifyContent:'space-between'}}>
                <Form.Item>
                    <Button  style={{width:'20vh',height:'15vh'}} type="dashed" onClick={() => add()} icon={<PlusOutlined />}>
                    <FontSizeOutlined />
                        Add text
                    </Button>
                </Form.Item>

            {/* drag image */}
                <Form.Item style={{width:'20vh',height:'15vh'}}>
                    <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
                    <Upload.Dragger name="files" action="/upload.do">
                        <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                        </p>
                        <p >Click or drag file to this area to upload</p>
                    </Upload.Dragger>
                    </Form.Item>
                </Form.Item>


                {/* Video */}
                <Form.Item>
                <Button style={{width:'20vh',height:'15vh'}} type="dashed" onClick={() => add()} icon={<PlusOutlined />}>
                    Add Link
                </Button>
                </Form.Item>


                </div>
                {fields.map(field => (
                <Space key={field.key} style={{ display: 'flex', justifyContent:'center', marginBottom: 8 }} align="baseline">
                    <Form.Item
                    {...field}
                    name={[field.name, 'first']}
                    fieldKey={[field.fieldKey, 'first']}
                    rules={[{ required: true, message: 'Missing first name' }]}
                    style={{width:'80vh'}}
                    >
                    <Input.TextArea placeholder="First Name" />
                    </Form.Item>
                    <MinusCircleOutlined onClick={() => remove(field.name)} />
                </Space>
                ))}

            </>
            )}
        </Form.List>
        <Form.Item style={{ marginTop: '10px'}}>
            <Button type="primary" htmlType="submit">
            Submit
            </Button>
        </Form.Item>
        </Form>

        <div style={{ display: 'flex', justifyContent:'left', marginTop: '10px'}}>
           <p>{contenty.content}</p>         


        </div>
        </div>
    )
}
export default ContentTopic