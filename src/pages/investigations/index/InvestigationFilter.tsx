import { useReadTestsQuery } from "@/features/investigation/investigation-enum-api";
import useWindowWidth from "@/hooks/useWindow";
import { OnchangeEventType } from "@/types/htmlEvents";
import { cn } from "@/utilities/cn";
import React from "react";
import { FiPlusCircle } from "react-icons/fi";
import DateInput from "../../../components/core/form-elements/DatePicker";
import Select from "../../../components/core/form-elements/Select";

type Props = {
  title?: string;
  className?: string;
  priority: string | number;
  setPriority: React.Dispatch<React.SetStateAction<number>>;
  test: string | number;
  setTest: React.Dispatch<React.SetStateAction<number>>;
  department?: string | number;
  setDepartment?: React.Dispatch<React.SetStateAction<number>>;
  setDate?: React.Dispatch<React.SetStateAction<Date | null>>;
  date?: Date | null;
  handleSearch?: () => void;
  name?: string;
  setName?: React.Dispatch<React.SetStateAction<string>>;
  handleInvestigationForm: () => void;
};

const InvestigationFilter = ({
  handleInvestigationForm,
  title,
  className,
  // priority,
  setPriority,
  setTest,
  setDate,
  date,
}: // name,
// setName,
// test,
// setDepartment,
// handleSearch,
Props) => {
  const w1100 = useWindowWidth(1100);

  // test enum
  const { data: tests } = useReadTestsQuery(undefined);

  return (
    <div>
      <div
        className={cn(
          `bg-whiteBgColor border border-borderColor p-5 pb-4 rounded-md  ${
            w1100 && "mt-2"
          }`,
          className
        )}
      >
        {title && (
          <h1 className="text-3xl font-medium text-black dark:text-white mb-4">
            {title}
          </h1>
        )}
        <div className="grid grid-cols-8 gap-3">
          <div
            className={`${"isFiltersHidden"} md:block col-span-10 md:col-span-5 lg:col-span-2 w-full`}
          >
            <DateInput
              isClearable
              onChange={setDate}
              selected={date}
              // placeholderText="Order Date"
              label="Order Date"
              max={new Date()}
            />
          </div>

          <div
            className={`${"isFiltersHidden"} md:block col-span-10 md:col-span-5 lg:col-span-2 w-full`}
          >
            <Select
              // value={priority}
              selectShow="All"
              onChange={(e: OnchangeEventType) => setPriority(+e.target.value)}
              label="Priority"
            >
              <option value="1">Regular</option>
              <option value="2">Urgent</option>
              <option value="3">Emergency</option>
            </Select>
          </div>
          <div
            className={` md:block col-span-1 md:col-span-5 lg:col-span-2 w-full`}
          >
            <Select
              selectShow="All"
              onChange={(e: OnchangeEventType) => setTest(+e.target.value)}
              label="Test Name"
            >
              {Array.isArray(tests) &&
                tests
                  ?.slice()
                  .sort(sortByString)
                  ?.map((item) => (
                    <option key={item?.oid} value={item?.oid}>
                      {item?.title}
                    </option>
                  ))}
            </Select>
          </div>
          <div className="md:block col-span-10 md:col-span-8 lg:col-span-2 w-full">
            <div className="h-full flex items-center w-full justify-end">
              <button
                onClick={handleInvestigationForm}
                className="flex gap-2 main_btn px-4 sm:px-4 text-[14px] sm:text-base py-2.5"
              >
                <FiPlusCircle className="text-xl sm:text-2xl " /> Add
                Investigation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestigationFilter;

const sortByString = (a, b) => {
  return a.title.localeCompare(b.title);
};
