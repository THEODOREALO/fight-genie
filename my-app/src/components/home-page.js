import React from 'react';
import Dropdown from './dropdown.js';
import '../css/home-page.css'
//Replace "Template" with the name of your component
class HomePage extends React.Component{
    //Place any instance variables here; if no instance variables, constructor can be removed
    constructor(props){
        super(props);
        this.weightClasses = ["Strawweight"];
    };

    //Place all html to return here
    render(){
        return(
            <div id='body'>
                <b>Select a weight class and 2 fighters</b>
                <Dropdown
                items={this.weightClasses}
                ></Dropdown>
            </div>
            
        );
    };
}

//Make sure to replace "Template" with the same name of your component above
export default HomePage;