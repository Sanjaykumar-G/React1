import React, { useState, useEffect } from "react";

const LifecycleFunctional = () => {
  const [message, setMessage] = useState("Hello, React!");

  console.log("Render called");

  useEffect(() => {
    console.log("ComponentDidMount called");

    return () => {
      console.log("ComponentWillUnmount called");
    };
  }, []);

  useEffect(() => {
    console.log("ComponentDidUpdate called");
  }, [message]);

  const handleClick = () => {
    setMessage("Updated message!");
  };
return (
    <div>
      <p>{message}</p>
      <button onClick={handleClick}>Update Message</button>
    </div>
  );
};

export default LifecycleFunctional;