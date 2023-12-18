import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import DefaultOpenModal from "@/components/core/modal/DefaultOpenModal";
import PastRecordContainers from "@/components/past-record-containers/PastRecordContainers";
import { useReadChiefComplaintByClientQuery } from "@/features/chief-complaint/chief-complaint-api";
import PastEncounters from "@/pages/chief-complaints/create/PastEncounters";
import { Loader } from "react-feather";
import Checkbox from "@/components/core/form-elements/Checkbox";
import Textarea from "@/components/core/form-elements/Textarea";

const TreatmentPlan = ({ toggler = () => {} }) => {
  const { data, isLoading, status } = useReadChiefComplaintByClientQuery(
    "a1497272-3783-46f6-922a-08dbd06dc4d8"
  );

  return (
    <DefaultOpenModal isShow={true} title="Treatment Plan" toggler={toggler}>
      <form>
        <div>
          <div className="flex flex-col gap-3">
            <Textarea label="Treatment Plan" className="h-48" required />

            <div className="flex items-center justify-between">
              <h1 className="font-semibold">Suggestion: NTG</h1>
              <div>
                <Checkbox label="Copy Proposed Treatment Plan" />
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

export default TreatmentPlan;
