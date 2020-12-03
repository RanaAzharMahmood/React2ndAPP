import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props){
        super(props)
  
        this.state = {
          count: 0
        }
      }
  
      incrementChanges= () =>{
        // if (incrementNumber){
        //   this.setState(prevState =>{
        //     return { count: prevState.count + incrementNumber }
        //   } 
        //   )
        // }else{
          this.setState(prevState =>{
            return { count: prevState.count + 1 }
          } 
          )
        // }
      }
    render() {
        return (
            <div>
                {this.props.render(this.state.count, this.incrementChanges)}
            </div>
        )
    }
}
