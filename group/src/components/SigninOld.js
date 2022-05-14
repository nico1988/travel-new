import React from 'react';
import {useState} from 'react';
import Menubar from './Menubar';
import Homepage from './Homepage'
import { Layout, Typography, Divider, Input, Checkbox, Button, Image, Space, Alert } from 'antd';
import { UserOutlined, KeyOutlined, QuestionCircleFilled } from '@ant-design/icons';
import '../css/Signin.css'

const { Footer, Content } = Layout;
const { Title, Text, Link } = Typography;

    // <Alert className='alert' message="Username and Password cannot be empty!" type="error" showIcon closable/>


// Main
const Signin = () => {

    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [display, setDisplay] = useState(false);
    const check = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };

    const CheckEmpty = () => {
        //console.log(value1.length)
        setDisplay(true)
        console.log(display)
    };

    return (
        <div>
            {/* <Menubar login={'login'}></Menubar> */}
            <Homepage></Homepage>
            <div className='signinContainer'>
                <Alert className={display?"alertT":"alertF"} message="Username and Password cannot be empty!" type="error" showIcon closable banner />
                    <div className='container'>
                    {/* left */}
                    <div className='leftContent'>
                        <Layout className='layout'>
                            <Content className='content'>
                                
                                {/* Title */}
                                <Title>Sign in</Title>
                                <Text>Please input your information in the fields below to enter the platform.</Text>
                                <Divider dashed />

                                <div className='signInInput'>

                                    {/* Sign in Input */}
                                    <Space direction="vertical">
                                        <Space size={140}>
                                            <Text>Account</Text> <Link href="https://ant.design"><QuestionCircleFilled style={{color: '#bfbfbf'}}/></Link>
                                        </Space>
                                        <div className='inputArea'>
                                            <Input value={value1} onChange={(e)=>{setValue1(e.target.value)}} size="large" placeholder="Username" prefix={<UserOutlined style={{color: '#bfbfbf'}}/>} />
                                            <Input value={value2} onChange={(e)=>{setValue2(e.target.value)}} size="large" placeholder="Password" prefix={<KeyOutlined style={{color: '#bfbfbf'}}/>} />
                                        </div>
                                        <Link href="https://ant.design" target="_blank">Forgot your password?</Link>
                                    </Space>

                                </div>

                                <Divider dashed />

                                {/* Log in */}
                                <Space className='rememberMe' size={140} align="baseline">
                                    <Checkbox onChange={check}>Remember me</Checkbox>
                                    <Button type="primary" onClick={CheckEmpty}>Log in</Button> 
                                </Space>

                            </Content>
                            <Footer>
                                <Text type="secondary">Don't have an account yet?</Text> <br/><br/>
                                <Link href="https://ant.design" target="_blank">Register here</Link>
                            </Footer>
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