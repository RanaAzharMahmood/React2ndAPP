import React, { Component } from 'react'
import WithCounter from './withCounter'
class HoverCounter extends Component {
  render() {
    const { name , count , incrementChanges } =  this.props

        return (
            <div>
                <p onMouseOver = {incrementChanges}>
                  {name}   Clicked  {count} times 
                </p>
            </div>
        )
    }
}
export default WithCounter(HoverCounter)