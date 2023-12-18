import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import Select from "@/components/core/form-elements/Select";
import DefaultOpenModal from "@/components/core/modal/DefaultOpenModal";
import PastRecordContainers from "@/components/past-record-containers/PastRecordContainers";
import { useReadChiefComplaintByClientQuery } from "@/features/chief-complaint/chief-complaint-api";
import FormGroup from "@/pages/anc-referrals/form-template/FormGroup";
import PastEncounters from "@/pages/chief-complaints/create/PastEncounters";
import { useState } from "react";
import { Loader } from "react-feather";
import AnotherClinic from "./select-based-form/AnotherClinic";
import MadeInactive from "./select-based-form/MadeInactive";
import StoppedART from "./select-based-form/StoppedART";
import Reactivated from "./select-based-form/Reactivated";

const patientStatusData = [
  { id: 1, name: "Patient is being sent to antoher clinic" },
  { id: 2, name: "Patient is being made inactive" },
  { id: 3, name: "Patient has stopped ART" },
  { id: 4, name: "Patient is being reactivated" },
  { id: 5, name: "Patient has diad" },
];

const InitialAlreadyPaitentStatusForm = ({ toggler = () => {} }) => {
  const [selectedStatus, setSelectedStatus] = useState("");
  const [activeIndex, setActiveIndex] = useState(null);

  const { data, isLoading, status } = useReadChiefComplaintByClientQuery(
    "a1497272-3783-46f6-922a-08dbd06dc4d8"
  );

  const statusForm = [
    <AnotherClinic />,
    <MadeInactive />,
    <StoppedART />,
    <Reactivated />,
    "",
  ];

  console.log(statusForm[activeIndex]);

  return (
    <DefaultOpenModal isShow={true} title="Patient Status" toggler={toggler}>
      <form>
        <div>
          <div className="flex flex-col gap-3">
            <FormGroup title="Change in patient status">
              <Select
                label="Status"
                className="py-1 rounded"
                value={selectedStatus}
                onChange={(e) => {
                  const selectedValue = e.target.value;

                  setSelectedStatus(selectedValue);
                  const foundIndex = patientStatusData.findIndex(
                    (status) => status.name === selectedValue
                  );
                  setActiveIndex(foundIndex !== -1 ? foundIndex : null);
                }}
              >
                {patientStatusData.map((status) => (
                  <option key={status.id}>{status.name}</option>
                ))}
              </Select>
            </FormGroup>

            {(selectedStatus || activeIndex === 4) && statusForm[activeIndex]}
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

export default InitialAlreadyPaitentStatusForm;
