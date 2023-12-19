import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import SelectableButton from "@/components/core/buttons/SelectableButton";
import DatePicker from "@/components/core/form-elements/CustomDatePicker";
import Input from "@/components/core/form-elements/Input";
import Select from "@/components/core/form-elements/Select";
import DefaultOpenModal from "@/components/core/modal/DefaultOpenModal";
import PastRecordContainers from "@/components/past-record-containers/PastRecordContainers";
import { useReadChiefComplaintByClientQuery } from "@/features/chief-complaint/chief-complaint-api";
import Section from "@/pages/anc-referrals/form-template/Section";
import PastEncounters from "@/pages/chief-complaints/create/PastEncounters";
import { cn } from "@/utilities/cn";
import React, { useState } from "react";
import { Loader } from "react-feather";

const provinceData = [
  {
    id: 1,
    name: "Lusaka",
    district: [
      { name: "ABcd", fasciluty: ["A", "B", "C"] },
      { name: "fsbb", fasciluty: ["f", "v", "f"] },
      { name: "ABcd", fasciluty: ["A", "B", "C"] },
    ],
  },
  {
    id: 2,
    name: "North-Western",
    district: [
      { name: "ABcd", fasciluty: ["A", "B", "C"] },
      { name: "fsbb", fasciluty: ["f", "v", "f"] },
      { name: "ABcd", fasciluty: ["A", "B", "C"] },
    ],
  },
  {
    id: 3,
    name: "Northern",
    district: [
      { name: "ABcd", fasciluty: ["A", "B", "C"] },
      { name: "fsbb", fasciluty: ["f", "v", "f"] },
      { name: "ABcd", fasciluty: ["A", "B", "C"] },
    ],
  },
  {
    id: 4,
    name: "Copperbelt",
    district: [
      { name: "ABcd", fasciluty: ["A", "B", "C"] },
      { name: "fsbb", fasciluty: ["f", "v", "f"] },
      { name: "ABcd", fasciluty: ["A", "B", "C"] },
    ],
  },
  {
    id: 5,
    name: "Muchinga",
    district: [
      { name: "ABcd", fasciluty: ["A", "B", "C"] },
      { name: "fsbb", fasciluty: ["f", "v", "f"] },
      { name: "ABcd", fasciluty: ["A", "B", "C"] },
    ],
  },
  {
    id: 6,
    name: "Southern",
    district: [
      { name: "Efc", fasciluty: ["A", "B", "C"] },
      { name: "Dc", fasciluty: ["f", "v", "f"] },
      { name: "Rw", fasciluty: ["A", "B", "C"] },
    ],
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

  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [facility, setFasility] = useState("");

  const [selectDistrict, setSelectDistrict] = useState([]);
  const [selectFacility, setSelectFacility] = useState([]);

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

  const handleProvince = (event) => {
    setProvince(event.target.value);
    setSelectDistrict(
      provinceData.find((distr) => distr.name === event.target.value).district
    );
  };

  const handleDistrict = (event) => {
    setDistrict(event.target.value);
    setSelectFacility(
      selectDistrict.find((facility) => facility.name === event.target.value)
        .fasciluty
    );
  };

  return (
    <DefaultOpenModal isShow={true} title="Bookings" toggler={toggler}>
      <form>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <Select
              label="Province"
              value={province}
              onChange={handleProvince}
              required
            >
              {provinceData.map((province) => (
                <option value={province.name} key={province.id}>
                  {province.name}
                </option>
              ))}
            </Select>

            <Select
              label="District"
              selectShow="Please Select"
              value={district}
              onChange={handleDistrict}
              required
            >
              {selectDistrict.map((distr, index) => (
                <option value={distr.name} key={index}>
                  {distr.name}
                </option>
              ))}
            </Select>

            <Select
              label="Partner Blood Group"
              value={facility}
              onChange={(e) => setFasility(e.target.value)}
              required
            >
              {selectFacility.map((facility, index) => (
                <option value={facility} key={index}>
                  {facility}
                </option>
              ))}
            </Select>

            <DatePicker
              label="Pregnancy confirmed date"
              onChange={() => {}}
              name="pregnancy-confirm-date"
              placeholder="Enter pregnancy confirmed date"
              required
            />

            <DatePicker
              label="Date of quickening?"
              onChange={() => {}}
              name="quickening-date"
              placeholder="Enter date of quickening"
              required
            />

            <Input
              label="Quickening Weeks?"
              placeholder="Enter Quickening Weeks"
            />

            <Section
              title="How Was The Pregnancy Confirmed"
              className="col-span-3"
            >
              <div
                className={cn(
                  `grid gap-3 mt-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4`
                )}
              >
                {Object.keys(historyData).map((item, index) => (
                  <SelectableButton
                    key={index}
                    isActive={selectedItems?.includes(item)}
                    text={historyData[item]}
                    handler={() => handleSelect(item)}
                  />
                ))}
              </div>
            </Section>
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
