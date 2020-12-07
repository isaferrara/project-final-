import React, {useState, useEffect} from 'react'
import { useContextInfo } from '../hooks/context'
import { getSinglePath} from '../services/paths.js'
import { Typography , Skeleton, Button} from 'antd'


const { Title } = Typography

export const PathInfo = (props) => {
    const [pathsy, setPaths] = useState(null)
    const { user } = useContextInfo()


    useEffect(() => {
        async function getPaths() {
            const {data} = await getSinglePath(props._id)
            setPaths(data) 
        }
        getPaths()
        }, [])

    function changeSett(){
        props.setForms()
    }

    
    return (
        <div>
        {pathsy? (<div>
            <Title level={2}>{pathsy.title}</Title>
        <div style={{textAlign:'left'}}> 
            <p><b>Description:</b>{pathsy.description}</p>
            <p> <b>Category:</b>{pathsy.category}</p>
        </div>
        <Button type="primary" block onClick={changeSett}  >Edit Project</Button>
        <br />
        </div>
        ):(
            <Skeleton active />
        )}

        </div>
    )
}

export default PathInfo
