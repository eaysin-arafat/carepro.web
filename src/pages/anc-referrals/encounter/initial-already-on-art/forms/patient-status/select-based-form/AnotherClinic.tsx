import Select from "@/components/core/form-elements/Select";
import Textarea from "@/components/core/form-elements/Textarea";
import DataRow from "@/components/core/table/DataRow";

import FormGroup from "@/pages/anc-referrals/form-template/FormGroup";
import { Fragment, useState } from "react";

const AnotherClinic = () => {
  const [referralSelected, setReferralSelected] = useState("");

  return (
    <Fragment>
      <FormGroup title="Patient is being sent to another clinic">
        <div className="mx-2 p-2 shadow rounded">
          <h1 className="input-group-title">Referring site</h1>

          <div className="flex items-center gap-5">
            <DataRow
              title="Facility"
              data="Bauleni Mini Hospital"
              titleClass="text-sm text-black min-w-0 max-w-auto"
              dataClass=""
            />
            <DataRow title="Clinician name" data="System Admin" />
            <DataRow title="Clinician phone number" data="555555555" />
          </div>
        </div>

        <h1 className="input-group-title">Facility referred to</h1>

        <div className="flex gap-2 items-center justify-center">
          <Select label="Province" className="py-3 rounded">
            <option>North-Western</option>
            <option>Western</option>
            <option>Central</option>
            <option>Other</option>
          </Select>
          <Select label="District" className="py-3 rounded">
            <option>Father</option>
            <option>Mother</option>
            <option>Child</option>
            <option>Other</option>
          </Select>
        </div>

        <div className="flex gap-2 items-center justify-center">
          <Select label="Facility Name" className="py-3 rounded">
            <option>Father</option>
            <option>Mother</option>
            <option>Child</option>
            <option>Other</option>
          </Select>
          <Select
            label="Referral reason"
            className="py-3 rounded"
            value={referralSelected}
            onChange={(e) => setReferralSelected(e.target.value)}
          >
            <option>Father</option>
            <option>Mother</option>
            <option>Child</option>
            <option>Other</option>
          </Select>
        </div>

        <Textarea
          label="Other reason"
          placeholder="Enter other reason"
          disabled={referralSelected !== "Other"}
        />
      </FormGroup>
    </Fragment>
  );
};

export default AnotherClinic;
