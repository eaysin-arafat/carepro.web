import { MouseEventType } from "@/types/htmlEvents";
import React, { useEffect, useRef, useState } from "react";
import { RxCross2 } from "react-icons/rx";

type Props = {
  onChange?: any;
  name: string;
  className?: string;
  label: string;
  required?: boolean;
  // error?: any;
  errMsg?: string;
  value?: string | null;
  disabled?: any;
  pattern?: any;
  type?: string;
  placeholder?: string;
  handleClear?: () => void;
};

function DatePicker({
  className,
  onChange,
  name,
  label = "Select a Date",
  required,
  value,
  errMsg,
  disabled = false,
  placeholder = "dd/mm/yyyy",
  handleClear,
}: Props) {
  const [selectedDate, setSelectedDate] = useState<string | null>(
    value || null
  );
  const [showDatepicker, setShowDatepicker] = useState(false);
  const [currentYear, setCurrentYear] = useState<number>(
    new Date().getFullYear()
  );
  const [currentMonth, setCurrentMonth] = useState<number>(
    new Date().getMonth() + 1
  );
  // console.log({selectedDate});

  const daysInMonth = (year: number, month: number) =>
    new Date(year, month, 0).getDate();

  const isCurrentDate = (day: any) => {
    const today = new Date();
    return (
      day === today.getDate() &&
      currentMonth === today.getMonth() + 1 &&
      currentYear === today.getFullYear()
    );
  };

  const isCurrentDateSelected = (day: any) => {
    const today = new Date(selectedDate ? selectedDate : "");
    return (
      day === today.getDate() &&
      currentMonth === today.getMonth() + 1 &&
      currentYear === today.getFullYear()
    );
  };

  const generateCalendar = (year: number, month: any) => {
    const days = daysInMonth(year, month);
    const firstDay = new Date(year, month - 1, 1).getDay();
    const calendar: (number | null)[] = [];

    for (let i = 0; i < firstDay; i++) {
      calendar.push(null);
    }

    for (let day = 1; day <= days; day++) {
      calendar.push(day);
    }

    return calendar;
  };
  /**
   * @
   * @param day
   */
  const handleDateSelect = (day: number | null) => {
    if (day !== null) {
      // Get the current time
      const currentTime = new Date();

      // Create a new Date object with the selected date and the current time
      const selectedDate = new Date(
        currentYear,
        currentMonth - 1,
        day,
        currentTime.getHours(),
        currentTime.getMinutes(),
        currentTime.getSeconds()
      );
      // console.log({ selectedDate });

      const isoString = selectedDate.toISOString();
      setSelectedDate(isoString);
      setShowDatepicker(false);

      onChange({ target: { name: name, value: isoString } });
      // onChange(name ,isoString);
    }
  };

  const calendar = generateCalendar(currentYear, currentMonth);

  const datePickerRef: React.RefObject<HTMLDivElement> = useRef(null);

  const clearState = (event: MouseEventType) => {
    event.preventDefault();

    setSelectedDate(null);
    handleClear && handleClear();
    // setShowDatepicker(false);
  };

  /**
   * Datepicker show top or bottom Start
   * @returns
   */
  const shouldShowAbove = () => {
    if (datePickerRef.current) {
      const inputRect = datePickerRef.current.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      const threshold = 300;
      return inputRect.bottom + threshold > windowHeight;
    }
    return false;
  };

  const datePickerStyle: React.CSSProperties = {
    position: "absolute",
    top: shouldShowAbove() ? "auto" : "100%",
    bottom: shouldShowAbove() ? "100%" : "auto",
    left: 0,
    zIndex: 20,
  };
  /**
   * Datepicker show top or bottom - End
   * @returns
   */

  useEffect(() => {
    // Add a click event listener to the document
    const handleDocumentClick = (e: any) => {
      if (datePickerRef.current && !datePickerRef.current.contains(e.target)) {
        setShowDatepicker(false);
      }
    };

    document.addEventListener("click", handleDocumentClick);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <>
      <div
        ref={datePickerRef}
        className="relative flex w-[100%] flex-col items-start justify-start gap-[6px]"
      >
        <div className="flex">
          <div className="input_label ">
            {" "}
            {label}
          </div>
          {required && (
            <span className="-mt-[6px] mx-1 text-dangerColor">*</span>
          )}
        </div>
        <input
          type="text"
          placeholder={`${placeholder}`}
          name={name}
          // onChange={handleChange}
          disabled={disabled}
          onClick={() => setShowDatepicker(!showDatepicker)}
          value={selectedDate ? formatDate(new Date(selectedDate)) : ""}
          className={`custom-input w-[100%] ${disabled && "disabled_bg"} ${className}`}
        />
        {showDatepicker && (
          <div
            className="absolute bg-whiteColor border border-grayColor rounded-md z-20 pb-2"
            style={datePickerStyle}
          >
            {/* <div className="absolute mt-[70px] bg-whiteColor border border-grayColor w-72 rounded-md z-20 mb-9 pb-2"> */}
            <div className="bg-borderColor pt-3">
              <div className="flex justify-between mb-2 px-2 gap-1">
                <button
                  onClick={() => setShowDatepicker(false)}
                  className="border border-grayColor rounded-full h-fit mt-2"
                >
                  <RxCross2 className="bg-borderColor shadow-md text-xl p-1 rounded-full h-6 w-6" />
                </button>
                <button
                  onClick={clearState}
                  className="border border-grayColor rounded px-1 shadow h-fit mt-2"
                >
                  Clear
                </button>
                {/* <div> */}
                <select
                  className="bg-borderColor rounded border-none focus:outline-none focus:ring-0"
                  value={currentMonth}
                  onChange={(e) => setCurrentMonth(Number(e.target.value))}
                >
                  {renderMonthOptions()}
                </select>{" "}
                {/* -{" "} */}
                <select
                  className="bg-borderColor rounded border-none focus:outline-none focus:ring-0"
                  value={currentYear}
                  onChange={(e) => setCurrentYear(Number(e.target.value))}
                >
                  {renderYearOptions()}
                </select>
                {/* </div> */}
              </div>
              <div className="grid grid-cols-7 gap-1 px-2 mt-4 pb-2 border-b border-grayColor">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                  (day: string) => (
                    <div key={day} className="text-center">
                      {day}
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="grid grid-cols-7 gap-1 px-2 py-4">
              {calendar.map((day: any, index: any) => (
                <div
                  key={index}
                  onClick={() => handleDateSelect(day)}
                  className={` flex cursor-pointer items-center justify-center rounded-md text-center h-7 w-7 ${
                    day
                      ? isCurrentDate(day)
                        ? "bg-borderColor hover:bg-blue-700"
                        : "hover:bg-borderColor"
                      : ""
                  } ${
                    isCurrentDateSelected(day)
                      ? "bg-primaryColor hover:bg-blue-700 text-whiteColor rounded-md"
                      : ""
                  }`}
                >
                  {day}
                </div>
              ))}
            </div>
          </div>
        )}
        {/* <div
            className="date-picker-icon absolute top-2 right-5 mt-7"
            onClick={() => setShowDatepicker(!showDatepicker)}
          >
            <MdDateRange className="text-2xl text-grayColor" />
          </div> */}
        {errMsg && (
          <p className="text-sm mt-1 " style={{ color: "red" }}>
            {errMsg}
          </p>
        )}
      </div>
    </>
  );
}

export default DatePicker;

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const renderYearOptions = () => {
  const currentYear = new Date().getFullYear();
  const last100Years = currentYear - 100;
  const next10Years = currentYear + 10;

  const years = [];
  for (let year = last100Years; year <= next10Years; year++) {
    years.push(year);
  }

  return years.map((year) => (
    <option key={year} value={year}>
      {year}
    </option>
  ));
};

const renderMonthOptions = () => {
  return Array.from({ length: 12 }, (_, i) => (
    <option key={i} value={i + 1}>
      {/* {i + 1} */}
      {months[i + 1 - 1]}
    </option>
  ));
};

const formatDate = (date: any) => {
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};
