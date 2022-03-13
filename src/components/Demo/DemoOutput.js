import React from "react";

const DemoOutput = (props) => {
    // This will be called everytime since the app component is called everytime state changes which in turn would call this everytime
    // STATE DETERMINES what is showing in this
    console.log("Demo output runs only on state change due to react.memo");
    return <p>{props.show ? "This is news" : ""}</p>
}

// Can stop this from re-running in app.js if there is no actual state change in this component *React.memo*
    // This will not work for Class Based Components - Check previous value of props and compares against new value of props: or state
        // This component will only re-run if there is changes to the state/props.
            
            // Technically, the false value set in App.js is new everytime but since it's a primitive value, 
                // compares like this expression (props.show === props.previous.show) and false === false returns true
                    // Since the button has the same comparison, but the functon is a reference type and info inside the reference type
                        // may be different which cause another reference type like an array to have the best example.
                            // [1,2,3] === [1,2,3] returns false due to reference type
export default React.memo(DemoOutput);