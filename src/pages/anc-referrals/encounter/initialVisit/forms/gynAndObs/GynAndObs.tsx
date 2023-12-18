import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import SelectableButton from "@/components/core/buttons/SelectableButton";
import DatePicker from "@/components/core/form-elements/CustomDatePicker";
import Input from "@/components/core/form-elements/Input";
import Select from "@/components/core/form-elements/Select";
import Textarea from "@/components/core/form-elements/Textarea";
import DefaultOpenModal from "@/components/core/modal/DefaultOpenModal";
import PastRecordContainers from "@/components/past-record-containers/PastRecordContainers";
import { useReadChiefComplaintByClientQuery } from "@/features/chief-complaint/chief-complaint-api";
import FormGroup from "@/pages/anc-referrals/form-template/FormGroup";
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
  const [breastfeedingSelect, setBreastfeedingSelect] = useState(null);
  const [cervicalCancerSelect, setcervicalCancerSelect] = useState(null);

  const handleBreastfeedingSelect = (e) => {
    setBreastfeedingSelect(e.target.value);
  };
  const handleCervicalCancerSelect = (e) => {
    setcervicalCancerSelect(e.target.value);
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
            <div>
              <Textarea
                label="Menstrual History"
                placeholder="Menstrual History"
              />
              <p className="note">
                <b>Note :</b> Please document Menarche, Menopause, Cycle
                regularity, Cycle duration, Menstrual heaviness.
              </p>
            </div>

            <FormGroup className="" title="Obstetrics History">
              <div className="flex gap-2 items-center justify-center">
                <DatePicker
                  label="Menstrul History"
                  onChange={() => {}}
                  name="pregnancy-confirm-date"
                  placeholder="Enter pregnancy confirmed date"
                />
                <Select label="Are you pragnent?" className="py-3 rounded">
                  <option value="">Yes</option>
                  <option value="">No</option>
                  <option value="">Unknown</option>
                </Select>
                <Input
                  label="Gestational Age (Weeks)"
                  placeholder="Enter Gestational Age (Weeks)"
                />

                <Input label="EDD" placeholder="Enter EDD" />
              </div>
            </FormGroup>

            <FormGroup title="Are you breastfeeding" className="">
              <div className="flex gap-2 items-center justify-center">
                <Select
                  label="Are you breastfeeding?"
                  className="py-1 rounded"
                  value={breastfeedingSelect}
                  onChange={handleBreastfeedingSelect}
                >
                  <option>Yes</option>
                  <option>No</option>
                  <option>Unknown</option>
                </Select>

                <Select
                  label="If breastfeeding has child been tested for HIV?"
                  className="py-1 rounded"
                  disabled={breastfeedingSelect !== "Yes"}
                >
                  <option value="">Yes</option>
                  <option value="">No</option>
                  <option value="">Unknown</option>
                </Select>
              </div>
              <div className="flex gap-2 items-center justify-center">
                <Select
                  label="Is Screened For Syphilis?"
                  className="py-1 rounded"
                >
                  <option value="">Yes</option>
                  <option value="">No</option>
                  <option value="">Unknown</option>
                </Select>

                <Select
                  label="Have you been treated with benzathine panic..."
                  className="py-1 rounded"
                >
                  <option value="">Yes</option>
                  <option value="">No</option>
                  <option value="">Unknown</option>
                </Select>
              </div>
              <Textarea label="Note" placeholder="Enter Note" />
            </FormGroup>

            <FormGroup title="Contraceptive History" className="">
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
            </FormGroup>

            <FormGroup title="Cervical Cancer History" className="">
              <div className="flex gap-2 items-center justify-center">
                <Select
                  label="Have You Screened for CaCx?"
                  className="py-3 rounded"
                  value={cervicalCancerSelect}
                  onChange={handleCervicalCancerSelect}
                >
                  <option>Yes</option>
                  <option>No</option>
                  <option>Unknown</option>
                </Select>

                <DatePicker
                  label="When last screened"
                  onChange={() => {}}
                  name="last-screened-date"
                  placeholder="Enter When last screened"
                  disabled={cervicalCancerSelect !== "Yes"}
                />
              </div>
              <div className="flex gap-2 items-center justify-center">
                <Select
                  label="Result"
                  className="py-1 rounded"
                  disabled={cervicalCancerSelect !== "Yes"}
                >
                  <option>Normal</option>
                  <option>Abnormal</option>
                  <option>Not Sure</option>
                </Select>

                <Select
                  label="Method used"
                  className="py-1 rounded"
                  disabled={cervicalCancerSelect !== "Yes"}
                >
                  <option>HPV Test</option>
                  <option>PAP Smear</option>
                  <option>VIA</option>
                </Select>
              </div>
            </FormGroup>
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
