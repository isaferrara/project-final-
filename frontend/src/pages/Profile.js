import { useState} from 'react'
import React from 'react'
import { Typography, Row, Col, Button } from 'antd'
import { useContextInfo } from '../hooks/context'
import { Redirect } from 'react-router-dom'
import UpdateProfileForm from '../components/UpdateProfileForm'

const Profile = () => {
  const { user } = useContextInfo()
  const [showEditForm, setShowEditForm] = useState(false)
  console.log(user.image, user.email)
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
    <Redirect to='/' />

}

export default Profile
