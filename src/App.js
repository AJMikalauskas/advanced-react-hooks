import React, {useCallback, useState} from "react";
// import logo from './logo.svg';
import Button from "../src/components/UI/Button/Button"
 import './App.css';
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  // This is called not only everytime state changes in this component buyt also when a child component
    // such as DemoOutput.js is called. Since the state is managed here, the App component is completely called again.
  //console.log("This shows that the entire component is rerun when a state changes")
  console.log("app.js runs")


  // This useCallback() stores the function in the useCallback() and when it's called again by Button compoent, it knows it's the same function
    // This allows for the proper use of React.memo() for the Button component to not be ran again due to function being a reference type.
      // Second Param is array of dependencies which is helpful to call on things used inside the function that are from the outer scope of the function

      // allowToggle needs to be passed in as a dependency to this function because it's part of the outer scope of the function
        // and cannot be understood/read in the inner scope of the function unless it's read in as a dependency - 
          // This almost acts as a parameter passed into a function. It's not required with the setShowParagraph for some reason???
            // Recreates useCallback() function from what's in the dependency array. if allowToggle changes, useCallback is recreated
  const onAndOffParagraphShowing = useCallback(() =>
  {
    if(allowToggle)
    {
    // Can also just do opposite via the ! operator
    setShowParagraph(prevShowParagraph => !prevShowParagraph);
    }
    // if(showParagraph === false)
    // {
    //   return setShowParagraph(true);
    // }
    // else
    // {
    //   return setShowParagraph(false);
    // }
  },[allowToggle]);

  const toggleButtonHandler = () =>
  {
    setAllowToggle(true);
  }

  return (
    // All child components in this 'parent' component are re-executed every time the app component has any state change
      // even if no actual state changes occur within the children themselves, 
        // Button and DemoOutput are called every time app component state change occurs
    <div className="app">
      <h1>Hi There!</h1>
      {/* {showParagraph && <p>This is new!</p>} */}
      {/* Even if the DemoOutput props.show is hard coded to false, DemotOutput is still called as a function and the console.log in it will show*/}
      {/* If this prop.show value is set to false, and react.memo is used, the component of DemoOuput will only run 1 time */}
      <DemoOutput show={showParagraph}/>
      <Button onClick={toggleButtonHandler}>Toggle Button</Button>
      <Button onClick={onAndOffParagraphShowing}>Add Text</Button>
    </div>

    // This gets 4 console.logs at first, 2 from button, 1 from DemoOutput, 1 from App.js
      // 3 console.logs when toggle button clicked due to changes in both buttons and app.js
        // And when Add Text Btn is clieck, 3 console.logs: 1 from DemoOutput.js, 1 from Button.js, 1 from app.js

        
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
