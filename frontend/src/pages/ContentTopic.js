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
import LayoutDash from "../components/LayoutDash";


export const ContentTopic = (props) => {

    //GENERAL
    const [form] = Form.useForm()
    const [changes, setChanges] = useState(false)

    //TOPICS CONTENT INFO
    //shows content on screen
    const [content, setContents] = useState([])

    // paths data
    const [contenty, setContent] = useState(null)

       //saves content on database
       const [allInfo, setAllInfo] = useState([])

    //CONTENT, LINKS OR IMG
    const [txt, setTxt] = useState(null)
    const [video, setVideo] = useState(null)
    const [img, setImg] = useState(null)

    //SET FORMS//
    const [contentForm, setContentForm] = useState(false)
    const [imgForm, setImgForm] = useState(false)
    const [linkForm, setLinkForm]=useState(false)


    useEffect(() => {
                async function getInfoTopic() {
                    const {data} = await getSingleTopic(props.match.params.id)
                    setContent(data)
                    setAllInfo(data.content)
                    setContents(data.content)
        
                    let arr=[]
                    for(let i=0; i<data.content.length; i++){
                        console.log('2')
                        if(data.content[i].slice(0, 8)==='https://'){
                            arr.push(<ReactPlayer url={data.content[i]} />)
                        }else{
                            arr.push(data.content[i])
                        }
                    }
                    setContents(arr)
                 }
                getInfoTopic()
                }, [changes])
        
                
            const onFinish =  value => {
                let contentArray= []
                let allInfoArray= []
                async function topicContent () {
                console.log(value, 'value')
                    if(value.text){
                        contentArray=[...content, value.text]
                        allInfoArray=[...allInfo, value.text]

                    }else{
                        contentArray=[...content, <ReactPlayer url={value.link} />]
                        allInfoArray=[...allInfo, value.link]
                    }
                    
                    setContents(contentArray)                    
                    setAllInfo(allInfoArray)
  

                    const {data}= await updateTopic(props.match.params.id, {
                        title: contenty.title,
                        objective: contenty.objective,
                        duration: contenty.duration,
                        content:allInfoArray,
                        })
                    setContent(data) 
                }
        
               topicContent () 
                setContentForm(false) 
                setLinkForm(false) 
                setImgForm(false) 
                form.resetFields()
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
                <div style={{display:'flex', flexDirection:'column'}}>
                    <LayoutDash>
                {contenty?(
                    <div style={{width:'80vh'}}> 
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

                     </div>
        
                        {/* SHOW FORMS */}
                        {contentForm && <TextContent {...contenty} /> }
                        {linkForm && <LinkContent {...video} /> }
                        {imgForm && <ImgContent {...img} /> }
                </Form>
                <h1>{contenty.title}</h1>
                    <div style={{display:'flex', justifyContent:'left', flexDirection:'column'}}>
                    <p><b>Objective:</b> {contenty.objective}</p>
                    <p><b>Duration:</b>  {contenty.duration}</p>
                </div>
                    <Divider></Divider>
                        {content && content }
        
                    </div>):(
                        <Skeleton active />
                    )}
        
                </LayoutDash>
                </div>
            )
        }
        export default ContentTopic