import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import DefaultOpenModal from "@/components/core/modal/DefaultOpenModal";
import PastRecordContainers from "@/components/past-record-containers/PastRecordContainers";
import { useReadChiefComplaintByClientQuery } from "@/features/chief-complaint/chief-complaint-api";
import { Loader } from "react-feather";
import PastEncounters from "@/pages/chief-complaints/create/PastEncounters";
import Input from "@/components/core/form-elements/Input";

const AncService = ({ toggler, onSubmit, isEditing, initialValues }) => {
  const { data, isLoading, status } = useReadChiefComplaintByClientQuery(
    "a1497272-3783-46f6-922a-08dbd06dc4d8"
  );

  return (
    <DefaultOpenModal isShow={true} toggler={toggler}>
      <form onSubmit={onSubmit}>
        <div className="flex flex-col gap-6">
          <div className="space-y-4">
            <Input
              label="Safe Motherhood No."
              placeholder="Enter Safe Motherhood No."
              required
              defaultValue={isEditing ? initialValues.safeMotherhoodNo : ""}
            />
            <Input
              label="Gravida"
              placeholder="Enter Gravida"
              required
              defaultValue={isEditing ? initialValues.gravida : ""}
            />
            <Input
              label="Parity"
              placeholder="Enter Parity"
              required
              defaultValue={isEditing ? initialValues.parity : ""}
            />
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

export default AncService;
