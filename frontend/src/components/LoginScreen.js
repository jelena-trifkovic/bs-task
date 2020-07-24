import React from 'react';
import axios from 'axios';
import { Button } from 'antd';
import { Form, Input, Tabs, Col, Row } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;

const callback = (key) => {
    console.log(key);
}

const LoginScreen = (props) => {
    const onFinish = values => {
        console.log(values);
        axios.post(
            'http://178.128.206.150:7000/register_candidate'
        ).then(res => {
            console.log(res);
            localStorage.setItem('apikey', res.data.apikey);
            localStorage.setItem('username', values.username);
            axios.post(
                'http://178.128.206.150:7000/player',
                {
                    name: values.username,
                    apikey: localStorage.getItem('apikey')
                }
            ).then(res => {
                console.log(res);
                localStorage.setItem('id', res.data.id);
            }).catch(err => {
                console.log(err);
            });
        }).catch(err => {
            console.log(err);
        });
    };

    return (
        <Tabs defaultActiveKey="1" onChange={callback} centered>
            <TabPane tab="Tic Tac Toe Game - Create User" key="1">
                <Row justify="center">
                    <Col>
                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                        >
                            <Form.Item
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Username!',
                                    },
                                ]}
                            >
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    Create User
                                </Button>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </TabPane>
        </Tabs>
    );
}

export default LoginScreen;