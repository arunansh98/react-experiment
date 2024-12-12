import React from "react";

const Button = React.memo((props) => {
  console.log("child component rendered!");
  const { onClick } = props;
  return <button onClick={onClick}>SEARCH!</button>;
});

export default Button;
