import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import SelectableButton from "@/components/core/buttons/SelectableButton";
import Select from "@/components/core/form-elements/Select";
import DefaultOpenModal from "@/components/core/modal/DefaultOpenModal";
import PastRecordContainers from "@/components/past-record-containers/PastRecordContainers";
import FormGroup from "@/pages/anc-referrals/form-template/FormGroup";
import { cn } from "@/utilities/cn";
import React from "react";

const data = {
  1: "Cough",
  2: "Chest Pain",
  3: "Fever",
  4: "Night Sweats",
  5: "Weight Loss",
  6: "Fatigue",
  7: "Hemoptysis",
};

const ConstitutionalSymptoms = {
  1: "Fartigue (Tired)",
  2: "Appetite loss",
  3: "Dizziness",
  4: "Palpitations",
  5: "Swelling",
};

const babyAche = {
  1: "Sever aching",
  2: "Mild Aching",
  3: "Whole body aching",
};

const TBConstitutionalSymptoms = ({ toggler = () => {} }) => {
  const [selectedTBItems, setSelectedTBItems] = React.useState<string[]>([]);
  const [selectedCSItems, setSelectedCSItems] = React.useState<string[]>([]);
  const [selectedBAItems, setSelectedBAItems] = React.useState<string[]>([]);

  // select multiple selection
  const [selectedOption, setSelectedOption] = React.useState<string>(
    "Constitutional Smptoms"
  );

  const handleSelect = (item: string, state, setState) => {
    if (state?.includes(item)) {
      setState((prev) => prev.filter((i) => i !== item));
      // handleChange(selectedItems.filter((i) => i !== item));
    } else {
      setState((prev) => [...prev, item]);
      // handleChange([...selectedItems, item]);
    }
  };

  return (
    <DefaultOpenModal
      isShow={true}
      title="TB & Constitutional Symptoms"
      toggler={toggler}
    >
      <form>
        <div className="flex flex-col gap-6">
          <FormGroup title="TB Symptoms">
            <div>
              <div className={cn(`grid gap-3 mt-2 grid-cols-7`)}>
                {Object.keys(data).map((item, index) => (
                  <SelectableButton
                    key={index}
                    isActive={selectedTBItems?.includes(item)}
                    text={data[item]}
                    handler={() =>
                      handleSelect(item, selectedTBItems, setSelectedTBItems)
                    }
                  />
                ))}
              </div>
            </div>
          </FormGroup>

          <FormGroup title="Constitutional Symptoms">
            <Select
              label="Contitutional Symptom"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
              required
            >
              <option value="Constitutional Smptoms">
                Constitutional Smptoms
              </option>
              <option value="Baby ache">Baby ache</option>
            </Select>
            {selectedOption === "Constitutional Smptoms" ? (
              <div className={cn(`grid gap-3 mt-2 grid-cols-7`)}>
                {Object.keys(ConstitutionalSymptoms).map((item, index) => (
                  <SelectableButton
                    key={index}
                    isActive={selectedCSItems?.includes(item)}
                    text={ConstitutionalSymptoms[item]}
                    handler={() =>
                      handleSelect(item, selectedCSItems, setSelectedCSItems)
                    }
                  />
                ))}
              </div>
            ) : (
              <div className={cn(`grid gap-3 mt-2 grid-cols-5`)}>
                {Object.keys(babyAche).map((item, index) => (
                  <SelectableButton
                    key={index}
                    isActive={selectedBAItems?.includes(item)}
                    text={babyAche[item]}
                    handler={() =>
                      handleSelect(item, selectedBAItems, setSelectedBAItems)
                    }
                  />
                ))}
              </div>
            )}
          </FormGroup>
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

export default TBConstitutionalSymptoms;
