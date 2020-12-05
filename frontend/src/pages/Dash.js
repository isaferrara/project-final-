import React, {useState, useEffect}from 'react'
import { getAllPaths} from '../services/paths.js'
import { getSingleTopic, getAllTopic} from '../services/topics.js'
import { Checkbox, Button, Modal, Form,  Card} from 'antd'
import { Link } from 'react-router-dom'
import { useContextInfo } from '../hooks/context'


const Dash = () => {
    const [pathsy, setPaths] = useState(null)
    const [otherPaths, setOtherPaths] = useState(null)
    const [selectedTopics, setSelectedTopics] = useState(null)
    const { user } = useContextInfo()
    const [isModalVisible, setIsModalVisible] = useState(false);


    useEffect(() => {
        async function getPaths() {
            const {data} = await getAllPaths()
            const userPaths = data.filter((info)=>
                info.users[0]===user._id
            )

            setOtherPaths(data)
            setPaths(userPaths) 
        }
        getPaths()
        }, [])

        function handleSubmit(props) {
            async function getSelectedTopics(){
                let copy={}
                    const {data}= await getSingleTopic(props)
                    copy = {...data}

                //     const {data}= await getAllTopic()
                //     const userTopics = data.filter((info)=>
                //     info._id===props.target.id
                // ) 
                console.log(props)
                // console.log(data)
            
                    setSelectedTopics(copy)
            }
            getSelectedTopics()
        }
   
        function transferTopics(props){
        }


        const showModal = () => {
            setIsModalVisible(true);
          };
        
        const handleOk = () => {
            
            setIsModalVisible(false);

          };
        
          const handleCancel = () => {
            setIsModalVisible(false);
          }

        return (
            <div>
            <Link to='/path/create'> Create new path</Link>
            <div style={{ padding: '1rem 3rem', display:'flex', flexDirection:'row' }}>
                <div style={{ padding: '1rem 3rem', display:'flex', }}>
                    <h1>Your paths</h1> 
                    <div >    
                        {pathsy?.map(path => (
                        <div style={{border:' 1px black solid', margin:'10px'}}>
                            <Link to={`/path/${path._id}`}> <h1>{path.title}</h1> </Link>  
                            {path.topics?.map(({title}) => (
                            <p>{title}</p> ))}
                        </div>        
                        ))}
                    </div>
                </div>
                <div style={{ padding: '1rem 3rem', display:'flex', }}>
                    <h1>Other paths</h1> 
                    <div > 
                    <Button type="primary" onClick={showModal}  > Add to my paths  </Button>  

                        {otherPaths?.map(path => (
                        <div style={{border:' 1px black solid', margin:'10px'}} >
                            <Link to={`/path/${path._id}`}> <h1>{path.title}</h1> </Link>  
                           
                            {path.topics?.map((topic) => (
                                <div> 
                                <Checkbox onChange={handleSubmit} id={topic}>
                                    <h3>{topic.title}</h3> 
                                    </Checkbox>

                                </div>
                            ))}

                        </div>   
                      
                        ))}

                        <Modal
                            title="Basic Modal"
                            visible={isModalVisible}
                            onOk={handleOk}
                            onCancel={handleCancel}
                            okText="Add"
                            cancelText="cancel"
                        >
                    <div >    
                        {pathsy?.map(path => (
                        <div>
                        <Checkbox onChange={transferTopics} path={path}>
                            <h3>{path.title}</h3> 
                        </Checkbox>
                        </div>        
                        ))}
                        </div>

                        </Modal>
                    </div>
                </div>
            </div>
            </div>
        )
    }

export default Dash


{/* <form>
<label>
{topic.title}:
    <input type="text" name="name" />
</label>
<input type="submit" value="Submit" />
</form> */}

{/* <Checkbox onChange={transferTopics} path={path}>
<h3>{path.title}</h3> 
</Checkbox> */}

  {/* <Button htmlType="submit"  onClick={handleSubmit}> Add </Button>  */}

  //

//   <Card value={topic._id} >
//   <p>{topic.title}</p>
//   <p>{topic._id}</p>
//   <Button type="ghost" onClick={handleSubmit} value={topic._id}> Add</Button>
//   </Card>