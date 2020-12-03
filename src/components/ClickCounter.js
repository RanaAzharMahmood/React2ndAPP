import React, { Component } from 'react'
import WithCounter from './withCounter'
class ClickCounter extends Component {
  render() {
    const { name , count , incrementChanges } =  this.props

        return (
            <div>
                <button onClick = {incrementChanges}>
                  {name}   Clicked  {count} times 
                </button>
            </div>
        )
    }
}
export default WithCounter(ClickCounter)