import React, { Component } from 'react';
import LIST_RENDERING_KEY from './List_Rendering_Key';
import "./hello_Wolrd.css"
class Hello_World extends Component {
    render() {
      let className = this.props.className ? 'primary' : ''
        const person = [
          {
            id: 2,
            name: "Something",
            salary: "123123",
            age: "23"
          },
          {
            id: 1,
            name: "Something",
            salary: "123123",
            age: "23"
          },
          {
            id: 3,
            name: "Something",
            salary: "123123",
            age: "23"
          }
        ]

      const c = person.map ( x => <LIST_RENDERING_KEY key = {x.id} parentName = {x}/>)
        return (
            <div className = {'font-xl ' + {className}} >
                <h1>Test</h1>
                <span>{ person.map( (x,index) => <div key = {index}>{index+1}</div>) }</span>
                <span>{ person.map( x => <div key = {x.id}>{x.name}</div>) }</span>
                <h1>{c}</h1>
            </div>
        );
    }
}

export default Hello_World;