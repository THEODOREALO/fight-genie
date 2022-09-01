import React from 'react';
import "../css/loading-page.css";
import {useNavigate} from 'react-router-dom';
//Replace "Template" with the name of your component
function LandingPage(){
    let navigate = useNavigate();
    //Place all html to return here
    return(
    <div id="body">
        <b>You got power in your corner now</b>
        <p>Use AI and Machine Learning to predict fights</p>
        <div className="hollow-button" onClick={()=> {navigate("/home")}}>Start</div>
        
        <a href="https://www.ufc.com/events">
        <img src="https://dmxg5wxfqgb4u.cloudfront.net/styles/background_image_xl/s3/image/2022-08/090322-ufc-fight-night-gane-vs-tuivasa-SG-hero.jpg?h=d1cb525d&itok=oKoB7cnS.png"
            alt="UFC newest event"
        >
        </img>
        </a>
        <div className='gray'></div>
        <div className='blue'></div>
    </div>
    );
    
        
    
}

//Make sure to replace "Template" with the same name of your component above
export default LandingPage;