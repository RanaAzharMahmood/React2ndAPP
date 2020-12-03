import React, { Component } from 'react'

export default class Errors_b extends Component {

  constructor(props){
    super(props)
    this.state = {
      hasError: false 
    }
  }

  static getDerivedStateFromError(){
    return {
      hasError: true
    }
  }
  componentDidCatch(error, info){

    console.log(error)
    console.log(info)

  }
    render() {
        
      if(this.state.hasError)
        {return (
            <div>
                Something Went Wrong       
            </div>
        );
        }else{
          return this.props.children  
        }
    }
}
