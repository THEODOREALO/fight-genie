import React from 'react';

//Replace "Template" with the name of your component
class Template extends React.Component{
    //Place any instance variables here; if no instance variables, constructor can be removed
    constructor(props){
        super(props);
        this.someInstanceVariable = 0;
    };

    //Place all html to return here
    render(){
        return(
            <div>Hello!</div>
        );
    };
}

//Make sure to replace "Template" with the same name of your component above
export default Template;