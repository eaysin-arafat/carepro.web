import DatePicker from "@/components/core/form-elements/CustomDatePicker";
import Input from "@/components/core/form-elements/Input";
import Select from "@/components/core/form-elements/Select";

import FormGroup from "@/pages/anc-referrals/form-component/FormGroup";
import { useState } from "react";

const Reactivated = () => {
  const [reactivateReasonSelect, setReactivateReasonSelect] = useState("");

  const handleStoppingReasonSelect = (event) => {
    setReactivateReasonSelect(event.target.value);
  };

  return (
    <form>
      <div>
        <div className="flex flex-col gap-3">
          <FormGroup className="" title="Stopped ART">
            <div className="flex gap-2 items-center justify-center">
              <DatePicker
                label="Date Reactivated"
                onChange={() => {}}
                name="reactivate-date"
                placeholder="Enter Date of Reactivated"
              />

              <Select
                label="Reason for being reactivated"
                value={reactivateReasonSelect}
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
              disabled={reactivateReasonSelect !== "Other"}
              label="Other reason"
              placeholder="Enter Other reason"
            />
          </FormGroup>
        </div>
      </div>
    </form>
  );
};

export default Reactivated;
