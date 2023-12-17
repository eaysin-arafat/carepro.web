import { IoMdArrowDropdown } from "react-icons/io";
import Input from "../../../components/core/form-elements/Input";

const CustomDropdown = ({
  label,
  open,
  inputValue,
  setInputValue,
  selected,
  setSelected,
  optionOnClick,
  selectOnClick,
  data = [],
}) => {
  const filteredData = data.filter((level) =>
    level?.name?.toLowerCase().startsWith(inputValue.toLowerCase())
  );

  return (
    <div className="relative cursor-pointer ">
      <div
        className={`custom-input bg-white w-full px-4 py-2 flex flex-col items-start gap-1 rounded ${
          !selected && "text-gray-700"
        }`}
        onClick={selectOnClick}
      >
        <div className="flex items-center w-full justify-between">
          <span className="input_label">{label}</span>
          <IoMdArrowDropdown size={20} className={`${open && "rotate-180"}`} />
        </div>
        <h1 className="input_label">
          {selected
            ? selected?.length > 50
              ? selected?.substring(0, 50) + "..."
              : selected
            : "Select"}
        </h1>
      </div>

      <div
        className={`absolute w-full rounded-b-[6px] text-blackColor dark:text-gray-400 bg-whiteColor dark:bg-[#000] box-border z-50 border-[2px] border-solid border-borderColor dark:border-[#6B7280]  ${
          open ? "" : "hidden"
        }`}
      >
        <div className=" top-0 mx-1">
          <Input
            value={inputValue}
            placeholder=" "
            className="w-full h-9 border border-black rounded p-2 focus:border-2 focus:border-black mb-1"
            onChange={(e) => setInputValue(e.target.value.toLocaleLowerCase())}
          />
        </div>

        <p
          className={`${
            filteredData.length === 0 ? "h-9 flex items-center ml-3" : "hidden"
          }`}
        >
          No results found
        </p>

        <ul className="overflow-y-auto max-h-60">
          <li
            className={`p-2 mt-1 text-sm hover:bg-sky-600 hover:text-white cursor-pointer ${
              !selected && "bg-sky-600 text-white"
            } ${inputValue ? "hidden" : ""}`}
            onClick={optionOnClick}
          >
            <div className={`cursor-pointer ${!selected && "text-white"}`}>
              Select
            </div>
          </li>

          {data?.map((level) => (
            <li
              key={level.id}
              className={`p-2 text-sm hover:bg-sky-600 hover:text-white cursor-pointer ${
                level?.name?.toLowerCase() === selected?.toLowerCase() &&
                "bg-gray-300 text-black"
              } ${
                level?.name?.toLowerCase().startsWith(inputValue)
                  ? ""
                  : "hidden"
              }`}
              onClick={() => {
                if (level?.name?.toLowerCase() !== selected.toLowerCase()) {
                  setSelected(level?.name);
                  optionOnClick();
                }
              }}
            >
              {level?.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CustomDropdown;
