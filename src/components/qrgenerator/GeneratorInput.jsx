const GeneratorInput = ({ type, placeholder, setText }) => {
  return (
    <input
      className="form-control mb-3"
      type={type}
      name={type}
      placeholder={placeholder}
      required
      onChange={(e) => setText(e.target.value)}
    />
  );
};

export default GeneratorInput;
