import { createContext, useContext } from "react";

/**
 * Below solution highlights the solution to the problem of prop drilling
 */

const UserContext = createContext();

export default function Context() {
  const user = { name: "Doe" };
  return (
    <UserContext.Provider value={user}>
      <h1>Prop Drilling Component</h1>
      <Parent />
    </UserContext.Provider>
  );
}

function Parent() {
  return (
    <>
      <h2>Parent Component</h2>
      <Child />
    </>
  );
}

function Child() {
  return (
    <>
      <h3>Child Component</h3>
      <GrandChild />;
    </>
  );
}

function GrandChild() {
  const { name } = useContext(UserContext);
  return <h4>GrandChild Component, name is {name}</h4>;
}
