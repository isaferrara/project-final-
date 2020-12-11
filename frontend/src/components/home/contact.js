import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
const { TextArea } = Input;

const AppContact = () => {
    return (
        <div className="block contactBlock">
        <div className="container-fluid">
            <div className="titleHolder">
                <h2>Get In Touch</h2>
                <p>Subtitle of the get in touch goes here thinking what to type my friend calm down i only have 2 two hands</p>
            </div>
            <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        >
        <Form.Item
            name="fullname"
            rules={[{ required: true, message: 'Please input your full name!' }]}
        >
            <Input placeholder="Full Name" />
        </Form.Item>

        <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
        >
            <Input
            type="email"
            placeholder="Email"
            />
        </Form.Item>

        <Form.Item
            name="subject"        >
            <Input placeholder="Subject Name" />
        </Form.Item>

        <Form.Item
            name="message"        >
            <TextArea placeholder="Message" />
        </Form.Item>
        
        <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject('Should accept agreement'),
          },
        ]}
      >
        <Checkbox>
          I agree with terms and conditions
        </Checkbox>
      </Form.Item>

        <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
            Submit
            </Button>
        </Form.Item>
        </Form>
        </div>
        </div>
    );
}

export default AppContact;
