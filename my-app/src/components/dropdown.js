import React from 'react';
import '../css/dropdown.css';
//Replace "Template" with the name of your component
class Dropdown extends React.Component{
    //Place any instance variables here; if no instance variables, constructor can be removed
    constructor(props){
        super(props);
        this.items = props.items;
    };

    //Place all html to return here
    
    render(){
        return(
        <div className="dropdown">
            <button className="dropbtn">Dropdown</button>
            <div className="dropdown-content">
                {this.items.map(item => <p key={item}>{item}</p>)}
            </div>
        </div>
        );
    };
}

//Make sure to replace "Template" with the same name of your component above
export default Dropdown;