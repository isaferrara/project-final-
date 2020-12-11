import React, {useState, useEffect}from 'react'
import { getAllPaths, updatePath} from '../services/paths.js'
import { Checkbox, Button, Modal, Form,  Card, Divider, Skeleton} from 'antd'
import { Link } from 'react-router-dom'
import { useContextInfo } from '../hooks/context.js'
import { Input } from 'antd';
import { createTopic } from '../services/topics.js'
import LayoutDash from "../components/LayoutDash";
const { Search } = Input;

const ExplorePaths = () => {
    const { user } = useContextInfo()
    //user´s paths
    const [pathsy, setPaths] = useState(null)
    //recommended paths
    const [otherPaths, setOtherPaths] = useState(null)
    const [selectedTopics, setSelectedTopics] = useState(null)
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [changes, setChanges] = useState(false);


    useEffect(() => {
        async function getPaths() {
            const {data} = await getAllPaths()
            //get only users path//
            const userPaths = data.filter((info)=>
                info.users[0]===user._id
            )
            //get recommended paths--users starts with all existing paths//
            data.filter((info)=>
            info.users[0]===user._id
        )
            setOtherPaths(data)
            setPaths(userPaths) 
        }
        getPaths()
        }, [changes])



        //on submit all the selected topics user is adding to paths
        const onFinish = values => {
                let copy = {...values}
                setSelectedTopics(copy)
        } 

        //search recommended paths
        async function onSearch (value) {
            let search= value.target.value
            const {data} = await getAllPaths()
            let allTitles= data.map(info=> info)
            let allPaths= allTitles.filter(info=> info.title.toLowerCase()===search)
            console.log(allPaths, 'titles') 
            setOtherPaths(allPaths)
          }

         //show modal to transfer topics 
        const showModal = () => {
            setIsModalVisible(true);
          };

          //on submit transfer topics to users paths
        const handleOk = (values) => {
            setIsModalVisible(false);

            async function getPaths() {
                //Check every path 
                let allPathsy=[]
            for(let i=0; i< values['checkbox-group'].length; i++){

                //Id of all selected paths
                let idPath= values['checkbox-group'][i]._id
                allPathsy.push(values['checkbox-group'][i])


                // all selected topics
                for(let i=0; i<selectedTopics['checkbox-group'].length; i++  ){             
                    let {data}=await createTopic({  
                        title:selectedTopics['checkbox-group'][i].title ,
                        objective:selectedTopics['checkbox-group'][i].objective ,
                        duration:selectedTopics['checkbox-group'][i].duration ,
                        content:selectedTopics['checkbox-group'][i].content , 
                        pathId: allPathsy
                    })
                        setChanges(true)
                        console.log(data.paths, 'path data')
                        console.log(data, 'newwww')
                    }
                }
               
            }
            getPaths()

    }
        const handleCancel = () => {
            setIsModalVisible(false);
        }
        return (
            <div style={{  display:'flex', flexDirection:'column', justifyContent:'content', width:'1400px'}}>

            <LayoutDash>
             {otherPaths?
                (
                    <div style={{borderRadius:' 20px ', margin:'10px', marginRight:'20px'}}>
                    <h1 style={{fontFamily:'Verdana', fontSize:'30px', paddingTop: '50px'}}><b>Find the best study paths</b></h1> 
                    {/* searchbar */}
                    <Search placeholder="input search text" onChange={onSearch} allowClear style={{ width: 500 }} />                        <br />         

                    <div style={{ display:'flex', flexDirection:'row', flexWrap: 'wrap' , justifyContent:'center' }}>    
                    

                        {/* shoose any topic to add to own paths */} 
                        <div style={{ display:'flex', flexDirection:'row', flexWrap: 'wrap' , justifyContent:'center' }}>    
                        <Form  onFinish={onFinish}>
                        <Button type="primary"  onClick={showModal} htmlType="submit" > Add to my paths  </Button> 
                        <Form.Item name="checkbox-group">
                            {/* show only paths that interest user*/} 
                            <Checkbox.Group > 
                                {otherPaths?.map(path => (
                                    <div style={{ padding: '1rem', display:'flex', flexDirection:'column'  }} >
                                    <Card hoverable  style={{backgroundColor: 'white', borderRadius:'10px', boxShadow: '3px 4px 25px -7px rgba(0,0,0,0.75)', width:'260px'}} >
                                    <Card type="inner" style={{ color:'white', backgroundColor:'#0B648A', borderRadius:'5px'}}>
                                        <Link to={`/path/explore/${path._id}`}> <h1>{path.title}</h1> </Link> 
                                    </Card>
                                    <Divider>Topics</Divider>
                                    <div style={{ padding: '1rem', display:'flex', flexDirection:'column', width:'350px' }} >
                                            {path.topics?.map((topic, index) => (
                                                <Card hoverable   >
                                                    <Checkbox value={topic}>
                                                    <Link to={`/topicdetails/${topic._id}`}>
                                                    <p>{topic.title}</p>
                                                    </Link>
                                                    </Checkbox>
                                                </Card> 
                                            ))}
                                    </div>
                                    </Card>    
                                    </div>   
                                    ))}
                            </Checkbox.Group>
                                    </Form.Item>
                            </Form>
                            {/* modal to select the path to add new topics to */} 
                            <Modal
                                title="Basic Modal"
                                visible={isModalVisible}
                                onCancel={handleCancel}
                                okText="Add"
                                cancelText="cancel"
                            >
                        <div > 
                        <Form  onFinish={handleOk}>
                            <Form.Item name="checkbox-group">
                            <Checkbox.Group > 
                                {pathsy?.map(path => (
                                <div>
                                    <Checkbox  value={path}>
                                        <h3>{path.title}</h3> 
                                    </Checkbox>
                                </div>        
                                ))}
                            </Checkbox.Group>
                            </Form.Item>
                            <Button type="primary"  htmlType="submit" > Add to my paths  </Button> 
                            </Form>
                            </div>
                            </Modal>
                        </div>
                    </div>
                </div>
                ):( 
                    <Skeleton active />
                )}
                
           
        </LayoutDash>
        </div>

        )
    }
export default ExplorePaths
