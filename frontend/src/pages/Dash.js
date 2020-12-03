import React, {useState, useEffect}from 'react'
import { getAllPaths } from '../services/paths.js'
import { Checkbox, Card } from 'antd'
import { Link } from 'react-router-dom'
import { useContextInfo } from '../hooks/context'
const Dash = () => {
    const [pathsy, setPaths] = useState(null)
    const [otherPaths, setOtherPaths] = useState(null)
    const { user } = useContextInfo()
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
        function onChange(value) {
            // let {target}= value.value.target
            console.log(value);
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
                        {otherPaths?.map(path => (
                        <div style={{border:' 1px black solid', margin:'10px'}} >
                            <Link to={`/path/${path._id}`}> <h1>{path.title}</h1> </Link>  
                            {path.topics?.map(({title}) => (
                                <Checkbox onChange={onChange} value={title}>
                                <p>{title}</p>
                                </Checkbox>
                             ))}
                        </div>        
                        ))}
                    </div>
                </div>
            </div>
            </div>
        )
    }
export default Dash