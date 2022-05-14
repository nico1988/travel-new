
import { Navigate } from 'react-router-dom'
import { Cookies,useCookies } from 'react-cookie'

export default function GardRoute({ children }) {
   //获取token
   console.log({children})
  const [isToken,setCookie] = useCookies(['id'])
  console.log(isToken)
  if (JSON.stringify(isToken)!="{}") {
      console.log('yes')
   //如果有token，那就去往该组件包裹的页面
    return <>{children}</>
  }
  else {
    //跳转去登录页面
    return <Navigate to='/Signin' replace />
  }
}

