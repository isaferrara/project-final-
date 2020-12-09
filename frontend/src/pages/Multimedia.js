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



// *
// {contenty?
//     (<div>
//         <Form name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off" >

//     {/* insert text */}
//     <div style={{ display: 'flex', justifyContent:'center', flexDirection: 'column' }} >

//         <Form.List name="textContent">
//             {(fields, { add, remove }) => (
//             <>
//             <Form.Item>
//                 <Button  style={{width:'20vh',height:'5vh'}} type="dashed" onClick={() => add()} icon={<PlusOutlined />}>
//                     Add element
//                 </Button>
//             </Form.Item>
//             {fields.map(field => (
//             <Space key={field.key} style={{ display: 'flex', justifyContent:'center', flexDirection:'column', marginBottom: 8 }} align="baseline">
//                 <Form.Item
//                 {...field}
//                 name={[field.name, 'text']}
//                 fieldKey={[field.fieldKey, 'text']}
//                 style={{width:'80vh'}}
//                 >
//                 <Input.TextArea placeholder="Write something" bordered={false} style={{ backgroundColor:'white' }}/>
//                 </Form.Item>


//                 <div style={{ display: 'flex', justifyContent:'left', flexDirection:'row'}}>
//                 <Form.Item
//                 {...field}
//                 name={[field.name, 'link']}
//                 fieldKey={[field.fieldKey, 'link']}
//                 style={{width:'50vh'}}                    
//                 >
                 
//                 <Input placeholder="Video link (youtube)" bordered={false} style={{ backgroundColor:'white' }} value={<ReactPlayer url={field.link} /> } />
//                 </Form.Item>

//                 <Form.Item name="upload" valuePropName="fileList" getValueFromEvent={normFile} style={{ marginLeft:'30px' }} >
//                     <Upload name="logo" action="/upload.do" listType="picture">
//                     <Button icon={<UploadOutlined />}> Upload image</Button>
//                     </Upload>
//                 </Form.Item>

//                 <MinusCircleOutlined onClick={() => remove(field.name)}  style={{ marginLeft:'30px', fontSize: '25px', color: 'Brown'  }}/>
//                 </div>
//             </Space>
//             ))}
           
//         </>
//         )}
//     </Form.List>
//     </div>




//     <Form.Item style={{ marginTop: '10px'}}>
//         <Button type="primary" htmlType="submit">
//         Submit
//         </Button>
//     </Form.Item>
//     </Form>

//     <div style={{ display: 'flex', justifyContent:'left', marginTop: '10px'}}>
//        <p>{contenty.content}</p>         
//        <ReactPlayer url={video} />
//     </div>

//     </div>
//     ):(
//         <Skeleton active />
//     )}
//     </div>
// )



// useEffect(() => {
//     async function getInfoTopic() {
//         const {data} = await getSingleTopic(props.match.params.id)
//         !data.content? setContent('h'): setContent(data.content)
//      }
//     getInfoTopic()
//     }, [changes])

// const onFinish =  values => {
//     console.log(values, 'content')
    // for(let i=0; i< values.textContent.length; i++){
    //     let prevContent='contenty.content'

        // let newLink=values.textContent[i].link
        // setVideo(newLink)

        // let newText=values.textContent[i].text
        // setContent(newText)

        // let allContent=[prevContent, newText]
        // setChanges (true)

        // let accNew=[...contenty, video ]
        
        // console.log(newText, 'all')
        
        // const {data}= await updateTopic(props.match.params.id, {
        // title: contenty.title,
        // objective: contenty.objective,
        // duration: contenty.duration,
        // content:allContent,

    //     })
    //  setContent(data) 

// console.log('Received values of form:', data);
    
// }