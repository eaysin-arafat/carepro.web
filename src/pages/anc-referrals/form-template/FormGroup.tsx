const FormGroup = ({ children, title, className = "" }) => {
  return (
    <div className="my-1">
      <h1 className="input-group-title">{title}</h1>
      <hr className="my-2 mb-3" />

      <div className={`${className} flex flex-col gap-3`}>{children}</div>
    </div>
  );
};

export default FormGroup;
