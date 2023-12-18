import Select from "@/components/core/form-elements/Select";
import Textarea from "@/components/core/form-elements/Textarea";
import DataRow from "@/components/core/table/DataRow";

import FormGroup from "@/pages/anc-referrals/form-template/FormGroup";
import { Fragment } from "react";

const AnotherClinic = () => {
  return (
    <Fragment>
      <FormGroup title="Patient is being sent to another clinic">
        <div>
          <h1>Referring site</h1>

          <div className="flex items-center gap-5">
            <DataRow title="Facility" data="Bauleni Mini Hospital" />
            <DataRow title="Clinician name" data="System Admin" />
            <DataRow title="Clinician phone number" data="555555555" />
          </div>
        </div>

        <div className="flex gap-2 items-center justify-center">
          <Select label="Family Member Type" className="py-3 rounded">
            <option>Father</option>
            <option>Mother</option>
            <option>Child</option>
            <option>Other</option>
          </Select>
          <Select label="Family Member Type" className="py-3 rounded">
            <option>Father</option>
            <option>Mother</option>
            <option>Child</option>
            <option>Other</option>
          </Select>
        </div>

        <div className="flex gap-2 items-center justify-center">
          <Select label="Family Member Type" className="py-3 rounded">
            <option>Father</option>
            <option>Mother</option>
            <option>Child</option>
            <option>Other</option>
          </Select>
          <Select label="Family Member Type" className="py-3 rounded">
            <option>Father</option>
            <option>Mother</option>
            <option>Child</option>
            <option>Other</option>
          </Select>
        </div>

        <Textarea label="Other reason" placeholder="Enter other reason" />
      </FormGroup>
    </Fragment>
  );
};

export default AnotherClinic;
