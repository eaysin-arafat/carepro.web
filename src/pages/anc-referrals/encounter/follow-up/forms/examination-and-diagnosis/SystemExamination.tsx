import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import SubmitButton from "@/components/core/buttons/SubmitButton";
import Select from "@/components/core/form-elements/Select";
import Textarea from "@/components/core/form-elements/Textarea";
import DefaultOpenModal from "@/components/core/modal/DefaultOpenModal";
import PastRecordContainers from "@/components/past-record-containers/PastRecordContainers";
import { useReadChiefComplaintByClientQuery } from "@/features/chief-complaint/chief-complaint-api";
import PastEncounters from "@/pages/chief-complaints/create/PastEncounters";
import { Loader, PlusCircle } from "react-feather";

const SystemExamination = ({ toggler = () => {} }) => {
  const { data, isLoading, status } = useReadChiefComplaintByClientQuery(
    "a1497272-3783-46f6-922a-08dbd06dc4d8"
  );

  return (
    <DefaultOpenModal
      isShow={true}
      title="System Examination"
      toggler={toggler}
    >
      <form>
        <div>
          <div className="flex flex-col gap-3">
            <Select label="System">
              <option>Respiratory System</option>
              <option>Gestro-Intestinal System</option>
              <option>Cardivascular System</option>
              <option>Nervous System</option>
            </Select>

            <Textarea label="Note" placeholder="Comment" />

            <SubmitButton
              title="Add"
              icon={<PlusCircle size={14} />}
              className="py-1.5 text-base w-[fit-content] whitespace-nowrap gap-2"
            />
            <div>
              <div className="grid grid-cols-4 gap-1 my-2">
                <p className="form-submitted-data-list">Physical System</p>
                <p className="form-submitted-data-list">Note</p>
                <p className="form-submitted-data-list"></p>
                <p className="form-submitted-data-list"></p>
              </div>
              <hr />

              <div className="grid grid-cols-4 my-2">
                <p className="form-submitted-data-list"></p>
                <p className="form-submitted-data-list"></p>
                <p className="form-submitted-data-list"></p>
                <p className="form-submitted-data-list"></p>
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

export default SystemExamination;
