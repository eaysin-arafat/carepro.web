import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import SelectableButton from "@/components/core/buttons/SelectableButton";
import DatePicker from "@/components/core/form-elements/CustomDatePicker";
import Input from "@/components/core/form-elements/Input";
import Select from "@/components/core/form-elements/Select";
import Textarea from "@/components/core/form-elements/Textarea";
import DefaultOpenModal from "@/components/core/modal/DefaultOpenModal";
import PastRecordContainers from "@/components/past-record-containers/PastRecordContainers";
import { useReadChiefComplaintByClientQuery } from "@/features/chief-complaint/chief-complaint-api";
import Section from "@/pages/anc-referrals/form-component/Section";
import PastEncounters from "@/pages/chief-complaints/create/PastEncounters";
import { cn } from "@/utilities/cn";
import React, { useState } from "react";
import { Loader } from "react-feather";

// const data = {
//   1: "Previous Miscarriage",
//   2: "Amniocentesis",
//   3: "Blood Transfusion with Rh+ blood",
//   4: "Previous Rh+ Baby",
// };

const historyData = {
  1: "Condoms",
  2: "Lactational amennorrhea method",
  3: "Combined Oral Constraceptive",
  4: "ethinylestradial+northestrrone",
  5: "Progestogen-only pills (POPs)",
  6: "Norethisterone enanthate",
  7: "DMPA- (medroxyprogesterone)",
  8: "Levonorgestral (LNG) one-rod",
  9: "Sterilization",
  10: "Withdrawal Method",
  11: "Diaphragms",
};

const GynAndObs = ({ toggler = () => {} }) => {
  const [selectedItems, setSelectedItems] = React.useState<string[]>([]);
  const [breastfeedingSelect, setBreastfeedingSelect] = useState("");
  const [childTestedHiv, setChildTestedHiv] = useState("");

  const [caCxSelect, setCaCxSelect] = useState("");
  const [lastScrnnedSelect, setLastScrnnedSelect] = useState("");
  const [resultSelect, setResultSelect] = useState("");
  const [methodUsedSelect, setMethodUsedSelect] = useState("");

  const handleBreastfeedingSelect = (e) => {
    setBreastfeedingSelect(e.target.value);

    if (e.target.value !== "Yes") {
      setChildTestedHiv("");
    }
  };

  const handleCervicalCancerSelect = (e) => {
    setCaCxSelect(e.target.value);

    if (e.target.value !== "Yes") {
      setLastScrnnedSelect("");
      setResultSelect("");
      setMethodUsedSelect("");
    }
  };

  const { data, isLoading, status } = useReadChiefComplaintByClientQuery(
    "a1497272-3783-46f6-922a-08dbd06dc4d8"
  );

  const handleSelect = (item: string) => {
    if (selectedItems?.includes(item)) {
      setSelectedItems((prev) => prev.filter((i) => i !== item));
      // handleChange(selectedItems.filter((i) => i !== item));
    } else {
      setSelectedItems((prev) => [...prev, item]);
      // handleChange([...selectedItems, item]);
    }
  };

  return (
    <DefaultOpenModal isShow={true} title="Gyn & Obs" toggler={toggler}>
      <form>
        <div>
          <div className="flex flex-col gap-3">
            <Section title="Menstrual History">
              <Textarea
                label="Menstrual History"
                placeholder="Menstrual History"
                required
              />
              <p className="note">
                <b>Note :</b> Please document Menarche, Menopause, Cycle
                regularity, Cycle duration, Menstrual heaviness.
              </p>
            </Section>

            <Section title="Obstetrics History" className="">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                <DatePicker
                  label="Menstrul History"
                  onChange={() => {}}
                  name="pregnancy-confirm-date"
                  placeholder="Enter pregnancy confirmed date"
                  required
                />

                <Select label="Are you pragnent?" required>
                  <option value="">Yes</option>
                  <option value="">No</option>
                  <option value="">Unknown</option>
                </Select>
                <Input
                  label="Gestational Age (Weeks)"
                  placeholder="Enter Gestational Age (Weeks)"
                />

                <Input label="EDD" placeholder="Enter EDD" />

                <div className="md:col-span-2 lg:col-span-4">
                  <Textarea label="Obstetrics History" />
                  <p className="note">
                    <b>Note :</b> Please document Parity, Gravida, Number of
                    children alive and deseased, Breastfeeding status. If has
                    Breastfeeding child then HIV status of the child.
                  </p>
                </div>
              </div>
            </Section>

            <Section title="Are you breastfeeding">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
                <Select
                  label="Are you breastfeeding?"
                  value={breastfeedingSelect}
                  onChange={handleBreastfeedingSelect}
                >
                  <option>Yes</option>
                  <option>No</option>
                  <option>Unknown</option>
                </Select>

                <Select
                  label="If breastfeeding has child been tested for HIV?"
                  disabled={breastfeedingSelect !== "Yes"}
                  value={childTestedHiv}
                  onChange={(e) => setChildTestedHiv(e.target.value)}
                >
                  <option>Yes</option>
                  <option>No</option>
                  <option>Unknown</option>
                </Select>
                <Select label="Is Screened For Syphilis?">
                  <option value="">Yes</option>
                  <option value="">No</option>
                  <option value="">Unknown</option>
                </Select>

                <Select label="Have you been treated with benzathine panic...">
                  <option value="">Yes</option>
                  <option value="">No</option>
                  <option value="">Unknown</option>
                </Select>

                <div className="md:col-span-2">
                  <Textarea label="Note" placeholder="Enter Note" />
                </div>
              </div>
            </Section>

            <Section title="Contraceptive History" className="">
              <div className={cn(`flex flex-wrap gap-3 mt-2`)}>
                {Object.keys(historyData).map((item, index) => (
                  <SelectableButton
                    key={index}
                    isActive={selectedItems?.includes(item)}
                    text={historyData[item]}
                    handler={() => handleSelect(item)}
                  />
                ))}
              </div>
            </Section>

            <Section title="Cervical Cancer History" className="">
              <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-3">
                <Select
                  label="Have You Screened for CaCx?"
                  value={caCxSelect}
                  onChange={handleCervicalCancerSelect}
                  required
                >
                  <option>Yes</option>
                  <option>No</option>
                  <option>Unknown</option>
                </Select>

                <DatePicker
                  label="When last screened"
                  value={lastScrnnedSelect}
                  onChange={(e) => setLastScrnnedSelect(e.target.value)}
                  name="last-screened-date"
                  placeholder="Enter When last screened"
                  disabled={caCxSelect !== "Yes"}
                />
                <Select
                  label="Result"
                  disabled={caCxSelect !== "Yes"}
                  value={resultSelect}
                  onChange={(e) => setResultSelect(e.target.value)}
                >
                  <option>Normal</option>
                  <option>Abnormal</option>
                  <option>Not Sure</option>
                </Select>

                <Select
                  label="Method used"
                  value={methodUsedSelect}
                  onChange={(e) => setMethodUsedSelect(e.target.value)}
                  disabled={caCxSelect !== "Yes"}
                >
                  <option>HPV Test</option>
                  <option>PAP Smear</option>
                  <option>VIA</option>
                </Select>
              </div>
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

export default GynAndObs;
