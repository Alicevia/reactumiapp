import React, { useEffect, useState } from 'react'
import styles from './index.less';
import { Input, List, Avatar, Button, Skeleton } from 'antd'
import { connect } from 'dva';
import {Link} from 'dva/router'
 function Todolist (props) {
  let [plan,setPlan] = useState('')
  let [unFinish,setUnFinish] = useState(0)
  let [finish,setFinish] = useState(0)
  useEffect(()=>{
    finish = props.login.list.reduce((a,b)=>{
      return b.complate?a +=1:a
    },0)
    setFinish(finish)
    setUnFinish(props.login.list.length-finish)
  },[props.login])

  let handlePlan = (e)=>{
    setPlan(e.target.value)
  }
  let addPlan = (value)=>{
    props.dispatch({type:'login/addPlan',payload:value})
    setPlan('')
  }
  let deletePlan = (index)=>{
    props.dispatch({type:'login/deletePlanAsync',payload:index})
  }
  let finishPlan = (index)=>()=>{
    props.dispatch({type:'login/finishPlan',payload:index})
  }
  let allFinish = ()=>{
    props.dispatch({type:'login/finishPlanAsync'})
  }
  let clearFinish = ()=>{
    props.dispatch({type:'login/clearPlan'})
    
  }

  
  return (
    <div className={styles.container}>
      <Link to='/todolist'>todolist</Link>
      <div className={styles.header}>
        <Input.Search
          placeholder="输入要添加的计划"
          enterButton="add"
          size="large"
          value={plan}
          onChange={handlePlan}
          onSearch={addPlan}
        />
      </div>
      <div className={styles.content}>
        <List
          className="demo-loadmore-list"
          itemLayout="horizontal"
          dataSource={props.login.list}
          renderItem={(item,index) => (
            <List.Item
              actions={[<a key="list-loadmore-edit" onClick={()=>deletePlan(index)}>删除</a>,
               <a key="list-loadmore-more" onClick={finishPlan(index)}>完成</a>]}
            >
              <List.Item.Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title={<a href="https://ant.design">{item.plan}</a>}
              />
              <div>{item.complate ? '完成' : '未完成'}</div>
            </List.Item>
          )}
        />
      </div>
      <div className={styles.footer}>
              <span>已完成：{finish} </span> 
              <span>未完成：{unFinish} </span> 
        <span onClick={allFinish}>全部完成  </span>
        <span onClick={clearFinish}>清除已完成：</span>
      </div>
    </div>
  );
}
export default connect(state=>{
  return state
},null)(Todolist)
