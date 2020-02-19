import {instance1 as axios} from '../axiosDefault'

// 用户-----------------
// 注册
export function reqAllUserLoginStatus(data){
  return axios({
    url:'admin/findAllUserCheck',
    data,
    method:'post',
  })
}
// 审核通过
export const reqPassApply = (data)=>axios({
  url:'admin/userCheck',
  data,
  method:'put',
})
// 获取所有的用户信息
export const reqGetAllUserRoleInfo = (data)=>axios({
  url:'admin/findAllUserRole',
  data,
  method:'get',
})
