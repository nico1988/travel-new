import React from 'react';
import { Button } from 'antd';
import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one/lib/TweenOne';
import Menubar from './Menubar'
import coverImg1 from '../image/coverImg1.jpg';
import coverImg2 from '../image/coverImg2.jpg';
import 'rc-banner-anim/assets/index.css';
import 'antd/dist/antd.min.css'
import '../css/Homepage.css';
const BgElement = Element.BgElement;

const HomePage = (props) => {
  const onClick = () => {
    this.props.history.push('./Maptest.js')
  }
  return (
    // antd banner
    <div>
      <div>
        <Menubar history={props.history}></Menubar>
      </div>

      <div className='banner'>
        <BannerAnim prefixCls="banner-user" autoPlay>
          <Element
            prefixCls="banner-user-elem"
            key="0"
          >
            <BgElement
              key="bg"
              className="bg bg1"
            />
            <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
              Welcome to 732 Terrific Tuataras Group Project!
            </TweenOne>
            <TweenOne className="banner-user-text"
              animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
            >
              Shan Li, Nandi Ruan, Aaron Fan, Zixuan Su, Kai Chen
            </TweenOne>
          </Element>
          <Element
            prefixCls="banner-user-elem"
            key="1"
          >
            <BgElement
              key="bg"
              className="bg"
            />
            <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
              Travelling Dairy APP
            </TweenOne>
            <TweenOne className="banner-user-text"
              animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
            >
              Enjoy your travelling management
            </TweenOne>
          </Element>
        </BannerAnim>

      </div>
    </div>
  )
}

export default HomePage
