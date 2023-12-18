import DatePicker from "@/components/core/form-elements/CustomDatePicker";
import Input from "@/components/core/form-elements/Input";
import Select from "@/components/core/form-elements/Select";

import FormGroup from "@/pages/anc-referrals/form-template/FormGroup";
import { useState } from "react";

const StoppedART = () => {
  const [stoppingReasonSelect, setStoppingReasonSelect] = useState("");

  const handleStoppingReasonSelect = (event) => {
    setStoppingReasonSelect(event.target.value);
  };

  return (
    <form>
      <div>
        <div className="flex flex-col gap-3">
          <FormGroup className="" title="Stopped ART">
            <div className="flex gap-2 items-center justify-center">
              <DatePicker
                label="Date Stopped"
                onChange={() => {}}
                name="stopped-date"
                placeholder="Enter Date of Stopped"
              />

              <Select
                label="Reason for stopping"
                value={stoppingReasonSelect}
                onChange={handleStoppingReasonSelect}
              >
                <option>Early termination</option>
                <option>Ectopic</option>
                <option>Full term</option>
                <option>Molar pregnancy</option>
                <option>Pseudo pregnancy</option>
                <option>Other</option>
              </Select>
            </div>

            <Input
              disabled={stoppingReasonSelect !== "Other"}
              label="Other reason"
              placeholder="Enter Other reason"
            />
          </FormGroup>
        </div>
      </div>
    </form>
  );
};

export default StoppedART;
