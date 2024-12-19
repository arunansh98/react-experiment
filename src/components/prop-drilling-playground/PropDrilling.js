export default function PropDrilling() {
  const user = { name: "Doe" };
  return (
    <>
      <h1>Prop Drilling Component</h1>
      <Parent user={user} />
    </>
  );
}

function Parent(props) {
  const { user } = props;
  return (
    <>
      <h2>Parent Component</h2>
      <Child user={user} />
    </>
  );
}

function Child(props) {
  const { user } = props;
  return (
    <>
      <h3>Child Component</h3>
      <GrandChild user={user} />;
    </>
  );
}

function GrandChild(props) {
  const { user } = props;
  return <h4>GrandChild Component, name is {user.name}</h4>;
}
