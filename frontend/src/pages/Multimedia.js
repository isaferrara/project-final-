import React from 'react'
import ReactPlayer from 'react-player/youtube'

const Multimedia = () => {

    let urlY='https://www.youtube.com/watch?v=lWQ69WX7-hA'

    return (<div>
        <h1>Video</h1>
    <ReactPlayer url={urlY} />
    </div>  
    )}


export default Multimedia;

//     useEffect(() => {
//         async function getInfoTopic() {
//             const {data} = await getSingleTopic(props.match.params.id)
//             setContent(data)
//             console.log(contenty, 'data')

//             setAllInfo(data.content)
//             console.log(allInfo, 'all info')

//             let arr=[]
//             for(let i=0; i<data.content.length; i++){
//                 if(data.content[i].slice(0, 8)==='https://'){
//                     arr.push(<ReactPlayer url={data.content[i]} />)
//                 }else{
//                     arr.push(data.content[i])
//                 }
//             }
//             setContents(arr)
//   // console.log(data)
//          }
//         getInfoTopic()
//         }, [changes])

        
//     const onFinish =  value => {
//         if(value.text){
//             console.log('si es texto')
//              setContents([...content, value.text])
//              setAllInfo([...allInfo, value.text])
//             // console.log(allInfo, 'allinfo')
//         }else{
//             setContents([...content, <ReactPlayer url={value.link} />])
//             setAllInfo([...content, value.link])
//         }

//         async function topicContent () {
//             const {data}= await updateTopic(props.match.params.id, {
//                 title: contenty.title,
//                 objective: contenty.objective,
//                 duration: contenty.duration,
//                 content:allInfo,
//                 })
//             setContent(data) 
//             console.log(data, 'aaaa')
//         }

//        topicContent () 
//         setContentForm(false) 
//         setLinkForm(false) 
//         setImgForm(false) 
//         form.resetFields()
//         setChanges (true)
//     };


//     function setContentForms(){
//         setContentForm(!contentForm)
//         }

//     function setLinkForms(){
//         setLinkForm(!linkForm)
//          }
//     function setImgsForms(){
//         setImgForm(!imgForm)
//     }

//     return (
//         <div style={{display:'flex', flexDirection:'column'}}>
//         {contenty?(
//             <div style={{width:'80vh'}}> 
//             <Form onFinish={onFinish} form={form}>
//                 <div style={{display:'flex', flexDirection:'row'}}>

//                 {/* BUTTONS */}

//                 <Form.Item name="text" >
//                     <Button  onClick={setContentForms} style={{width:'20vh',height:'5vh'}} type="dashed" icon={<PlusOutlined />}>
//                         Add text
//                     </Button>
//                 </Form.Item>

//                 <Form.Item name="text" >
//                     <Button onClick={setLinkForms}  style={{width:'20vh',height:'5vh'}} type="dashed" icon={<PlusOutlined />}>
//                         Add link
//                     </Button>
//                 </Form.Item>

//                 <Form.Item name="text" >
//                     <Button onClick={setImgsForms} style={{width:'20vh',height:'5vh'}} type="dashed" icon={<PlusOutlined />}>
//                         Add img
//                     </Button>
//                 </Form.Item>
//                 {/* <Button onClick={saveChanges}> Save</Button> */}
//              </div>

//                 {/* SHOW FORMS */}
//                 {contentForm && <TextContent {...contenty} /> }
//                 {linkForm && <LinkContent {...video} /> }
//                 {imgForm && <ImgContent {...img} /> }
//         </Form>
//         <h1>{contenty.title}</h1>
//             <div style={{display:'flex', justifyContent:'left', flexDirection:'column'}}>
//             <p><b>Objective:</b> {contenty.objective}</p>
//             <p><b>Duration:</b>  {contenty.duration}</p>
//         </div>
//             <Divider></Divider>
//                 {content && content }

//             </div>):(
//                 <Skeleton active />
//             )}

               
//         </div>
//     )
// }
// export default ContentTopic