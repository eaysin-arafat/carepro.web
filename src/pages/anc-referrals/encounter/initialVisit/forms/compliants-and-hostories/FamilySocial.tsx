import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import Textarea from "@/components/core/form-elements/Textarea";
import DefaultOpenModal from "@/components/core/modal/DefaultOpenModal";
import PastRecordContainers from "@/components/past-record-containers/PastRecordContainers";
import { useReadChiefComplaintByClientQuery } from "@/features/chief-complaint/chief-complaint-api";
import { Loader } from "react-feather";
import PastEncounters from "@/pages/chief-complaints/create/PastEncounters";

const FamilySocial = ({ toggler }) => {
  const { data, isLoading, status } = useReadChiefComplaintByClientQuery(
    "a1497272-3783-46f6-922a-08dbd06dc4d8"
  );

  return (
    <DefaultOpenModal
      title="Presenting Complains"
      isShow={true}
      toggler={toggler}
    >
      <form>
        <div className="flex flex-col gap-6">
          <div>
            <div className="space-y-4">
              <Textarea
                label="Presenting Complaint"
                placeholder="Presenting Complaint"
                required
              />
              <div>
                <Textarea
                  label="History of Presenting Complaint"
                  placeholder="History of Presenting Complaint"
                  required
                />
                <p className="note">
                  <b>Note :</b> Please document alchohol consumption, smoking
                  and any additional comments.
                </p>
              </div>
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
      </form>
    </DefaultOpenModal>
  );
};

export default FamilySocial;
