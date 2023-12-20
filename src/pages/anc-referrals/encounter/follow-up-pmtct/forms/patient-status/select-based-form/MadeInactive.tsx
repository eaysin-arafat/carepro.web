import DatePicker from "@/components/core/form-elements/CustomDatePicker";
import Input from "@/components/core/form-elements/Input";
import Select from "@/components/core/form-elements/Select";

import FormGroup from "@/pages/anc-referrals/form-component/FormGroup";
import { useState } from "react";

const MadeInactive = () => {
  const [madeInactiveReasonSelect, setMadeInactiveReasonSelect] =
    useState(null);

  const handleMadeInactive = (event) => {
    setMadeInactiveReasonSelect(event.target.value);
  };

  return (
    <form>
      <div>
        <div className="flex flex-col gap-3">
          <FormGroup
            className=""
            title="Made inactive
"
          >
            <div className="flex gap-2 items-center justify-center">
              <DatePicker
                label="Date made inactive"
                onChange={() => {}}
                name="made-inactive-date"
                placeholder="Enter Date of made inactive"
              />

              <Input
                label="Reason patient stopped taking ARVs"
                placeholder="Enter Reason patient stopped taking ARVs"
              />
            </div>

            <div className="flex gap-2 items-center justify-center">
              <Select
                label="Pregnancy Conclusion"
                value={madeInactiveReasonSelect}
                onChange={handleMadeInactive}
              >
                <option>Early termination</option>
                <option>Ectopic</option>
                <option>Full term</option>
                <option>Molar pregnancy</option>
                <option>Pseudo pregnancy</option>
                <option>Other</option>
              </Select>

              <Input
                disabled={madeInactiveReasonSelect !== "Other"}
                label="Pregnancy Drtaiton"
                placeholder="Enter pregnancy duration"
              />
            </div>
          </FormGroup>
        </div>
      </div>
    </form>
  );
};

export default MadeInactive;
