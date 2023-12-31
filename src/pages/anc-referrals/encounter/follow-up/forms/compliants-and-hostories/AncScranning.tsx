import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import DateInput from "@/components/core/form-elements/DatePicker";
import Select from "@/components/core/form-elements/Select";
import DefaultOpenModal from "@/components/core/modal/DefaultOpenModal";
import PastRecordContainers from "@/components/past-record-containers/PastRecordContainers";

const AncScranning = ({ toggler }) => {
  return (
    <DefaultOpenModal title="ANC Screening" isShow={true} toggler={toggler}>
      <form>
        <div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-2 items-center justify-center">
              <Select label="History of Bleeding">
                <option value="">Yes</option>
                <option value="">No</option>
              </Select>
              <Select label="Draining">
                <option value="">Yes</option>
                <option value="">No</option>
              </Select>
            </div>

            <div className="flex gap-2">
              <Select label="PV Mucas">
                <option value="">Yes</option>
                <option value="">No</option>
              </Select>
              <Select label="Contraction">
                <option value="">Yes</option>
                <option value="">No</option>
              </Select>
            </div>

            <div className="flex gap-2">
              <Select label="PV Bleeding">
                <option value="">Yes</option>
                <option value="">No</option>
              </Select>
              <Select label="Fetal Movements">
                <option value="">Yes</option>
                <option value="">No</option>
              </Select>
            </div>

            <div className="flex gap-2">
              <Select label="Is Syhilis Test Done">
                <option value="">Yes</option>
                <option value="">No</option>
              </Select>
              {/* @ */}
              <DateInput
                onChange={() => {}}
                name="syphilis-test-date"
                label="Syphilis Test Date"
                className="h-9"
              />
            </div>

            <div className="flex gap-2">
              <Select label="Syphilis Test Type">
                <option value="">Yes</option>
                <option value="">No</option>
              </Select>
              <Select label="Sysphilis Result">
                <option value="">Yes</option>
                <option value="">No</option>
              </Select>
            </div>

            <div className="flex gap-2">
              <Select label="Is Hepatities Done?">
                <option value="">Yes</option>
                <option value="">No</option>
              </Select>
              <DateInput
                onChange={() => {}}
                name="hepatitis-test-date"
                label="Hepatitis Test Date"
                className="py-3"
              />
            </div>

            <div className="flex gap-2">
              <Select label="Hepatities Test Type">
                <option value="">Yes</option>
                <option value="">No</option>
              </Select>
              <Select label="Hepatitis Result">
                <option value="">Yes</option>
                <option value="">No</option>
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
