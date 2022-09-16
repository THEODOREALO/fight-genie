import React from 'react';
import '../css/dropdown.css';
//Replace "Template" with the name of your component
class Dropdown extends React.Component{
    //Place any instance variables here; if no instance variables, constructor can be removed
    constructor(props){
        super(props);
        this.state = {
            items: props.items,
            title: props.name
        }
        
    };

    changeTitle(item){
        const newTitle = item.item;
        this.setState({title: newTitle});
    }

    //Place all html to return here
    render(){
        return(
        <div className="dropdown">
            <button className="dropbtn">{this.state.title}</button>
            <div className="dropdown-content">
                {this.state.items.map(item => <p key={item} onClick={() => this.changeTitle({item})}>{item}</p>)}
            </div>
        </div>
        );
    };


}

//Make sure to replace "Template" with the same name of your component above
export default Dropdown;