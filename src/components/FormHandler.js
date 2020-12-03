import React, { Component } from 'react';
import FORM_COMPONENT  from "./Form_component.js"
import {List_component} from "./List_component.js"



class Form extends Component {
    render() {
        return (
            <div>
                Form Component
                <FORM_COMPONENT />
                <List_component />    
            </div>
        );
    }
}

export default Form;