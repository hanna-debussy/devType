import SideBar from "./components/sideBar/sidebar"
import Window from "./components/window/window"
import Terminal from "./components/terminal/terminal"

import './App.css';

const App = () => {
  return (
    <div className="App">
      <SideBar />
      <Window />
      <Terminal />
    </div>
  );
}

export default App;
