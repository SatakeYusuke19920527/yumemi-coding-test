const Label = ({ label }: { label: string }) => {
  return (
    <label id={label} htmlFor={label}>
      {label}
    </label>
  );
};

export default Label;
