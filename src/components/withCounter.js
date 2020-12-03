import React from 'react'

const WithCounter = (WrappedComponent , incrementNumber) => {
  class WithCounter extends React.Component{

    constructor(props){
      super(props)

      this.state = {
        count: 0
      }
    }

    incrementChanges= () =>{
      if (incrementNumber){
        this.setState(prevState =>{
          return { count: prevState.count + incrementNumber }
        } 
        )
      }else{
        this.setState(prevState =>{
          return { count: prevState.count + 1 }
        } 
        )
      }
    }

    render(){
      return <WrappedComponent name = {this.props.name} count = {this.state.count} incrementChanges = {this.incrementChanges}/>
    }

  }
  return WithCounter
}

export default WithCounter
