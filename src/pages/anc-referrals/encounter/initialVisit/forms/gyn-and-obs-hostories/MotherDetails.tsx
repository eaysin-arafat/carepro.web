import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import SubmitButton from "@/components/core/buttons/SubmitButton";
import DatePicker from "@/components/core/form-elements/CustomDatePicker";
import Input from "@/components/core/form-elements/Input";
import Select from "@/components/core/form-elements/Select";
import Textarea from "@/components/core/form-elements/Textarea";
import DefaultOpenModal from "@/components/core/modal/DefaultOpenModal";
import PastRecordContainers from "@/components/past-record-containers/PastRecordContainers";
import { useReadChiefComplaintByClientQuery } from "@/features/chief-complaint/chief-complaint-api";
import PastEncounters from "@/pages/chief-complaints/create/PastEncounters";
import { useState } from "react";
import { Loader, PlusCircle } from "react-feather";

const MotherDetails = ({ toggler = () => {} }) => {
  const [pregnancyColclusionSelect, setPregnancyColclusionSelect] =
    useState("");
  const [terminationReasonSelect, setTerminationReasonSelect] = useState("");

  const handleTerminationalReson = (event) => {
    setPregnancyColclusionSelect(event.target.value);

    if (event.target.value !== "Early termination") {
      setTerminationReasonSelect("");
    }
  };

  const { data, isLoading, status } = useReadChiefComplaintByClientQuery(
    "a1497272-3783-46f6-922a-08dbd06dc4d8"
  );

  return (
    <DefaultOpenModal isShow={true} title="Mother Details" toggler={toggler}>
      <form>
        <div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-2 items-center justify-center">
              <Input label="Pregnancy No." required />

              <DatePicker
                label="Date of Delivery or Termination"
                onChange={() => {}}
                name="delivery-date"
                placeholder="Enter Date of Delivery or Termination"
                required
              />

              <Select
                label="Meternal Outcome"
                placeholder="Select Maternal Outcome"
                required
              >
                <option>Good</option>
                <option>Fair</option>
                <option>Ill</option>
                <option>Critical</option>
              </Select>
            </div>

            <div className="flex gap-2 items-center justify-center">
              <Select
                label="Pregnancy Conclusion"
                value={pregnancyColclusionSelect}
                onChange={handleTerminationalReson}
                required
              >
                <option>Early termination</option>
                <option>Ectopic</option>
                <option>Full term</option>
                <option>Molar pregnancy</option>
                <option>Pseudo pregnancy</option>
              </Select>

              <Select
                label="Early Termination Reason"
                disabled={pregnancyColclusionSelect !== "Early termination"}
                value={terminationReasonSelect}
                onChange={(e) => setTerminationReasonSelect(e.target.value)}
              >
                <option>Elective abortion</option>
                <option>Spontaneous complete abortion</option>
                <option>Spontaneous missed abortion</option>
                <option>Spontaneous septic abortion</option>
                <option>Spontaneous threatened abortion</option>
                <option>Spontaneous inevitable abortion</option>
              </Select>

              <Input
                label="Pregnancy Drtaiton"
                placeholder="Enter pregnancy duration"
                required
              />
            </div>

            <div className="flex gap-2 items-center justify-center">
              <Input
                label="Maternal Complication"
                placeholder="Enter maternal complication"
              />

              <Select label="Dalivery Method">
                <option>Early termination</option>
                <option>SVD</option>
                <option>BRE</option>
                <option>VAC</option>
                <option>FOR</option>
                <option>Caesarean selection</option>
              </Select>

              <Select label="Puerperium Outcome">
                <option>Normal</option>
                <option>Anaemia</option>
                <option>Fever</option>
                <option>Hypertension</option>
                <option>Infection</option>
              </Select>
            </div>

            <Textarea label="Notes" placeholder="Enter Notes" />

            <SubmitButton
              title="Add"
              icon={<PlusCircle size={14} />}
              className="py-1.5 text-base w-[fit-content] whitespace-nowrap gap-2"
            />
            <div>
              <div className="grid grid-cols-10 my-2">
                <p className="text-xs font-semibold flex items-end">
                  Pregnancy No.
                </p>
                <p className="text-xs font-semibold flex items-end">
                  Date of Delivery or Termination
                </p>
                <p className="text-xs font-semibold flex items-end">
                  Maternal Outcome
                </p>
                <p className="text-xs font-semibold flex items-end">
                  Pregnancy Conclusion
                </p>
                <p className="text-xs font-semibold flex items-end">
                  Early Termination Reason
                </p>
                <p className="text-xs font-semibold flex items-end">
                  Pregnancy Duration
                </p>
                <p className="text-xs font-semibold flex items-end">
                  Maternal Complication
                </p>
                <p className="text-xs font-semibold flex items-end">
                  Delivery Method
                </p>
                <p className="text-xs font-semibold flex items-end">
                  Puerperium Outcome
                </p>
                <p className="text-xs font-semibold flex items-end">Notes </p>
              </div>
              <hr />

              <div className="grid grid-cols-2 my-2">
                <p className="text-xs font-semibold"></p>
                <p className="text-xs font-semibold"></p>
                <p className="text-xs font-semibold"></p>
                <p className="text-xs font-semibold"></p>
                <p className="text-xs font-semibold"></p>
                <p className="text-xs font-semibold"></p>
                <p className="text-xs font-semibold"></p>
                <p className="text-xs font-semibold"></p>
                <p className="text-xs font-semibold"></p>
                <p className="text-xs font-semibold"></p>
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

export default MotherDetails;
