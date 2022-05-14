import React from 'react';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Menubar from './Menubar';
import Homepage from './Homepage'
import { Layout, Typography,Result, Divider, Input, Checkbox, Button, Image, Space, Alert,Form, InputNumber, Cascader, Select,Row, Col,AutoComplete, Spin,notification,message  } from 'antd';
import { UserOutlined, KeyOutlined, QuestionCircleFilled, LockOutlined, MailOutlined } from '@ant-design/icons';
import '../css/Signup.css'
import 'antd/dist/antd.min.css'
import { fetchPostWithNoToken } from '../utils/request'
const { Footer, Content } = Layout;
const { Title, Text, Link } = Typography;

    // <Alert className='alert' message="Username and Password cannot be empty!" type="error" showIcon closable/>


// Main
const Signup = () => {
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    
      const [form] = Form.useForm();
      const history = useNavigate();
      const [display, setDisplay] = useState(false);

      const jumpToLogin = () =>{
        history('/signin')
      }

      const error = () => {
        message.error('The username exist already. Please input another one.');
      };
    
      const onFinish = async (values) => {
        setLoading(true)
        console.log('Received values of form: ', values);
        const insertData = { 
            'username': values.username, 
            'password': values.password, 
            'email':values.email
        };
        const url = "/api/user/register";
        const result = await fetchPostWithNoToken(url, insertData);
        if (result.code === 200) {
            setDisplay(true);
        } else {
            error();
        }
      };

      const [loading, setLoading] = useState(false)
    return (
        <div>
            {/* <Menubar login={'login'}></Menubar> */}
            <Homepage></Homepage>
            <div className='signupContainer'>
                    <div className='container'>
                    {/* left */}
                      <div className='leftContent' style={{display: display?'none':'block'}}>
                          <Layout className='layout'>
                            <Content className='content'>
                                <Title>Input your information</Title>
                                <Text>We need you to help us with some basic information for your account creation. 
                                    Here are our <Link href="https://ant.design" strong target="_blank">Terms and Conditions</Link>. 
                                    Please read them carefully. We are GDPR compliant.</Text>
                                    <Form
                                        {...formItemLayout}
                                        form={form}
                                        name="register"
                                        onFinish={onFinish}
                                        scrollToFirstError
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
                                            <Input placeholder='User Name' prefix={<UserOutlined className="site-form-item-icon" />} />
                                        </Form.Item>
                                        <Form.Item
                                            name="email"
                                            rules={[
                                            {
                                                type: 'email',
                                                message: 'The input is not valid!',
                                            },
                                            ]}
                                        >
                                            <Input placeholder='E-mail' prefix={<MailOutlined className="site-form-item-icon" />} />
                                        </Form.Item>

                                        <Form.Item
                                            name="password"
                                            rules={[
                                            {
                                                required: true,
                                                message: 'Please input your password!',
                                            },
                                            ]}
                                            hasFeedback
                                        >
                                            <Input.Password placeholder='Password' prefix={<LockOutlined className="site-form-item-icon" />} />
                                        </Form.Item>

                                        <Form.Item
                                            name="confirm"
                                            dependencies={['password']}
                                            hasFeedback
                                            rules={[
                                            {
                                                required: true,
                                                message: 'Please confirm your password!',
                                            },
                                            ({ getFieldValue }) => ({
                                                validator(_, value) {
                                                if (!value || getFieldValue('password') === value) {
                                                    return Promise.resolve();
                                                }
                                                return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                                },
                                            }),
                                            ]}
                                        >
                                            <Input.Password placeholder='Confirm Password' prefix={<LockOutlined className="site-form-item-icon" />} />
                                        </Form.Item>

                                        <Form.Item
                                            name="agreement"
                                            valuePropName="checked"
                                            rules={[
                                            {
                                                validator: (_, value) =>
                                                value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                                            },
                                            ]}
                                            {...tailFormItemLayout}
                                        >
                                            <Checkbox>
                                            I have read the <a href="">agreement</a>
                                            </Checkbox>
                                        </Form.Item>
                                        <Form.Item {...tailFormItemLayout}>
                                            <Button type="primary" htmlType="submit">
                                            Register
                                            </Button>
                                        </Form.Item>
                                    </Form>
                            </Content>
                        </Layout>

                    </div>
                    
                    {/* right */}

                    <div className='rightContent' style={{display: display?'none':'block'}}>
                        <Image className='signInImage' 
                            src='https://accounts.outreach.io/assets/computer-illustration-a305dfa861d6a7c559f17d1bf294d172711c8ac60fedc99360b8c92e30987aaf.svg'
                            alt='signInImage'
                            preview={false}
                        />
                    </div>

                    {/* alert */}

                    
                    <div className='submitSuccessContainer' style={{display: display?'block':'none'}}><Result title="Sign up successfully!"
                        extra={
                        <Button type="primary" key="console" onClick={jumpToLogin}>
                            Sign in now!
                        </Button>
                        }/>
                    </div>
                </div> 
            </div>
    </div>
    );
  };


export default Signup;