import React, { Component } from 'react';

class Form_component extends Component {
  constructor(props){
    super(props)

    this.state ={
      name: 'RajaJI',
      age: 23
    }
    console.log("form component being called")
  }  

  static getDerivedStateFromProps(props,state){
    console.log("form component being called getDSFMPs")
    return null
  }
  componentDidMount(){
    console.log("form component being called didmount")

  }

  submitChanges = event =>{
    alert("there" + this.state.name)
    console.log(event)
    event.preventDefault()
  }
  changeState = event =>{
    // alert(event.target.value)
  }

  render(){
      return (
            <form onSubmit = {this.submitChanges}>

                <div>
                    <label name="Name">Name</label>
                    &nbsp;&nbsp;
                    <input type="text" value = {this.state.name} onChange={this.changeState} placeholder="Enter your name"/>
                </div>
                <div>
                    <label name="Name">Name</label>
                    &nbsp;&nbsp;
                    <input type="text" placeholder="Enter your Age"/>
                </div>
                <div>
                    &nbsp;&nbsp;
                    <button type="submit" > Submit </button>
                </div>
            </form>
    );
  }
}
export default Form_component;