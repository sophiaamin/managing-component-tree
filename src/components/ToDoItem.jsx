import React, { useState } from "react";

// stateless component because it is not
// trying to change itself or anything else.
// All its doing is receiving read-only properties
// and displays them
// props are READ ONLY - cannot modify
// you can add state to the components
function ToDoItem(props) {
  const [toDoDone, setToDoDone] = useState(false);

  function toDoComplete() {
    // use previous value iterator
    setToDoDone(prevValue => {
      return !prevValue;
    });

    // conditional statements:
    // if (toDoDone === true) {
    //   return setToDoDone(false);
    // } else return setToDoDone(true);

    // turnary operator
    // return toDoDone ? setToDoDone(false) : setToDoDone(true);
  }

  return (
    <li
      onClick={toDoComplete}
      style={{ textDecoration: toDoDone ? "line-through" : "none" }}
      back
    >
      {props.item}
    </li>
  );
}

export default ToDoItem;
