import React, { useState } from "react";

export default function Square(props) {
  //   const [value, setValue] = useState(null);
  //   function handleClick() {
  //     setValue("X");
  //   }
  return (
    <div>
      <button
        className="border p-4 h-24 w-24 border-black"
        onClick={props.onSquareClick}
      >
        {props.value}
      </button>
    </div>
  );
}
