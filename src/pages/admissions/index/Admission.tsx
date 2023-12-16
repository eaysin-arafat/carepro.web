import AdmissionsFilters from "@/components/admissions/AdmissionsFilters";
import SimplePatientDetails from "@/components/client-accounts/cards/SimplePatientDetails";
import Container from "@/components/core/container/Container";
import CustomPagination from "@/components/core/custom-pagination/CustomPagination";
import Table from "@/components/shared/table/Table";
import TableBody from "@/components/shared/table/TableBody";
import TableHeader from "@/components/shared/table/TableHeader";
import { admissionModalTypes } from "@/constants/modal-types";
import { DateFunc } from "@/utilities/date";
import { Loader } from "react-feather";
import { FiPlusCircle } from "react-icons/fi";
import { IoArrowBack } from "react-icons/io5";
import AdmissionCreateModal from "../create/Create";
import AdmissionDetails from "../details/AdmissionDetails";
import AdmissionDischarge from "../discharge/AdmissionDischarge";
import useAdmission from "./useAdmission";

const AdmissionsIndex = () => {
  const {
    addModal,
    admissionList,
    editModal,
    handleAdmissionDetails,
    handleAdmissionDischarge,
    handleAdmissionModal,
    navigate,
    currentPage,
    setCurrentPage,
    itemsPerPage,
    tableHeader,
    admissionDate,
    dischargeDate,
    department,
    handleAdmissionDateChange,
    handleDepartmentChange,
    handleDischargeDateChange,
    handleWardChange,
    ward,
    client,
    isLoading,
    isSuccess,
    status,
    filteredData,
    paginatedData,
    handleItemsPerPage,
  } = useAdmission();

  return (
    <div className="mx-2">
      <Container className="max-w-[1400px]">
        <div>
          <SimplePatientDetails className=" shadow-none mt-5" client={client} />
          <div className="grid grid-cols-7 gap-5 mt-5 bg-whiteBgColor p-5 rounded-lg ">
            <div className="col-span-7">
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <button onClick={() => navigate(-1)}>
                    <IoArrowBack className="text-3xl" />
                  </button>
                  <h2 className="heading_2 text-xl">Admissions</h2>
                </div>
                <div className="text-end ">
                  <button
                    className="main_btn text-[14px] py-2 px-3 sm:px-5"
                    onClick={handleAdmissionModal}
                  >
                    <FiPlusCircle className="mr-1 text-xl sm:text-xl " /> Admit
                    Patient
                  </button>
                </div>
              </div>
              <AdmissionsFilters
                admissionDate={admissionDate}
                dischargeDate={dischargeDate}
                department={department}
                handleAdmissionDateChange={handleAdmissionDateChange}
                handleDepartmentChange={handleDepartmentChange}
                handleDischargeDateChange={handleDischargeDateChange}
                handleWardChange={handleWardChange}
                ward={ward}
              />
              <div className="">
                <div className="mt-2 bg-whiteBgColor pb-5 rounded-xl ">
                  <Table isRounded>
                    <TableHeader
                      className=""
                      isAction
                      actionWidth="min-w-[220px]"
                      title={tableHeader}
                    />

                    {/* EMPTY DATA MESSAGE */}
                    {isSuccess &&
                      status === "fulfilled" &&
                      admissionList?.length === 0 && (
                        <div className="flex justify-center items-center h-40">
                          <p className="text-xl text-gray-500">
                            No Admission Found
                          </p>
                        </div>
                      )}

                    {/* LOADING SPINNER */}
                    {(isLoading || status === "pending") && (
                      <div className="flex justify-center py-4">
                        <Loader size={40} />
                      </div>
                    )}

                    {/* TABLE DATA */}
                    {paginatedData?.map((item, index) => (
                      <TableBody
                        index={index}
                        isAction
                        actionWidth="min-w-[220px]"
                        btnOutlineHandler={() => handleAdmissionDischarge(item)}
                        viewResultHandler={() => handleAdmissionDetails(item)}
                        btn={{
                          viewResult: "View Details ",
                          ...(!item?.ipdDischargeDate && {
                            btnOutline: "Discharge",
                          }),
                        }}
                        item={[
                          {
                            title: item?.ipdAdmissionDate
                              ? DateFunc.toFormatted(item?.ipdAdmissionDate)
                              : "",
                            w: "20%",
                          },
                          {
                            title:
                              item?.bed?.ward?.firm?.department?.description,
                            w: "20%",
                          },
                          {
                            title: item?.bed?.ward?.firm?.description,
                            w: "20%",
                          },
                          { title: item?.bed?.ward?.description, w: "20%" },
                          { title: item?.bed?.description, w: "20%" },
                          {
                            title: item?.ipdDischargeDate
                              ? DateFunc.toFormatted(item?.ipdDischargeDate)
                              : "",
                            w: "20%",
                          },
                        ]}
                      />
                    ))}
                  </Table>
                  <div className="flex justify-end mx-5">
                    <CustomPagination
                      activePage={currentPage}
                      setActivePage={setCurrentPage}
                      itemsCountPerPage={itemsPerPage}
                      totalItemsCount={filteredData?.length || 1}
                      setItemPerPage={handleItemsPerPage}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* CLIENT ADMISSION  */}
      {addModal?.isOpen &&
        addModal?.modalId === admissionModalTypes.addAdmission && (
          <AdmissionCreateModal />
        )}

      {/* DISCHARGE MODAL */}
      {editModal?.isOpen &&
        editModal?.modalId === admissionModalTypes.admissionDischarge && (
          <AdmissionDischarge />
        )}

      {/* DETAILS MODAL */}
      {addModal?.isOpen &&
        addModal?.modalId === admissionModalTypes.admissionDetails && (
          <AdmissionDetails />
        )}
    </div>
  );
};

export default AdmissionsIndex;
