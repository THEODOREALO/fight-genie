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
            
            <img href = ''></img>
            <div class="dropdown-content">
              <a href="#">Strawweight</a>
              <a href="#">Flyweight</a>
              <a href="#">Bantamweight</a>
              <a href="#">Featherweight</a>
              <a href="#">Lightweight</a>
              <a href="#">Welterweight</a>
              <a href="#">Middleweight</a>
              <a href="#">Light Heavyweight</a>
              <a href="#">Heavyweight</a>
            </div>
        </div>
        );
    };
}

//Make sure to replace "Template" with the same name of your component above
export default WeightClassDropdown;