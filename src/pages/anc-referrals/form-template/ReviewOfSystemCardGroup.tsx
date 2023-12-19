const ReviewOfSystemCardGroup = ({ children, className = "" }) => {
  return (
    <div
      className={`grid lg:grid-cols-2 md:grid-cols-2 gap-4 py-4 ${className}`}
    >
      {children}
    </div>
  );
};

export default ReviewOfSystemCardGroup;
