import React, {useState, useEffect}from 'react'
import { getAllPaths } from '../services/paths.js'
import { Row, Col, Card } from 'antd'
import { Link } from 'react-router-dom'
import { useContextInfo } from '../hooks/context'

const Dash = () => {
    const [pathsy, setPaths] = useState(null)
    const { user } = useContextInfo()

    useEffect(() => {
        async function getPaths() {
  
            const {data} = await getAllPaths()
            const userPaths = data.filter((info)=>
                info.users[0]===user._id
            )
            setPaths(userPaths) 
        }
        getPaths()
        }, [])
    

        return (
            <div>
    <div style={{ padding: '1rem 3rem'}}>
    <Link to='/path/create'> Create new path</Link>
        <h1>Your paths</h1> 
            {pathsy?.map(path => (
            <Link to={`/path/${path._id}`}> 
            <div style={{border:' 1px black solid', margin:'10px'}}>    
            <h1>{path.title}</h1>
            {path.topics?.map(({title}) => (
                <p>{title}</p> ))}
            </div>
            </Link>             
            ))}
            
        </div>
            </div>
        )
    }

export default Dash