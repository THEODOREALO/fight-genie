import Navbar from "./components/navbar";
import "./css/app.css";
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div id="body">
        <b>You got power in your corner now</b>
        <p>Use AI and Machine Learning to predict fights</p>
        <div className="hollow-button">Start</div>
        <a href="https://www.ufc.com/events">
          <img src="https://dmxg5wxfqgb4u.cloudfront.net/styles/background_image_xl/s3/image/2022-08/090322-ufc-fight-night-gane-vs-tuivasa-SG-hero.jpg?h=d1cb525d&itok=oKoB7cnS.png"
            alt="UFC newest event"
          >
          </img>
        </a>
      </div>
    </div>
  );
}

export default App;
