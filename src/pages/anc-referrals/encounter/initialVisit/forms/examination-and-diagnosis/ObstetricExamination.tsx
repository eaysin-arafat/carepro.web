import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import Input from "@/components/core/form-elements/Input";
import Select from "@/components/core/form-elements/Select";
import DefaultOpenModal from "@/components/core/modal/DefaultOpenModal";
import PastRecordContainers from "@/components/past-record-containers/PastRecordContainers";
import { useReadChiefComplaintByClientQuery } from "@/features/chief-complaint/chief-complaint-api";
import PastEncounters from "@/pages/chief-complaints/create/PastEncounters";
import { Loader } from "react-feather";

const ObstetricExamination = ({ toggler = () => {} }) => {
  const { data, isLoading, status } = useReadChiefComplaintByClientQuery(
    "a1497272-3783-46f6-922a-08dbd06dc4d8"
  );

  return (
    <DefaultOpenModal
      isShow={true}
      title="Obstetric Examination"
      toggler={toggler}
    >
      <form>
        <div>
          <div className="flex flex-col gap-3">
            <Input label="SFH(cm)" placeholder="Enter SFH(cm)" />

            <Select label="Presentation" className="py-1 rounded">
              <option>Cephalic</option>
              <option>Breech</option>
              <option>Undefined</option>
            </Select>

            <Select label="Engaged" className="py-1 rounded">
              <option>Engaged</option>
              <option>Not engaged</option>
            </Select>

            <Select label="Lie" className="py-1 rounded">
              <option>Transverse</option>
              <option>Longitudinal</option>
              <option>Oblique</option>
              <option>Undefined</option>
            </Select>

            <Select label="Fetal Heart" className="py-1 rounded">
              <option>FMF</option>
              <option>Heard</option>
              <option>Not heard</option>
            </Select>

            <Input
              label="Fetal Heart Rate"
              placeholder="Enter Fetal Heart Rate"
            />

            <Select label="Contractions" className="py-1 rounded">
              <option>Regular</option>
              <option>Irregular</option>
            </Select>
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

export default ObstetricExamination;
