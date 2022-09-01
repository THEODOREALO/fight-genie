import React from 'react';
import '../css/weightClass.css';
//Replace "Template" with the name of your component
class WeightClassDropdown extends React.Component{
    //Place any instance variables here; if no instance variables, constructor can be removed
    constructor(props){
        super(props);
        this.someInstanceVariable = 0;
    };

    //Place all html to return here
    
    render(){
        return(
        <div class="dropdown">
            <button class="dropbtn">Dropdown</button>
        
            <div class="dropdown-content">
              <p>Strawweight</p>
              <p>Flyweight</p>
              <p>Bantamweight</p>
              <p>Featherweight</p>
              <p>Lightweight</p>
              <p>Welterweight</p>
              <p>Middleweight</p>
              <p>Light Heavyweight</p>
              <p>Heavyweight</p>
            </div>
        </div>
        );
    };
}

//Make sure to replace "Template" with the same name of your component above
export default WeightClassDropdown;