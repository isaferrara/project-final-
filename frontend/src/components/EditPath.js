import React, {useState, useEffect} from 'react'
import { updatePath } from '../services/paths'
import { useHistory } from 'react-router-dom'
import { useContextInfo } from '../hooks/context'
import { 
    Form,
    Input,
    Button,
    Divider,
    Select,
    Skeleton,
    Card, 
    } from 'antd'
import { getSinglePath, deletePath } from '../services/paths.js'

const EditPath = (props) => {
    const { user } = useContextInfo()
    const [form] = Form.useForm()
    const history = useHistory()
    const [pathsy, setPaths] = useState(null)


    console.log(props)
    useEffect(() => {
        async function getPaths() {
            const {data} = await getSinglePath(props._id)
            setPaths(data) 
        }
        getPaths()
        }, [])


    async function handleSubmit(values) {
       const {data} =await updatePath(props._id, values)
       history.push(`/path/${props._id}`)
       setPaths(data)  
       props.setForms() 
    }

    async function cancelFn(){
        history.push(`/path/${props._id}`)
        props.setForms()
    }

    return (
<div style={{ padding: '1rem 3rem' }}>
<Form form={form} layout="vertical" onFinish={handleSubmit} autoComplete="off" initialValues={{
        title: props.title,
        description: props.description,
        category:props.category
        }}>
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
            <div>
        <Button type="primary" htmlType="submit">
            Update
        </Button>
        <Button type="primary" onClick={cancelFn}>
            Cancel
        </Button>
        </div>
        
        </Form>

    </div>
    )
}
export default EditPath