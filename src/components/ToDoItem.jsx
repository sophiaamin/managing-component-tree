import React from "react";

// stateless component because it is not
// trying to change itself or anything else.
// All its doing is receiving read-only properties
// and displays them
// props are READ ONLY - cannot modify
// you can add state to the components
function ToDoItem(props) {
  return (
    // do not do!! this is not how you pass functions...this is calling them -> <div onClick={props.onChecked(props.id)}>
    //  above is executed on rendered
    <div
      onClick={() => {
        // this is only execute once the item is clicked
        props.onChecked(props.id);
      }}
    >
      <li>{props.item}</li>
    </div>
  );
}

export default ToDoItem;
