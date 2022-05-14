import React from 'react';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Menubar from './Menubar';
import Homepage from './Homepage'
import { Layout, Typography, Divider, Input, Checkbox, Button, Image, Space, Alert,Form, Spin, message } from 'antd';
import { UserOutlined, KeyOutlined, QuestionCircleFilled, LockOutlined } from '@ant-design/icons';
import { fetchPostWithNoToken } from '../utils/request'
import { setSessionInfo } from '../utils/session'
import '../css/Signin.css'
import 'antd/dist/antd.min.css'
const { Footer, Content } = Layout;
const { Title, Text, Link } = Typography;

    // <Alert className='alert' message="Username and Password cannot be empty!" type="error" showIcon closable/>


// Main
const Signin = () => {

    const history = useNavigate();

    const error = () => {
        message.error('Wrong username or password! Please try again.');
    };
    
    const onFinish = async (values) => {
      // 出现加载环
      setLoading(true)
      console.log('Received values of form: ', values);
      const loginData = { 
          "username": values.username, 
          "password": values.password
      };
      const url = "/api/user/login";
        const result = await fetchPostWithNoToken(url, loginData);
        console.log(result);
        if (result.code === 200) {
            setSessionInfo(result.data);
            handle(result.data.username);
            history('/homepage');
            // setDisplay(true);
        } else {
            error();
        }
    };

    const jumpToRegister = () =>{
      
      history('/signup')
      
    }

    const [loading, setLoading] = useState(false)
    const [cookies, setCookie, removeCookie] = useCookies(['user'])

    // cookie值写死 等待后端传输数据
    const handle = (userId) =>{
      setCookie('id',userId,{path:'/'})
      
    }

    return (
        <div>
            {/* <Menubar login={'login'}></Menubar> */}
            <Homepage></Homepage>
            <div className='signinContainer'>  
              <div className='container'> 
                {/* left */}
                  <div className='leftContent'>
                    <Layout className='layout'>
                      <Content className='content'>
                          <Title>Sign in</Title>
                          <Text>Please input your information in the fields below to enter the platform.</Text>
                          <Divider dashed />
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
                            <Form.Item
                              name="password"
                              rules={[
                                {
                                  required: true,
                                  message: 'Please input your Password!',
                                },
                              ]}
                            >
                              <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                              />
                            </Form.Item>
                            {/* <Form.Item>
                              <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>Remember me</Checkbox>
                              </Form.Item>

                              <a className="login-form-forgot" href="">
                                Forgot password
                              </a>
                            </Form.Item> */}

                            <Form.Item>
                              <Button type="primary" htmlType="submit" className="login-form-button" >
                                Log in
                              </Button>
                              <span className='registerTxt'>OR <span  onClick={jumpToRegister} className='registerLink'>register now!</span></span>
                              
                            </Form.Item>
                          </Form>
                      </Content>
                    </Layout>
                  </div>
              
                  {/* right */}

                  <div className='rightContent'>
                      <Image className='signInImage' 
                          src='https://accounts.outreach.io/assets/computer-illustration-a305dfa861d6a7c559f17d1bf294d172711c8ac60fedc99360b8c92e30987aaf.svg'
                          alt='signInImage'
                          preview={false}
                      />
                  </div>
                  {/* alert */}
            </div> 
          </div>
    </div>
    );
  };


export default Signin;