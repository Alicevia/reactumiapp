import React, { Component } from 'react'

export default class about extends Component {
  state = {
    num:0
  }
  static getDerivedStateFromProps(){
    console.log(this)
    return null
  }
  handleClick = ()=>{
    // setTimeout(() => {
    //       this.setState({num:this.state.num+1})
    // this.setState({num:this.state.num+1})
    // }, 1000);
    this.setState({num:this.state.num+1})

    this.setState((prevState,props)=>{
      return {num:prevState.num+1}
    })
    this.setState({num:this.state.num+1})

    this.setState((prevState,props)=>{
      return {num:prevState.num+1}
    })
    this.setState((prevState,props)=>{
      return {num:prevState.num+1}
    })
    this.setState({num:this.state.num+1})

    console.log(this.state.num)

    // this.setState((prevState,props)=>{
    //   return {num:prevState.num+1}
    // })
    
  }
  componentDidMount(){
    // console.dir(this.btn)
    // this.btn.addEventListener('click',this.handleClick,false)
  }
  render() {
    return (
      <div>
        {/* <button ref={(btn)=>this.btn = btn} >+</button> */}
        <button onClick={this.handleClick} >+</button>
        <input value={this.state.num} type="text"/>
      </div>
    )
  }
}
