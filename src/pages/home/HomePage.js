import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { homeAction } from "../../store/action";

const HomePage = () => {
  const [counter, setCounter] = useState(0);

  const dispatch = useDispatch();

  const counterFunc = (val) => {
    let count = val === "plus" ? counter + 1 : counter - 1;
    setCounter(count);
    dispatch(homeAction.setCounter(count));
  };

  return (
    <div>
      <center>
        <h1> Current Count : {counter} </h1> <hr />
        <button onClick={() => counterFunc("plus")}> + </button> &nbsp;
        <button onClick={() => counterFunc("min")}> - </button>
      </center>
    </div>
  );
};

export default HomePage;
