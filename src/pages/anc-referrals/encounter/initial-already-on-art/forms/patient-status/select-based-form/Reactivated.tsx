import DatePicker from "@/components/core/form-elements/CustomDatePicker";
import Input from "@/components/core/form-elements/Input";
import Select from "@/components/core/form-elements/Select";
import Section from "@/pages/anc-referrals/form-template/Section";
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
          <Section className="" title="Stopped ART">
            <div className="grid grid-cols-1 gap-3">
              <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-3">
                {" "}
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
            </div>
          </Section>
        </div>
      </div>
    </form>
  );
};

export default Reactivated;
