import React, {useState, useEffect}from 'react'
import { getAllPaths, updatePath} from '../services/paths.js'
import { Checkbox, Button, Modal, Form,  Card, Divider, Skeleton} from 'antd'
import { Link } from 'react-router-dom'
import { useContextInfo } from '../hooks/context.js'
import { Input } from 'antd';
import { createTopic } from '../services/topics.js'
import LayoutDash from "../components/LayoutDash";
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
            <LayoutDash>
            <div>
             {/* User´s paths */} 
             {user? (
            <div style={{ padding: '1rem 3rem', display:'flex', flexDirection:'row' }}>
                <div style={{ padding: '1rem 3rem', display:'flex', flexDirection:'column'  }}>
                <Link to='/path/create'> Create new path</Link>
                    <div>
                    <h1>Your paths</h1> 
                    </div>
                    <div style={{ padding: '1rem', display:'flex', flexDirection:'column'  }}>    
                        {pathsy?.map(path => (
                        <div style={{borderRadius:' 20px ', margin:'10px',  width:'350px'}}>
                        <h2>{path._id}</h2>
                        <Card hoverable   >
                            <Link to={`/path/${path._id}`}> <h1>{path.title}</h1> </Link>  
                            <Divider>Topics</Divider>
                            {path.topics?.map((topic, index ) => (
                                <Card hoverable   >
                                        <p>{topic.title}</p>
                                        <p>{topic._id}</p>
                                </Card>        
                            ))}
                        </Card>
                        </div>        
                        ))}
                    </div>
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