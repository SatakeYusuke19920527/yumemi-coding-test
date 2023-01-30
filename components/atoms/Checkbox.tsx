const Checkbox = ({ label }: { label: string }) => {
  return <input type="checkbox" name={label} id={label} />;
};

export default Checkbox;
