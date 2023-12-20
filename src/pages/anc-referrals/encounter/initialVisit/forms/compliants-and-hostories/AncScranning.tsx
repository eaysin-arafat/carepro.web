import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import DatePicker from "@/components/core/form-elements/CustomDatePicker";
import DateInput from "@/components/core/form-elements/DatePicker";
import Select from "@/components/core/form-elements/Select";
import DefaultOpenModal from "@/components/core/modal/DefaultOpenModal";
import PastRecordContainers from "@/components/past-record-containers/PastRecordContainers";
import { useState } from "react";

const AncScranning = ({ toggler, onSubmit, isEditing, initialValues }) => {
  const [syphilisSelect, setSyphilisSelect] = useState(
    isEditing ? initialValues : ""
  );
  const [hepatitisSelect, setHepatitisSelect] = useState(
    isEditing ? initialValues : ""
  );

  return (
    <DefaultOpenModal title="ANC Screening" isShow={true} toggler={toggler}>
      <form onSubmit={onSubmit}>
        <div>
          <div className="grid md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 gap-3">
            <Select label="History of Bleeding" required>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </Select>

            <Select label="Draining" required>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </Select>

            <Select label="PV Mucas" required>
              <option value="">Yes</option>
              <option value="">No</option>
            </Select>
            <Select label="Contraction" required>
              <option value="">Yes</option>
              <option value="">No</option>
            </Select>

            <Select label="PV Bleeding" required>
              <option value="">Yes</option>
              <option value="">No</option>
            </Select>
            <Select label="Fetal Movements" required>
              <option value="">Yes</option>
              <option value="">No</option>
            </Select>

            <Select
              label="Is Syhilis Test Done"
              value={syphilisSelect}
              onChange={(e) => setSyphilisSelect(e.target.value)}
              required
            >
              <option>Yes</option>
              <option>No</option>
            </Select>

            <DatePicker
              label="Syphilis Test Date"
              disabled={syphilisSelect !== "Yes"}
              name="syphilis-test-date"
              required
            />

            <Select label="Syphilis Test Type" required>
              <option value="">Yes</option>
              <option value="">No</option>
            </Select>
            <Select label="Sysphilis Result" required>
              <option value="">Yes</option>
              <option value="">No</option>
            </Select>

            <Select label="Is Hepatities Done?" required>
              <option value="">Yes</option>
              <option value="">No</option>
            </Select>

            <DateInput
              label="Hepatitis Test Date"
              name="hepatitis-test-date"
              required
              onChange={() => {}}
            />

            <Select
              label="Hepatities Test Type"
              value={hepatitisSelect}
              onChange={(e) => setHepatitisSelect(e.target.value)}
              required
            >
              <option>Yes</option>
              <option>No</option>
            </Select>
            <Select
              label="Hepatitis Result"
              disabled={hepatitisSelect !== "Yes"}
              required
            >
              <option>Yes</option>
              <option>No</option>
            </Select>
          </div>
        </div>

        {/* DIVIDER */}
        <hr className="my-6" />

        {/* PAST ENCOUNTERS */}
        <PastRecordContainers>
          <div className="flex w-full justify-center items-center">
            <p className="text-[#1890FF] font-semibold font-poppins">
              No Past Encounters
            </p>
          </div>
        </PastRecordContainers>

        {/* BUTTONS */}
        <CancelAndAddButton toggler={toggler} />
      </form>
    </DefaultOpenModal>
  );
};

export default AncScranning;
