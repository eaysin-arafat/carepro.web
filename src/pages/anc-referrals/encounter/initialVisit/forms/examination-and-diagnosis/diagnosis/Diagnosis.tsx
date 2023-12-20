import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import DefaultOpenModal from "@/components/core/modal/DefaultOpenModal";
import PastRecordContainers from "@/components/past-record-containers/PastRecordContainers";
import { useReadChiefComplaintByClientQuery } from "@/features/chief-complaint/chief-complaint-api";
import { Loader } from "react-feather";
import PastEncounters from "@/pages/chief-complaints/create/PastEncounters";
import Radio from "@/components/core/form-elements/Radio";
import { useState } from "react";
import SubmitButton from "@/components/core/buttons/SubmitButton";
import { BiPlusCircle } from "react-icons/bi";
import DiagnosisMultiDependentDropdown from "./DiagnosisMultiDependentDropdown";
import CustomDependentDropdownGroup from "@/pages/anc-referrals/form-component/CustomDependentDropdownGroup";
import CustomDropdown from "@/pages/anc-referrals/form-component/CustomDropdown";
import Section from "@/pages/anc-referrals/form-component/Section";
import ReviewOfSystemCardGroup from "@/pages/anc-referrals/form-component/ReviewOfSystemCardGroup";
import ReviewOfSystemCardItem from "@/components/review-of-systems/CardItem";

const cronicICDDropdownData = [
  { id: 1, name: "Neoplasms" },
  { id: 2, name: "Endodrine, nutritional or metabolic diseases" },
  { id: 3, name: "Pregnancy, childbirth or the peurperium" },
  { id: 4, name: "Cholera" },
  { id: 5, name: "Hispntice" },
  { id: 6, name: "Insomenia" },
];

const Diagnosis = ({ toggler }) => {
  const { data, isLoading, status } = useReadChiefComplaintByClientQuery(
    "a1497272-3783-46f6-922a-08dbd06dc4d8"
  );
  const [selectedOption, setSelectedOption] = useState(
    "National Treatment Guideline"
  );
  const [icdSelectedLevelInput, setIcdSelectedLevelInput] = useState("");
  const [icdInputValue, setIcdInputValue] = useState("");
  const [icdOpen, setIcdOpen] = useState(false);

  const handleIcdSelectOption = () => {
    setIcdOpen(false);
  };

  return (
    <DefaultOpenModal title="Diagnosis" isShow={true} toggler={toggler}>
      <form>
        <div>
          <div className="flex flex-col justify-center gap-6">
            <Section title="Diagnosis">
              <div className="flex gap-2 items-center justify-center">
                <Radio
                  label="National Treatment Guideline"
                  name="chronicF"
                  checked={selectedOption === "National Treatment Guideline"}
                  onChange={() =>
                    setSelectedOption("National Treatment Guideline")
                  }
                />
                <Radio
                  label="ICD 11"
                  name="chronicF"
                  checked={Boolean(selectedOption === "ICD 11")}
                  onChange={() => setSelectedOption("ICD 11")}
                />
              </div>

              <CustomDependentDropdownGroup>
                {selectedOption === "National Treatment Guideline" && (
                  <DiagnosisMultiDependentDropdown />
                )}

                {selectedOption === "ICD 11" && (
                  <CustomDropdown
                    data={cronicICDDropdownData}
                    selected={icdSelectedLevelInput}
                    setSelected={setIcdSelectedLevelInput}
                    inputValue={icdInputValue}
                    setInputValue={setIcdInputValue}
                    open={icdOpen}
                    optionOnClick={handleIcdSelectOption}
                    selectOnClick={() => setIcdOpen((prev) => !prev)}
                    label="ICD 11"
                    required
                  />
                )}
              </CustomDependentDropdownGroup>
            </Section>

            <Section>
              <SubmitButton
                title="Add"
                icon={<BiPlusCircle size={14} />}
                className="py-1.5 text-base w-[fit-content] whitespace-nowrap gap-2"
              />

              <ReviewOfSystemCardGroup>
                <ReviewOfSystemCardItem />
                <ReviewOfSystemCardItem />
                <ReviewOfSystemCardItem />
                <ReviewOfSystemCardItem />
              </ReviewOfSystemCardGroup>
            </Section>
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

export default Diagnosis;
