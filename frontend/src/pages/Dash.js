import React, {useState, useEffect}from 'react'
import { getAllPaths, updatePath} from '../services/paths.js'
import { Typography, Button, Modal, Form,  Card, Divider, Skeleton} from 'antd'
import { Link } from 'react-router-dom'
import { useContextInfo } from '../hooks/context.js'
import { Input } from 'antd';
import { createTopic } from '../services/topics.js'
import LayoutDash from "../components/LayoutDash";
import CreatePath from './CreatePath.js'
const { Title } = Typography
const { Search } = Input;

const Dash = () => {
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

        const handleCancel = () => {
            setIsModalVisible(false);
           
        }

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
            setPaths(allPaths)
            if(value===' '){console.log(pathsy) 
                setPaths(data)}
        
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

                    }
                }
               
            }
            getPaths()

    }

        return (
            <LayoutDash>
            <div>
             {/* User´s paths */} 
             {user? (
                <div style={{ padding: '1rem 3rem', display:'flex', flexDirection:'column' }}>
                    <h1 style={{fontFamily:'Verdana', fontSize:'30px'}}><b>Your study paths</b></h1> 
                <div style={{ padding: '1rem 3rem', display:'flex', flexDirection:'column'}}>
                <Button type='primary' ><Link to={'/path/create'}  style={{fontFamily:'Arial', fontSize:'20px', color:'white', createBottom: '10px'}}> <b>Create new path </b> </Link> </Button>
                    <div style={{marginTop:'50px'}}>
                    <Search placeholder="What are you looking for?" onChange={onSearch} allowClear style={{ width: 500 }} />                        <br />         
                    </div>
                <div style={{ padding: '1rem', display:'flex', flexDirection:'row', flexWrap: 'wrap'  }}>    
                        {pathsy?.map(path => (
                        <div style={{borderRadius:' 20px ', margin:'10px',  width:'240px'}}>
                        <Card hoverable  style={{backgroundColor: 'white', borderRadius:'10px', boxShadow: '3px 4px 25px -7px rgba(0,0,0,0.75)'}} >
                            <Link to={`/path/${path._id}`}>
                                <div >
                                    <Card type="inner" style={{ color:'white', backgroundColor:'#0B648A', borderRadius:'5px'}}>
                                        <Title style={{ color:'white', fontFamily:'arial', fontWeight:'lighter', fontSize:'17px'}} level={2} >{path.title}</Title>
                                    </Card>
                                </div> 
                            </Link>  
                            <Divider>Topics</Divider>
                           
                            {path.topics?.map((topic, index ) => (
                                <Link to={`/topic/${topic._id}`}>
                                <Card hoverable  style={{ marginTop:'15px', width:'180px', height:'70px', margin:'0px', padding:'0px', borderColor: '#1F79B5'}}  >
                                        <b><p style={{ margin:'0px', padding:'0px', color:'gray'}}>{topic.title}</p></b>
                                </Card>  
                                </Link>      
                            ))}
                            
                        </Card>
                        </div>        
                        ))}
                    </div>
                    <Modal
                        footer={null}
                        title="Create new path"
                        visible={isModalVisible}
                        onCancel={handleCancel}
                        cancelText="cancel"
                            >
                            <CreatePath handleCancel={handleCancel}/>
                            </Modal>
                </div>
                
            </div>
            ):( 
                <Skeleton active />
            )}
            
        </div>
        </LayoutDash>
        )
    }
export default Dash