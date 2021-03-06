import React from 'react'
import { createPath } from '../services/paths.js'
import { createTopic } from '../services/topics.js'
import LayoutDash from "../components/LayoutDash";



import {
    Row,
    Col,
    Form,
    Input,
    Button,
    Divider,
    Select,
    Space
} from 'antd'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import {useContextInfo} from '../hooks/context'

 const CreatePath = (props) => {
    const [form] = Form.useForm()
    const {user}= useContextInfo()

    const submitForm=  async (path) =>{ 
        const {data}= await createPath(
            {
            title: path.title,
            description:path.description,
            category: path.category,
            userId: user._id
        }
        )

        const {_id}= data
        path.topics? 
        await path.topics.map( topics=>{
            createTopic(
            {title:topics.title,
            objective: topics.objective,
            duration: topics.duration,
            content: topics.content,
            pathId:_id
            })
        }): path.topics=' '
        form.resetFields()
        props.history.push(`/dash/${path._id}`)
        } 


    return (
        <div>
         <LayoutDash >
            <Row>
        <Col span={24}>
        <h1>Add new path</h1> 
        <Divider />

        <Form form={form} layout="vertical" onFinish={submitForm} autoComplete="off">
            <Form.Item
            name="title"
            label="Title:"
            rules={[
            {
                required: true,
                message: 'Please input a title!',
            },
            ]}>
            <Input />
            </Form.Item>

            <Form.Item 
            name="description"
            label="Description:"
            rules={[
            {
                required: true,
                message: 'Please input a description!',
            }, 
            ]}>
              <Input.TextArea />
            </Form.Item>

            <Form.Item name="category" label="Category:">
                <Select>
                <Select.Option value="Web Dev">Web Development</Select.Option>
                <Select.Option value="Ux/Ui">Ux/Ui</Select.Option>
                <Select.Option value="Dev Ops">Dev Ops</Select.Option>
                <Select.Option value="Data Science">Data Science</Select.Option>
                <Select.Option value="Cyber Security">Cyber Security</Select.Option>
                </Select>
            </Form.Item>

            <Form.List name="topics">
        {(fields, { add, remove }) => (
            <>
                {fields.map(field => (
                <Space key={field.key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                    <Form.Item
                    {...field}
                    name={[field.name, 'title']}
                    fieldKey={[field.fieldKey, 'title']}
                    rules={[{ required: true, message: 'Missing first name' }]}
                    >
                    <Input placeholder="Title" />
                    </Form.Item>

                    <Form.Item
                    {...field}
                    name={[field.name, 'objective']}
                    fieldKey={[field.fieldKey, 'objective']}
                    rules={[{ required: true, message: 'Missing last name' }]}
                    >
                    <Input.TextArea placeholder="Objective" />
                    </Form.Item>

                    <Form.Item
                    {...field}
                    name={[field.name, 'duration']}
                    fieldKey={[field.fieldKey, 'duration']}
                    rules={[{ required: true, message: 'Missing title' }]}
                    >
                    <Input placeholder="Duration" />
                    </Form.Item>


                    <MinusCircleOutlined onClick={() => remove(field.name)} />
                </Space>
            ))}

                <Form.Item>
                <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                    Add Topic
                </Button>
                </Form.Item>
            </>
            )}
        </Form.List>

                <Button type="primary" block htmlType="submit">
                Create
                </Button>

            </Form>
            </Col>
        </Row>
        </LayoutDash>
        </div>
    )
}

export default CreatePath 