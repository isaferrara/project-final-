import { useState, useEffect} from 'react'
import React from 'react'
import { Typography, Row, Col, Button } from 'antd'
import { useContextInfo } from '../hooks/context'
import { Redirect } from 'react-router-dom'
import UpdateProfileForm from '../components/UpdateProfileForm'
import { currentUserFn } from '../services/auth'
import LayoutDash from "../components/LayoutDash";

//traer login y currentuser y hacer useEffect

const Profile = () => {
  //const { user } = useContextInfo()
  const [showEditForm, setShowEditForm] = useState(false)
  const [user, setUser] = useState(null)
  const [disable, setDisable] = useState(false)

  const login = user => setUser(user)


  const value = {
    user,
    login
  }

  useEffect(() => {
     async function getSessionData() {
         const { data } = await currentUserFn()
         login(data);
         console.log(user)
     }
 
     getSessionData()
     }, [])



  return user ? (
    <div style={{ height:'100%', width:'100%', position:'fixed', padding:'0', margin:'0', top:'0', left:'0' }}>
    <LayoutDash >
    <Row>
      <Col xs={24} sm={24} md={12}>
      <div style={{display:'flex', flexDirection:'row'}}>
      <div style={{marginRight:'50px', marginLeft: '30px', width:'100px'}}>
      <div style={{width: 300, marginTop: '30px'}}>
        <Typography.Title level={3}>
          Your account
        </Typography.Title>
          {console.log(user.image, user.email)} 
          <br/>
          <img style={{width: 200, height: 200, borderRadius: 30}} src={user.image} alt="User Img"></img>
          

          <h4><b>Username:</b>
            {user.username}
          <br/>
          </h4>

          <h4> <b>Email:</b>
            {user.email}
          </h4>

          <h4><b>Full name:</b>
            {user.name}
          </h4>
          <br/>
          </div>
        </div>
        <div style={{width:'700px', marginLeft: '170px'}}>
          { !disable && <UpdateProfileForm {...user} />}
         </div>
         </div>
        <br />
        <Button
          type="primary"
          onClick={() => setShowEditForm(!showEditForm)}
          block>Edit Profile</Button>
        <br />


      </Col>
    </Row>
    </LayoutDash>
    </div>
    ) :
    <Redirect to='/profile' />

}

export default Profile
