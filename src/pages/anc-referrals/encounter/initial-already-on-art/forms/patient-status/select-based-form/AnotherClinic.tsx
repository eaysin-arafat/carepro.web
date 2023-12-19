import Select from "@/components/core/form-elements/Select";
import Textarea from "@/components/core/form-elements/Textarea";
import FormGroup from "@/pages/anc-referrals/form-template/FormGroup";
import Section from "@/pages/anc-referrals/form-template/Section";

import { Fragment, useState } from "react";

const AnotherClinic = () => {
  const [referralSelected, setReferralSelected] = useState("");

  return (
    <Fragment>
      <Section title="Patient is being sent to another clinic">
        <div className="mx-2 p-2 shadow rounded my-4">
          <h1 className="input-group-title">Referring site</h1>

          {/* <div className="flex items-center gap-5">
            <DataRow
              title="Facility"
              data="Bauleni Mini Hospital"
              titleClass="text-sm text-black min-w-0 max-w-auto"
              dataClass=""
            />
            <DataRow title="Clinician name" data="System Admin" />
            <DataRow title="Clinician phone number" data="555555555" />
          </div> */}
        </div>

        <FormGroup title="Facility referred to">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
            <Select label="Province">
              <option>North-Western</option>
              <option>Western</option>
              <option>Central</option>
              <option>Other</option>
            </Select>

            <Select label="District">
              <option>Father</option>
              <option>Mother</option>
              <option>Child</option>
              <option>Other</option>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
            <Select label="Facility Name">
              <option>Father</option>
              <option>Mother</option>
              <option>Child</option>
              <option>Other</option>
            </Select>

            <Select
              label="Referral reason"
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
      </Section>
    </Fragment>
  );
};

export default AnotherClinic;
