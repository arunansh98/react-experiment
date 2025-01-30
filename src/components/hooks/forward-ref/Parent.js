// forwardRef hook can be used to take reference of child component and call the child function
// useImperativeHandle declares all the functions inside the child that be called from Parent through the use of child ref

import { useRef } from "react";
import Child from "./Child";

export default function Parent() {
  const childRef = useRef(null);

  const triggerChild = () => {
    if (childRef.current) {
      // trigger child function using forward ref
      childRef.current.anotherTriggerFunction();
    }
  };

  return (
    <div>
      <button
        className="border-solid border-[red] border-[1px] rounded-[5px] p-[1rem]"
        onClick={triggerChild}
      >
        Parent Trigger Button
      </button>
      <div style={{ padding: "1rem" }}>
        <Child ref={childRef} />
      </div>
    </div>
  );
}
