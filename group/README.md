### `front end`

### `npm install react-router-dom`
### `npm add antd`
### `npm install rc-banner-anim --save`
### `npm install rc-tween-one --save`
### `yarn add react-big-calendar react-datepicker date-fns`
### `npm start`


### `back end`

### `cd test1`
### `npm install express`
### `npm install body-parser`
### `npm start`

### `更新内容`
1. Calendar样式更新
2. User Login部分交互 post端口为/users
    a. 接收后端返回参数，存入cookie
    b. 跳转至homepage，设置路由守卫，禁止访问/signin与/signup页面
    c. Menubar样式更新，欢迎语，头像以及Sign out button更新
    d. Sign out button新增事件 clear cookie数据，并返回homepage
3. User Register部分交互 post端口为/users/signup
    a. 接收后端返回参数，若为true 反馈注册成功页面；若为false，反馈重新注册
4. 未登录页面交互
    a. 设置路由守卫， 未登录前禁止访问/calendar, /map和/weather，自动跳转至/signin