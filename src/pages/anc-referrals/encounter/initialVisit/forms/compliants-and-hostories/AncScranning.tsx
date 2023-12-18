import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import DatePicker from "@/components/core/form-elements/CustomDatePicker";
import Select from "@/components/core/form-elements/Select";
import DefaultOpenModal from "@/components/core/modal/DefaultOpenModal";
import PastRecordContainers from "@/components/past-record-containers/PastRecordContainers";
import { useState } from "react";

const AncScranning = ({ toggler }) => {
  const [syphilisSelect, setSyphilisSelect] = useState("");
  const [hepatitisSelect, setHepatitisSelect] = useState("");

  return (
    <DefaultOpenModal title="ANC Screening" isShow={true} toggler={toggler}>
      <form>
        <div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-2 items-center justify-center">
              <Select label="History of Bleeding" required>
                <option value="">Yes</option>
                <option value="">No</option>
              </Select>

              <Select label="Draining" required>
                <option value="">Yes</option>
                <option value="">No</option>
              </Select>
            </div>

            <div className="flex gap-2">
              <Select label="PV Mucas" required>
                <option value="">Yes</option>
                <option value="">No</option>
              </Select>
              <Select label="Contraction" required>
                <option value="">Yes</option>
                <option value="">No</option>
              </Select>
            </div>

            <div className="flex gap-2">
              <Select label="PV Bleeding" required>
                <option value="">Yes</option>
                <option value="">No</option>
              </Select>
              <Select label="Fetal Movements" required>
                <option value="">Yes</option>
                <option value="">No</option>
              </Select>
            </div>

            <div className="flex gap-2">
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
            </div>

            <div className="flex gap-2">
              <Select label="Syphilis Test Type" required>
                <option value="">Yes</option>
                <option value="">No</option>
              </Select>
              <Select label="Sysphilis Result" required>
                <option value="">Yes</option>
                <option value="">No</option>
              </Select>
            </div>

            <div className="flex gap-2">
              <Select label="Is Hepatities Done?" required>
                <option value="">Yes</option>
                <option value="">No</option>
              </Select>

              <DatePicker
                label="Hepatitis Test Date"
                name="hepatitis-test-date"
                required
              />
            </div>

            <div className="flex gap-2">
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
