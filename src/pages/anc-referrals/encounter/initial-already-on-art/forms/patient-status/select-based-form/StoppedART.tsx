import DatePicker from "@/components/core/form-elements/CustomDatePicker";
import Input from "@/components/core/form-elements/Input";
import Select from "@/components/core/form-elements/Select";
import Section from "@/pages/anc-referrals/form-template/Section";
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
          <Section className="" title="Stopped ART">
            <div className="grid grid-cols-1 gap-3">
              <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-3">
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
            </div>
          </Section>
        </div>
      </div>
    </form>
  );
};

export default StoppedART;
