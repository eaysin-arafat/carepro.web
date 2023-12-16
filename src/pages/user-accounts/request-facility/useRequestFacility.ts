import { RootState } from "@/app/store";
import { setIsRegisteredFalse } from "@/features/authentication/authentication-slice";
import { useCreateFacilityAccessMutation } from "@/features/facility-access/facility-access-api";
import { useGetUserAccessByUserNameMutation } from "@/features/user-accounts/user-accounts-api";
import useManageFacility from "@/hooks/useManageFacility";
import { URLUserLogin } from "@/routers/public";
import { FormSubmitEventType } from "@/types/htmlEvents";
import Alert from "@/utilities/alert";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

type FacilityRequestType = {
  isDeleted: boolean;
  dateRequested: string;
  dateApproved: null;
  isApproved: boolean;
  isIgnored: boolean;
  forgotPassword: boolean;
  userAccountId: string;
  facilityId: string | number;
};

const useRequestFacility = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoggedIn, token } = useSelector(
    (state: RootState) => state.authentication
  );

  // Redux query state
  const [getFacilityAccesses, { data: accesses }] =
    useGetUserAccessByUserNameMutation();

  const [
    sendFacilityRequest,
    { data: facilityAccess, isError, isSuccess, status, error },
  ] = useCreateFacilityAccessMutation();

  const {
    districtOptions,
    facilitiesOptions,
    provinceOptions,
    facilityChangeHandler,
    facilityError,
    facilityState,
    facilityValid,
  } = useManageFacility(undefined);

  const handleSendFacilityRequest = (e: FormSubmitEventType): void => {
    e.preventDefault();

    let findApproved =
      Array.isArray(accesses?.userAccount?.facilityAccesses) &&
      accesses?.userAccount?.facilityAccesses?.find((item) => {
        return (
          item.facilityId == facilityState?.facility &&
          item?.isApproved === true
        );
      });

    if (findApproved || user.userType == 1) {
      Alert.warning("Already Permitted!");
    } else {
      const { isFacilityValid } = facilityValid();
      if (!isFacilityValid) {
        return;
      }

      const today = () => {
        return new Date().toISOString();
      };
      const requestData: FacilityRequestType = {
        isDeleted: false,
        dateRequested: today(),
        dateApproved: null,
        isApproved: false,
        isIgnored: false,
        forgotPassword: false,
        userAccountId: user?.oid,
        facilityId: facilityState.facility,
      };

      // request
      sendFacilityRequest(requestData);
    }
  };

  //@ts-ignore
  console.log(error?.data);

  useEffect(() => {
    if (isSuccess && status === "fulfilled") {
      Alert.success(facilityAccess && "Facility Request send successful");
      dispatch(setIsRegisteredFalse());
    }
    if (isError && status === "rejected") {
      Alert.error(
        //@ts-ignore
        error?.data && typeof error?.data === "string"
          ? //@ts-ignore
            error.data
          : "Facility Request send failed"
      );
    }
  }, [isError, isSuccess]);

  const handleCancelRequest = (): void => {
    navigate(URLUserLogin());
  };

  useEffect(() => {
    getFacilityAccesses(user?.username);
  }, [user?.username]);

  return {
    districtOptions,
    facilitiesOptions,
    provinceOptions,
    facilityChangeHandler,
    facilityError,
    facilityState,
    handleCancelRequest,
    handleSendFacilityRequest,
    isLoggedIn,
    token,
  };
};

export default useRequestFacility;
