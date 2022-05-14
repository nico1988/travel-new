import React, { useEffect } from 'react';
import {useState} from 'react';
import {useNavigate, useLocation } from 'react-router-dom';
import { Cookies,useCookies } from 'react-cookie'
import { Button, Menu, Avatar } from 'antd';
import { clear } from '../utils/session';

import { PushpinOutlined, CloudOutlined, HomeOutlined, OrderedListOutlined, UserOutlined } from '@ant-design/icons';
import '../css/Menubar.css'
import 'antd/dist/antd.min.css'

const Menubar = (props) => {

  const items = [
    {
      label: 'Homepage',
      key: '/homepage',
      icon: <HomeOutlined />,
      onClick: () => {history('/homepage')}
    },
    {
      label: 'Map',
      key: '/map',
      icon: <PushpinOutlined />,
      onClick: () => {history('/map')}
    },
    {
      label: 'Calendar',
      key: '/calendar',
      icon: <OrderedListOutlined />,
      onClick: () => {history('/calendar')}
    },
    {
      label: 'Weather',
      key: '/weather',
      icon: <CloudOutlined />,
      onClick: () => {history('/weather')}
    },
  ];
  const {login} = props;
  const [current, setCurrent] = React.useState('/homepage');
  const history = useNavigate();
  const location = useLocation();

  const [isToken,setCookie,removeCookie] = useCookies(['id'])
  console.log("isToken",isToken)
  const [display, setDisplay] = useState(true);

  // console.log("location", location)
  // console.log("Current", current)
  // const onClick = (e) => {
    
  //   console.log('click ', e.key);
  //   setCurrent(e.key);
  //   console.log('location',location)
  //   if(e.key === 'page1'){
  //     history('/')
  //   }
  //   if(e.key === 'page2'){
  //       history('/map')
  //   }
  //   if(e.key === 'page3'){
  //       history('/calendar')
  //   }
  //   if(e.key === 'page4'){
  //       history('/weather')
  //   }
  // };

  const jumpToLogin = (e) =>{
    history('/signin')
  }

  const jumpToSignout = (e) =>{
    history('/homepage')
    removeCookie("id");
    clear();
  }

  return (
    <div>
        <Menu selectedKeys={location.pathname} mode="horizontal" items={items}  style={{backgroundColor:'transparent', width: '80%', float:'left', height:'3rem'}}/>
        <div className='accountArea'>
          <Button type="primary" className='loginButton' onClick={jumpToLogin} style={{display: JSON.stringify(isToken)==="{}"?'block':'none'}}>Login</Button>
          <Button type="primary" className='loginButton' onClick={jumpToSignout} style={{display: JSON.stringify(isToken)!="{}"?'block':'none'}}>Sign out</Button>
          <div className='welcomeArea'>
              <span className='welcomeTxt' style={{display: JSON.stringify(isToken)!="{}"?'block':'none'}}>Welcome!</span>
              <Avatar className='avatar' icon={<UserOutlined />} style={{display: JSON.stringify(isToken)!="{}"?'block':'none'}}/>
              </div>
        </div>
    </div>
    );
};

export default Menubar;