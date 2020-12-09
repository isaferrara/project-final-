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

    //TOPICS CONTENT INFO
    //shows content on screen
    const [content, setContents] = useState([])

   //saves content on database
    const [allInfo, setAllInfo] = useState([])

    // paths data
    const [contenty, setContent] = useState(null)

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
            for(let i=0; i<allInfo.length; i++){
                if(allInfo[i].slice(0, 8)==='https://'){
                    arr.push(<ReactPlayer url={allInfo[i]} />)
                }else{
                    arr.push(allInfo[i])
                }
            }
            setContents(arr)
            console.log(content)   

  // console.log(data)
         }
        getInfoTopic()
        }, [changes])

        
    const onFinish =  value => {
        if(value.text){
            console.log('si es texto')
             setContents([...content, value.text])
             setAllInfo([...allInfo, value.text])
            console.log(allInfo, 'allinfo')
        }else{
            setContents([...content, <ReactPlayer url={value.link} />])
            setAllInfo([...content, value.link])
        }

        async function topicContent () {
            const {data}= await updateTopic(props.match.params.id, {
                title: contenty.title,
                objective: contenty.objective,
                duration: contenty.duration,
                content:allInfo,
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

                <Form.Item name="text" >
                    <Button onClick={setImgsForms} style={{width:'20vh',height:'5vh'}} type="dashed" icon={<PlusOutlined />}>
                        Add img
                    </Button>
                </Form.Item>
                {/* <Button onClick={saveChanges}> Save</Button> */}
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
                {content}

            </div>):(
                <Skeleton active />
            )}

               
        </div>
    )
}
export default ContentTopic