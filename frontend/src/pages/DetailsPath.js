import React, {useState, useEffect} from 'react'
import { useContextInfo } from '../hooks/context'
import { getSinglePath, deletePath, updatePath } from '../services/paths.js'
import { Typography, Skeleton, Divider, Card, Button, Link } from 'antd'
import EditPath from '../components/EditPath'
import PathInfo from '../components/PathInfo'


const { Title } = Typography

const DetailsPath = ({ match: { params: { id } }, history }) => {
    const [pathsy, setPaths] = useState(null)
    const [showEditForm, setShowEditForm] = useState(false)
    const [showInfo, setShowInfo] = useState(true)
    const { user } = useContextInfo()

    useEffect(() => {
        async function getPaths() {
            const {data} = await getSinglePath(id)

            setPaths(data) 
        }
        getPaths()
        }, [])

    async function handleDelete() {
        await deletePath(id)
        history.push(`/dash/${user._id}`)
        }
        


     function sum(i) {
        i++
            }

    function setForms(){
        setShowEditForm(!showEditForm)
        setShowInfo(!showInfo)
        }

    return (
<div style={{ padding: '1rem 3rem' }}>
      {pathsy? (<div>
            {showInfo && <PathInfo {...pathsy} setForms={setForms} /> }
            <br />
            {showEditForm && <EditPath {...pathsy} setForms={setForms}/>}

        <Divider>Topics</Divider>

        {pathsy.topics.map((topic, i) => <Card hoverable number={sum(i)} title={topic.title} style={{marginBottom:'10px'}}  >
        <div style={{display:'flex', flexDirection:'row'}}>        
        <h3 style={{margin:'10px'}}>{i+1}</h3>
            <div style={{display:'flex', flexDirection:'column', textAlign:'left'}}>
            <p style={{marginBottom:'3px'}} > <b>Objective:</b> {topic.objective}</p>
            <p style={{marginBottom:'3px', paddingLeft:'0px'}} > <b>Duration:</b> {topic.duration}</p>
            </div>
        </div>
        {/* <br /> */}
        {/* <Button type="ghost" >Edit Topic</Button> */}
        </Card>)}
        
        <Divider></Divider>
        <Button
          type="ghost"
          onClick={handleDelete}
          danger
          block
        >Delete Project</Button>
      </div>
      ) : (
          <Skeleton active />
        )}
    </div>
    )
}

export default DetailsPath