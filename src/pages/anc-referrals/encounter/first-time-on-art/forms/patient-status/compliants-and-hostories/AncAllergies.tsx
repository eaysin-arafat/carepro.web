import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import SubmitButton from "@/components/core/buttons/SubmitButton";
import Select from "@/components/core/form-elements/Select";
import Textarea from "@/components/core/form-elements/Textarea";
import DefaultOpenModal from "@/components/core/modal/DefaultOpenModal";
import PastRecordContainers from "@/components/past-record-containers/PastRecordContainers";
import { useState } from "react";
import { PlusCircle } from "react-feather";

const AncAllergies = ({ toggler = () => {} }) => {
  const [selectedAllergies, setSelectedAllergies] = useState(null);

  const handleAllergiesChange = (e) => {
    setSelectedAllergies(e.target.value);
  };

  return (
    <DefaultOpenModal isShow={true} title="Allergies" toggler={toggler}>
      <form>
        <div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-2 items-center justify-center">
              <Select
                label="Allergies"
                onChange={handleAllergiesChange}
                value={selectedAllergies}
              >
                <option>Drug</option>
                <option>Blood</option>
                <option>Dust</option>
                <option>Food</option>
                <option>Plants</option>
                <option>Others</option>
                <option>Animals</option>
              </Select>
              <Select label="Severity">
                <option value="">Mild</option>
                <option value="">Intermediate</option>
                <option value="">Severe</option>
                <option value="">Unknown</option>
              </Select>
            </div>

            <div>
              <Select label="Drug Type" disabled={selectedAllergies !== "Drug"}>
                <option value="">Penicillins</option>
                <option value="">NSAIDs</option>
                <option value="">Sulfa Containing Drugs</option>
                <option value="">Chemotherapy</option>
                <option value="">Other</option>
              </Select>
              <p className="note">
                <b>Note</b> : If Patient has <b>Drug Allergy</b> then select the
                <b>Drug Type</b>
              </p>
            </div>

            <Textarea label="Note" placeholder="Comment" />

            <SubmitButton
              title="Add"
              icon={<PlusCircle size={14} />}
              className="py-1.5 text-base w-[fit-content] whitespace-nowrap gap-2"
            />
            <div>
              <div className="grid grid-cols-3 my-2">
                <p className="text-xs font-semibold">Allergy Name</p>
                <p className="text-xs font-semibold">Drug Type</p>
                <p className="text-xs font-semibold">Severity Name</p>
              </div>
              <hr />

              <div className="grid grid-cols-2 my-2">
                <p className="text-xs font-semibold"></p>
                <p className="text-xs font-semibold"></p>
                <p className="text-xs font-semibold"></p>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6" />

        {/* PAST ENCOUNTERS */}
        <PastRecordContainers>
          <div className="flex w-full justify-center items-center">
            <p className="text-[#1890FF] font-semibold font-poppins">
              No Past Encounters
            </p>
          </div>
        </PastRecordContainers>

        {/* BUTTONS */}
        <CancelAndAddButton toggler={toggler} />
      </form>
    </DefaultOpenModal>
  );
};

export default AncAllergies;
