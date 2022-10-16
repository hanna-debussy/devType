import SideBar from "./components/sideBar/sidebar"
import Window from "./components/window/window"
import Terminal from "./components/terminal/terminal"

import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="left-section">
        <SideBar />
      </div>
      <div className="right-section">
        <Window />
        <Terminal />
      </div>
    </div>
  );
}

export default App;
