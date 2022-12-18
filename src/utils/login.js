import axios from './axios'

// 登录接口
export const login =(data)=>{
    return axios({
      url:'/adminUser/login',
      method: 'POST',
      data
    })
}