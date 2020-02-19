export default (props) => {
  console.log(props)//这里可以控制无权限的时候跳转页面
  return (
    <div>
      <div>PrivateRoute (routes/PrivateRoute.js)</div>
      { props.children }
    </div>
  );
}

