// import logo from './logo.svg';

import Input from "./Input";
import SubHeader from "./SubHeader";
import "./style.css";
import mySVGfile from './images/illustration-sign-up-desktop.svg'

function App() {
  const divStyle = {
    backgroundImage: `url(${mySVGfile})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '900px', // Set your preferred height
  };
  return (
    <div className="form-container" style={divStyle} >
      <header >
       <h1 className="header-container ">Stay Updated !</h1>
      </header >
        <SubHeader />
        <Input />
       
    </div>
  );
}

export default App;
