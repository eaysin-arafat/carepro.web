import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import SubmitButton from "@/components/core/buttons/SubmitButton";
import Select from "@/components/core/form-elements/Select";
import DefaultOpenModal from "@/components/core/modal/DefaultOpenModal";
import PastRecordContainers from "@/components/past-record-containers/PastRecordContainers";
import ReviewOfSystemCardItem from "@/components/review-of-systems/CardItem";
import ReviewOfSystemCardGroup from "@/pages/anc-referrals/form-component/ReviewOfSystemCardGroup";
import { useState } from "react";
import { PlusCircle } from "react-feather";

const Allergies = ({
  toggler = () => {},
  onSubmit,
  isEditing,
  initialValues,
}) => {
  const [selectedAllergies, setSelectedAllergies] = useState(
    isEditing ? initialValues.allerty : ""
  );
  const [selectDrugType, setSelectDrugType] = useState(
    isEditing ? initialValues.drugType : ""
  );
  const [severity, setSeverity] = useState(
    isEditing ? initialValues.severity : ""
  );

  const handleAllergiesChange = (e) => {
    setSelectedAllergies(e.target.value);

    // Clear selectDrugType if the selected allergy is not "Drug"
    if (e.target.value !== "Drug") {
      setSelectDrugType("");
    }
  };

  return (
    <DefaultOpenModal isShow={true} title="Allergies" toggler={toggler}>
      <form onSubmit={onSubmit}>
        <div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col md:flex-row lg:flex-row gap-2 items-center justify-center">
              <Select
                label="Allergies"
                onChange={handleAllergiesChange}
                value={selectedAllergies}
                required
              >
                <option>Drug</option>
                <option>Blood</option>
                <option>Dust</option>
                <option>Food</option>
                <option>Plants</option>
                <option>Others</option>
                <option>Animals</option>
              </Select>

              <Select
                label="Severity"
                value={severity}
                onChange={(e) => setSeverity(e.target.value)}
                required
              >
                <option value="">Mild</option>
                <option value="">Intermediate</option>
                <option value="">Severe</option>
                <option value="">Unknown</option>
              </Select>
            </div>

            <div>
              <Select
                label="Drug Type"
                value={selectDrugType}
                onChange={(e) => setSelectDrugType(e.target.value)}
                disabled={selectedAllergies !== "Drug"}
              >
                <option>Penicillins</option>
                <option>NSAIDs</option>
                <option>Sulfa Containing Drugs</option>
                <option>Chemotherapy</option>
                <option>Other</option>
              </Select>
              <p className="note">
                <b>Note</b> : If Patient has <b>Drug Allergy</b> then select the
                <b> Drug Type</b>
              </p>
            </div>

            <SubmitButton
              title={isEditing ? "Add" : "Update"}
              icon={<PlusCircle size={14} />}
              className="py-1.5 text-base w-[fit-content] whitespace-nowrap gap-2"
            />
            <ReviewOfSystemCardGroup>
              <ReviewOfSystemCardItem />
              <ReviewOfSystemCardItem />
              <ReviewOfSystemCardItem />
              <ReviewOfSystemCardItem />
            </ReviewOfSystemCardGroup>
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

export default Allergies;
