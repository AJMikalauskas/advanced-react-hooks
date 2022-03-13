import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
  // This shows even with React.memo() beause the function called with onClick is different every time props is called
    // The function called is a reference value and not primitive, so the date within cause new props info each time
  console.log("Button Component Is Called!");
  return (
    <button
      type={props.type || 'button'}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

                    // Since the button has the same comparison, but the functon is a reference type and info inside the reference type
                        // may be different which cause another reference type like an array to have the best example.
                            // [1,2,3] === [1,2,3] returns false due to reference type
export default React.memo(Button);
