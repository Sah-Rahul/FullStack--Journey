import React, { memo } from "react";

const Child = memo(({count}) => {
  console.log("Child re-render");
  return <h2>Child Component {count}</h2>;
});

export default Child;