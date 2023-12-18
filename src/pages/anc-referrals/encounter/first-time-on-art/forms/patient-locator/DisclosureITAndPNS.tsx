import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import Input from "@/components/core/form-elements/Input";
import Select from "@/components/core/form-elements/Select";
import DefaultOpenModal from "@/components/core/modal/DefaultOpenModal";
import PastRecordContainers from "@/components/past-record-containers/PastRecordContainers";
import { useReadChiefComplaintByClientQuery } from "@/features/chief-complaint/chief-complaint-api";
import FormGroup from "@/pages/anc-referrals/form-template/FormGroup";
import PastEncounters from "@/pages/chief-complaints/create/PastEncounters";
import { useState } from "react";
import { Loader } from "react-feather";

const DisclosureITAndPNS = ({ toggler = () => {} }) => {
  const [patientOfferedSelect, setPatientOfferedSelect] = useState(null);

  const { data, isLoading, status } = useReadChiefComplaintByClientQuery(
    "a1497272-3783-46f6-922a-08dbd06dc4d8"
  );

  return (
    <DefaultOpenModal isShow={true} title="Households" toggler={toggler}>
      <form>
        <div>
          <div className="flex flex-col gap-3">
            <FormGroup title="Disclosure, Index Testing and Partner Notification Services">
              <div>
                <p className="note mb-3">
                  <b>Note :</b> Type ART number manually or click Generate ART
                  number to automatically create new ART Number.
                </p>
                <Input
                  label="ART Number"
                  placeholder="Enter ART Number"
                  defaultValue="1122334455"
                  readOnly
                />
              </div>

              <div className="flex gap-2 items-center justify-center">
                <Select label="Disclosure Councelling">
                  <option>Yes</option>
                  <option>No</option>
                </Select>

                <Select label="Couple Councelling">
                  <option>Yes</option>
                  <option>No</option>
                  <option>Unknown</option>
                </Select>
              </div>

              <div className="flex gap-2 items-center justify-center">
                <Select label="Notification Services">
                  <option>Yes</option>
                  <option>No</option>
                </Select>

                <Select label="Interpersonal Violance Screen...">
                  <option>Yes</option>
                  <option>No</option>
                </Select>
              </div>

              <div className="flex gap-2 items-center justify-center">
                <Select
                  label="Patient offered IT & PNS"
                  value={patientOfferedSelect}
                  onChange={(e) => setPatientOfferedSelect(e.target.value)}
                >
                  <option>Yes</option>
                  <option>No</option>
                </Select>

                <Select
                  label="On ART"
                  disabled={patientOfferedSelect !== "Yes"}
                >
                  <option>Yes</option>
                  <option>No</option>
                </Select>
              </div>

              <div className="flex gap-2 items-center justify-center">
                <Input
                  label="Number Of Biological Contact..."
                  placeholder="Enter Number Of Biological Contact..."
                />
                <Input
                  label="Number Of Sexual Contacts"
                  placeholder="Enter Other family member"
                />
              </div>

              <div className="flex gap-2 items-center justify-center">
                <Input
                  label="Number Of Other Contacts"
                  placeholder="Enter Number Of Other Contacts"
                />
                <Input
                  label="Total contacts lllicited"
                  placeholder="Total contacts lllicited"
                  readOnly
                />
              </div>
            </FormGroup>

            <FormGroup title="Treatment support">
              <Select label="Does patient consent for followup programs">
                <option>Yes</option>
                <option>No</option>
              </Select>

              <div className="flex gap-2 items-center justify-center">
                <Select label="Can the patient recive calls?">
                  <option>Yes</option>
                  <option>No</option>
                </Select>

                <Select label="Can the patient sms">
                  <option>Yes</option>
                  <option>No</option>
                </Select>
              </div>

              <Select label="Can the patient be visited at home?">
                <option>Yes</option>
                <option>No</option>
              </Select>

              <Select label="Can the patient be visited at work?">
                <option>Yes</option>
                <option>No</option>
              </Select>
            </FormGroup>
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

export default DisclosureITAndPNS;
