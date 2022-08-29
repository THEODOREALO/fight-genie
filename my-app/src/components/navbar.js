import React from 'react';
import '../css/navbar.css';
//Replace "Template" with the name of your component
class Navbar extends React.Component{
    //Place any instance variables here; if no instance variables, constructor can be removed
    constructor(props){
        super(props);
        this.someInstanceVariable = 0;
    };

    //Place all html to return here
    render(){
        return(
            <div id='nav'>
                <section id='text'>
                    <section id='title'>
                        Fight Genie
                    </section>
                    <section id='account'>
                        <div id='account-buttons'>
                            <div id='login'>
                            Login
                            </div>
                            <button id='signup'>
                            Signup
                            </button>
                        </div>
                    </section>
                </section>
            </div>
        );
    };
}

//Make sure to replace "Template" with the same name of your component above
export default Navbar;