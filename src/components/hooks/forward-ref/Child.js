import { forwardRef, useImperativeHandle } from "react";

const Child = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    triggerFunction: () => {
      alert("Child function triggered from parent !");
    },
    anotherTriggerFunction: () => {
      alert("Another Child function triggered from parent !");
    },
  }));

  return "Child component works !";
});

export default Child;
