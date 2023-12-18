import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import SelectableButton from "@/components/core/buttons/SelectableButton";
import DatePicker from "@/components/core/form-elements/CustomDatePicker";
import Input from "@/components/core/form-elements/Input";
import Select from "@/components/core/form-elements/Select";
import DefaultOpenModal from "@/components/core/modal/DefaultOpenModal";
import PastRecordContainers from "@/components/past-record-containers/PastRecordContainers";
import { useReadChiefComplaintByClientQuery } from "@/features/chief-complaint/chief-complaint-api";
import PastEncounters from "@/pages/chief-complaints/create/PastEncounters";
import { cn } from "@/utilities/cn";
import React from "react";
import { Loader } from "react-feather";

const provinceData = [
  {
    id: 1,
    name: "Lusaka",
  },
  {
    id: 2,
    name: "North-Western",
  },
  {
    id: 3,
    name: "Northern",
  },
  {
    id: 4,
    name: "Copperbelt",
  },
  {
    id: 5,
    name: "Muchinga",
  },
  {
    id: 6,
    name: "Southern",
  },
  {
    id: 7,
    name: "Luapula",
  },
  {
    id: 8,
    name: "Eastern",
  },
  {
    id: 9,
    name: "Western",
  },
  {
    id: 10,
    name: "Central",
  },
];

const historyData = {
  1: "Examination",
  2: "Pregnancy test",
  3: "Ultrasound",
  4: "Fetal movement",
};

const Bookings = ({ toggler = () => {} }) => {
  const [selectedItems, setSelectedItems] = React.useState<string[]>([]);

  const { data, isLoading, status } = useReadChiefComplaintByClientQuery(
    "a1497272-3783-46f6-922a-08dbd06dc4d8"
  );

  const handleSelect = (item: string) => {
    if (selectedItems?.includes(item)) {
      setSelectedItems((prev) => prev.filter((i) => i !== item));
      // handleChange(selectedItems.filter((i) => i !== item));
    } else {
      setSelectedItems((prev) => [...prev, item]);
      // handleChange([...selectedItems, item]);
    }
  };

  return (
    <DefaultOpenModal isShow={true} title="Bookings" toggler={toggler}>
      <form>
        <div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-2 items-center justify-center">
              <Select label="Province">
                {provinceData.map((province) => (
                  <option value="" key={province.id}>
                    {province.name}
                  </option>
                ))}
              </Select>

              <Select label="District" selectShow="Please Select">
                {/* <option value="">A +ive</option> */}
              </Select>

              <Select label="Partner Blood Group"></Select>
            </div>

            <div className="flex gap-2 items-center justify-center">
              <DatePicker
                label="Pregnancy confirmed date"
                onChange={() => {}}
                name="pregnancy-confirm-date"
                placeholder="Enter pregnancy confirmed date"
              />

              <DatePicker
                label="Date of quickening?"
                onChange={() => {}}
                name="quickening-date"
                placeholder="Enter date of quickening"
              />

              <Input
                label="Quickening Weeks?"
                placeholder="Enter Quickening Weeks"
              />
            </div>

            <div>
              <div className="input_label">How was the pregnancy confirmed</div>
              <div className={cn(`grid gap-3 mt-2 grid-cols-7`)}>
                {Object.keys(historyData).map((item, index) => (
                  <SelectableButton
                    key={index}
                    isActive={selectedItems?.includes(item)}
                    text={historyData[item]}
                    handler={() => handleSelect(item)}
                  />
                ))}
              </div>
            </div>
          </div>
          <hr className="my-6" />

          {/* PAST RECORD CONTAINERS */}
          <PastRecordContainers>
            {(isLoading || status === "pending") && (
              <div className="flex w-full justify-center items-center">
                <Loader size={40} className="animate-spin" />
              </div>
            )}

            {data?.map((item, index) => (
              <PastEncounters key={index} data={item} />
            ))}
          </PastRecordContainers>

          {/* BUTTONS */}
          <CancelAndAddButton toggler={toggler} />
        </div>
      </form>
    </DefaultOpenModal>
  );
};

export default Bookings;
