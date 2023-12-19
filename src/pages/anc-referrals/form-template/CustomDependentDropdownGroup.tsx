const CustomDependentDropdownGroup = ({ children }) => {
  return (
    <div className="mt-4 px-3 lg:px-12 md:px-12 py-5 md:py-8 lg:py-8 border border-gray-300 flex flex-col gap-5 rounded">
      <div className="flex flex-col gap-3">{children}</div>
    </div>
  );
};

export default CustomDependentDropdownGroup;
