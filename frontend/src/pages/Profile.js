import { useState, useEffect} from 'react'
import React from 'react'
import { Typography, Row, Col, Button } from 'antd'
import { useContextInfo } from '../hooks/context'
import { Redirect } from 'react-router-dom'
import UpdateProfileForm from '../components/UpdateProfileForm'
import { currentUserFn } from '../services/auth'

//traer login y currentuser y hacer useEffect

const Profile = () => {
  //const { user } = useContextInfo()
  const [showEditForm, setShowEditForm] = useState(false)
  const [user, setUser] = useState(null)
   
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
    <Row>
      <Col xs={24} sm={24} md={12}>
        <Typography.Title level={3}>
          Your account
          {console.log(user.image, user.email)} 
          <br/>
          <br/>
          <img style={{width: 200, height: 200, borderRadius: 50}} src={user.image} alt="User Img"></img>
          <br/>
          Username and/or email:
          <br/>
          {user.username}
          <br/>
          {user.name}
          <br/>
          {user.email}
          
          {showEditForm && <UpdateProfileForm {...user} />}
        <br />
        <Button
          type="primary"
          onClick={() => setShowEditForm(!showEditForm)}
          block>Edit Profile</Button>
        <br />

        </Typography.Title>
      </Col>
    </Row>) :
    <Redirect to='/profile' />

}

export default Profile
