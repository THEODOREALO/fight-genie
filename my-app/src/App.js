import Navbar from "./components/navbar";
import WeightClassDropdown from "./components/weightClass";
function App() {
  return (
    <div>
      <Navbar></Navbar>
      
      <div id="body">
        <b>You got power in your corner now</b>
        <p>Use AI and Machine Learning to predict fights</p>
        <WeightClassDropdown></WeightClassDropdown>
      </div>
    </div>
  );
}

export default App;
