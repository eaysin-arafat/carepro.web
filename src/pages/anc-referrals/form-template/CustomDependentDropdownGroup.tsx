const CustomDependentDropdownGroup = ({ children }) => {
  return (
    <div className="mt-4 px-12 py-8 border border-gray-300 flex flex-col gap-5 rounded">
      <div className="flex flex-col gap-3">{children}</div>
    </div>
  );
};

export default CustomDependentDropdownGroup;
