import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import SelectableButton from "@/components/core/buttons/SelectableButton";
import Input from "@/components/core/form-elements/Input";
import Select from "@/components/core/form-elements/Select";
import DefaultOpenModal from "@/components/core/modal/DefaultOpenModal";
import PastRecordContainers from "@/components/past-record-containers/PastRecordContainers";
import { useReadChiefComplaintByClientQuery } from "@/features/chief-complaint/chief-complaint-api";
import PastEncounters from "@/pages/chief-complaints/create/PastEncounters";
import { cn } from "@/utilities/cn";
import React from "react";
import { Loader } from "react-feather";

// const data = {
//   1: "Previous Miscarriage",
//   2: "Amniocentesis",
//   3: "Blood Transfusion with Rh+ blood",
//   4: "Previous Rh+ Baby",
// };
const historyData = {
  1: "Cough",
  2: "Chest Pain",
  3: "Fever",
  4: "Night Sweats",
  5: "Weight Loss",
  6: "Fatigue",
  7: "Hemoptysis",
};

const HistoryOfBloodTransfusions = ({ toggler = () => {} }) => {
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
    <DefaultOpenModal
      isShow={true}
      title="History Of Blood Transfusions"
      toggler={toggler}
    >
      <form>
        <div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-2 items-center justify-center">
              <Input label="Number of Units" />
              <Select label="Blood Group">
                <option value="">A +ive</option>
                <option value="">A -ive</option>
                <option value="">B +ive</option>
                <option value="">B -ive</option>
                <option value="">AB +ive</option>
                <option value="">AB -ive</option>
                <option value="">O +ive</option>
                <option value="">O -ive</option>
              </Select>
            </div>

            <div className="flex gap-2 items-center justify-center">
              <Select label="Partner Blood Group">
                <option value="">A +ive</option>
                <option value="">A -ive</option>
                <option value="">B +ive</option>
                <option value="">B -ive</option>
                <option value="">AB +ive</option>
                <option value="">AB -ive</option>
                <option value="">O +ive</option>
                <option value="">O -ive</option>
              </Select>

              <Select label="RH Sensitivity">
                <option value="">Rhesus sensitized</option>
                <option value="">Rhesus non sensitized</option>
              </Select>
            </div>

            <div>
              <div className="input_label">Prior Sensitization</div>
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

export default HistoryOfBloodTransfusions;
