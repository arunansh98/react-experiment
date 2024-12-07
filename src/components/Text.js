function Text(props) {
  const { value, onChange } = props;
  return (
    <input
      type="text"
      placeholder="Enter text"
      className="text-class"
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  );
}

export default Text;
