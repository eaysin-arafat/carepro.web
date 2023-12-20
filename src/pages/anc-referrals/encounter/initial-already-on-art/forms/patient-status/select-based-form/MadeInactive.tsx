import DatePicker from "@/components/core/form-elements/CustomDatePicker";
import Input from "@/components/core/form-elements/Input";
import Select from "@/components/core/form-elements/Select";

import Section from "@/pages/anc-referrals/form-component/Section";
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
          <Section className="" title="Made inactive">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
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
          </Section>
        </div>
      </div>
    </form>
  );
};

export default MadeInactive;
