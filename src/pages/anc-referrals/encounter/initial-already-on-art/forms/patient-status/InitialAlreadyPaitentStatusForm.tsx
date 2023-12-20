import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import Select from "@/components/core/form-elements/Select";
import DefaultOpenModal from "@/components/core/modal/DefaultOpenModal";
import PastRecordContainers from "@/components/past-record-containers/PastRecordContainers";
import { useReadChiefComplaintByClientQuery } from "@/features/chief-complaint/chief-complaint-api";
import PastEncounters from "@/pages/chief-complaints/create/PastEncounters";
import { useState } from "react";
import { Loader } from "react-feather";
import AnotherClinic from "./select-based-form/AnotherClinic";
import MadeInactive from "./select-based-form/MadeInactive";
import StoppedART from "./select-based-form/StoppedART";
import Reactivated from "./select-based-form/Reactivated";
import Section from "@/pages/anc-referrals/form-component/Section";

const patientStatusData = [
  {
    id: 1,
    name: "Patient is being sent to antoher clinic",
    component: <AnotherClinic />,
  },
  {
    id: 2,
    name: "Patient is being made inactive",
    component: <MadeInactive />,
  },
  { id: 3, name: "Patient has stopped ART", component: <StoppedART /> },
  { id: 4, name: "Patient is being reactivated", component: <Reactivated /> },
  { id: 5, name: "Patient has diad", component: "" },
];

const InitialAlreadyPaitentStatusForm = ({ toggler = () => {} }) => {
  const [selectedStatus, setSelectedStatus] = useState("");
  const [activeIndex, setActiveIndex] = useState(null);

  const { data, isLoading, status } = useReadChiefComplaintByClientQuery(
    "a1497272-3783-46f6-922a-08dbd06dc4d8"
  );

  return (
    <DefaultOpenModal isShow={true} title="Patient Status" toggler={toggler}>
      <form>
        <div>
          <div className="flex flex-col gap-3">
            <Section title="Change in patient status">
              <Select
                label="Status"
                value={selectedStatus}
                onChange={(e) => {
                  const selectedValue = e.target.value;

                  setSelectedStatus(selectedValue);
                  const foundIndex = patientStatusData.findIndex(
                    (status) => status.name === selectedValue
                  );
                  setActiveIndex(foundIndex !== -1 ? foundIndex : null);
                }}
                required
              >
                {patientStatusData.map((status) => (
                  <option key={status.id}>{status.name}</option>
                ))}
              </Select>
            </Section>

            {(selectedStatus || activeIndex === 4) &&
              patientStatusData[activeIndex].component}
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
