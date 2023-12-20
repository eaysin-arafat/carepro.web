import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import Textarea from "@/components/core/form-elements/Textarea";
import DefaultOpenModal from "@/components/core/modal/DefaultOpenModal";
import PastRecordContainers from "@/components/past-record-containers/PastRecordContainers";
import { useReadChiefComplaintByClientQuery } from "@/features/chief-complaint/chief-complaint-api";
import { Loader } from "react-feather";
import PastEncounters from "@/pages/chief-complaints/create/PastEncounters";
import Select from "@/components/core/form-elements/Select";
import { useState } from "react";

const DrugAdherence = ({ toggler, onSubmit, isEditing, initialValues }) => {
  const [doesMissedSelect, setDoesMissedSelect] = useState(
    isEditing ? initialValues : ""
  );
  const [doesReason, setDoesReason] = useState(isEditing ? initialValues : "");

  const handleDoesSelect = (e) => {
    setDoesMissedSelect(e.target.value);
    if (e.target.value === "No") {
      setDoesReason("");
    }
  };

  const { data, isLoading, status } = useReadChiefComplaintByClientQuery(
    "a1497272-3783-46f6-922a-08dbd06dc4d8"
  );

  return (
    <DefaultOpenModal title="Drug Adherence" isShow={true} toggler={toggler}>
      <form onSubmit={onSubmit}>
        <div className="flex flex-col gap-3">
          <Select label="Has patient complained about medication?" required>
            <option>Yes</option>
            <option>No</option>
          </Select>

          <Select label="Does client have trouble taking pills??" required>
            <option>Yes</option>
            <option>No</option>
          </Select>

          <Select
            label="Doses missed?"
            value={doesMissedSelect}
            onChange={handleDoesSelect}
            required
          >
            <option>Yes</option>
            <option>No</option>
          </Select>

          <Select
            label="Reasons for missing"
            disabled={doesMissedSelect !== "Yes"}
            value={doesReason}
            onChange={(e) => setDoesReason(e.target.value)}
          >
            <option>Forgot</option>
            <option>Side effect</option>
            <option>Away from home</option>
            <option>Illness</option>
            <option>Medicines finished</option>
            <option>Other</option>
          </Select>

          <Select label="Is patient compliant with their medication?" required>
            <option>Yes</option>
            <option>No</option>
          </Select>

          <Textarea label="Note" placeholder="Enter Note" />
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

export default DrugAdherence;
