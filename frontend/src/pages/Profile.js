import React from 'react'
import { Typography, Row, Col } from 'antd'
import { useContextInfo } from '../hooks/context'
import { Redirect } from 'react-router-dom'


const Profile = () => {
  const {user} = useContextInfo()
  console.log(user)
  return <p>{user.email}</p>

    {/* user ? (
    <Row>
      <Col xs={24} sm={24} md={12}>
        <Typography.Title level={3}>
          Profile: 
        </Typography.Title>
        Image: {user.image}
        <br/>
        username: {user.username}
        <br/>
        Email: {user.email}
        <br/>
      </Col>
    </Row>) :
    <Redirect to='/' />*/}

}

export default Profile
