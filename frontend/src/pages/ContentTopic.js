import React, {useState, useEffect} from 'react'
import ReactPlayer from 'react-player/youtube'

//ants
import { Typography, Skeleton, Divider, Card, Upload, Button, Modal,Form, Input, Space} from 'antd'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

//services
import {  getSingleTopic, updateTopic} from '../services/topics.js'

//components
import TextContent from '../components/TextContent'
import LinkContent from '../components/LinkContent'
import ImgContent from '../components/ImgContent'



export const ContentTopic = (props) => {

    //GENERAL
    const [form] = Form.useForm()
    const [changes, setChanges] = useState(false)

    //TOPICS OR PATHS
    const [pathsy, setPath] = useState(props)
    const [content, setContents] = useState([])

    //CONTENT, LINKS OR IMG
    const [contenty, setContent] = useState(null)
    const [video, setVideo] = useState(null)
    const [img, setImg] = useState(null)

    //SET FORMS//
    const [contentForm, setContentForm] = useState(false)
    const [imgForm, setImgForm] = useState(false)
    const [linkForm, setLinkForm]=useState(false)

    let allInfo=[]

    useEffect(() => {
        async function getInfoTopic() {
            const {data} = await getSingleTopic(props.match.params.id)
            !data.content? setContent('h'): setContent(data.content)
            setContent(data)
         }
        getInfoTopic()
        }, [changes])


        
    const onFinish = value => {
        setContentForm(false) 
        setLinkForm(false) 
        setImgForm(false) 
        form.resetFields()

        value.text? setContents(content.concat(value.text)) : setContent(contenty)
       value.link? setContents(content.concat(<ReactPlayer url={value.link} />)) : setContent(contenty) 

       // setImg(content.concat(<ContentForm value={value.link}/>));

        async function topicContent () {
            const {data}= await updateTopic(props.match.params.id, {
                title: contenty.title,
                objective: contenty.objective,
                duration: contenty.duration,
                content:content,
                })
            setContent(data) 
        }

    topicContent () 
    setChanges (true)
    };


    function setContentForms(){
        setContentForm(!contentForm)
        }

    function setLinkForms(){
        setLinkForm(!linkForm)
         }
    function setImgsForms(){
        setImgForm(!imgForm)
    }

    return (
        <div>
            <Form onFinish={onFinish} form={form}>
                <div style={{display:'flex', flexDirection:'row'}}>

                {/* BUTTONS */}

                <Form.Item name="text" >
                    <Button  onClick={setContentForms} style={{width:'20vh',height:'5vh'}} type="dashed" icon={<PlusOutlined />}>
                        Add text
                    </Button>
                </Form.Item>

                <Form.Item name="text" >
                    <Button onClick={setLinkForms}  style={{width:'20vh',height:'5vh'}} type="dashed" icon={<PlusOutlined />}>
                        Add link
                    </Button>
                </Form.Item>

                <Form.Item name="text" >
                    <Button onClick={setImgsForms} style={{width:'20vh',height:'5vh'}} type="dashed" icon={<PlusOutlined />}>
                        Add img
                    </Button>
                </Form.Item>
                
             </div>

                {/* SHOW FORMS */}
                {contentForm && <TextContent {...contenty} /> }
                {linkForm && <LinkContent {...video} /> }
                {imgForm && <ImgContent {...img} /> }
        </Form>
                {content}

               
        </div>
    )
}
export default ContentTopic