import React, { useState } from "react";

function Square() {
  const [value, setValue] = useState(null);

  function handleClick() {
    setValue("X");
  }

  return (
    <button
      onClick={handleClick}
      className=" w-10 h-10 border-2 bg-white font-bold"
    >
      {value}
    </button>
  );
}

export default function Board() {
  return (
    <div className="flex flex-col place-items-center">
      <div className="flex">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="flex">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="flex">
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
}
