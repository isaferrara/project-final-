import React, {useState, useEffect}from 'react'
import { getAllPaths, getSinglePath, updatePath} from '../services/paths.js'
import { getSingleTopic, getAllTopic} from '../services/topics.js'
import { Checkbox, Button, Modal, Form,  Card, Divider} from 'antd'
import { Link } from 'react-router-dom'
import { useContextInfo } from '../hooks/context'
import { Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

const { Search } = Input;

const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />
  );



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
            const interestPaths = data.filter((info)=>
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

        async function onSearch (value) {
            let search= value.target.value
            
            const {data} = await getAllPaths()
            let allTitles= data.map(info=> info)

            let allPaths= allTitles.filter(info=> info.title.toLowerCase()===search)
            console.log(allPaths, 'titles') 
            setOtherPaths(allPaths)
        
          }

        const showModal = () => {
            setIsModalVisible(true);
          };
        
        const handleOk = (values) => {
            setIsModalVisible(false);
            async function getPaths() {
            for(let i=0; i< values['checkbox-group'].length; i++){
                let idPath= values['checkbox-group'][i]._id

                let topicsPath= values['checkbox-group'][i].topics
                let newTopics=selectedTopics['checkbox-group']
                let accTopics=[...topicsPath , ...newTopics]

                    console.log(topicsPath, 'previous added')
                    console.log(newTopics, 'selected topics')


                    const {data} =await updatePath(idPath, 
                        {title: values['checkbox-group'][i].title,
                        description: values['checkbox-group'][i].description,
                        category:values['checkbox-group'][i].category,
                        topics: accTopics,
                        users:user._id
                        })
                        setChanges(true)
                    }
                }
                getPaths()
            }
        
        const handleCancel = () => {
            setIsModalVisible(false);
        }

        return (
            <div>
             {/* User´s paths */} 
            <div style={{ padding: '1rem 3rem', display:'flex', flexDirection:'row' }}>
                <div style={{ padding: '1rem 3rem', display:'flex', flexDirection:'column'  }}>
                <Link to='/path/create'> Create new path</Link>

                    <div>
                    <h1>Your paths</h1> 
                    </div>
                    <div style={{ padding: '1rem', display:'flex', flexDirection:'column'  }}>    
                        {pathsy?.map(path => (
                        <div style={{borderRadius:' 20px ', margin:'10px',  width:'350px'}}>
                        <Card hoverable   >
                            <Link to={`/path/${path._id}`}> <h1>{path.title}</h1> </Link>  
                            <Divider>Topics</Divider>
                            {path.topics?.map((topic, index ) => (
                                        <p>{topic.title}</p>
                            ))}
                        </Card>
    
                        </div>        
                        ))}
                    </div>
                </div>

                {/* Other paths section */} 
                <div style={{ padding: '1rem 3rem'}}>

                 {/* searchbar */}
                <Search placeholder="input search text" onChange={onSearch} allowClear style={{ width: 500 }} />                        <br />         

                    <h1>Other paths</h1>

                      {/* shoose any topic to add to own paths */} 
                    <div > 
                    <Form  onFinish={onFinish}>
                    <Button type="primary"  onClick={showModal} htmlType="submit" > Add to my paths  </Button> 
                    <Form.Item name="checkbox-group">

                        {/* show only paths that interest user*/} 
                        <Checkbox.Group > 
                            {otherPaths?.map(path => (
                                <div style={{ padding: '1rem', display:'flex', flexDirection:'column'  }} >
                                <Card hoverable >
                                <Link to={`/path/${path._id}`}> <h1>{path.title}</h1> </Link> 
                                <Divider>Topics</Divider>
                                <div style={{ padding: '1rem', display:'flex', flexDirection:'column', width:'350px' }} >
                                    {path.topics?.map((topic, index) => (
                                        <Checkbox value={topic}>
                                        <p>{topic.title}</p>
                                        </Checkbox>
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
        </div>
        )
    }

export default Dash

