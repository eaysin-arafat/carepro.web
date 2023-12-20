const FormGroup = ({ children, title, className = "" }) => {
  return (
    <div className={`${className}`}>
      <h1 className="input-group-title">{title}</h1>
      <hr className="my-2 mb-3" />

      <div className={`flex flex-col gap-3`}>{children}</div>
    </div>
  );
};

export default FormGroup;
