export const referralValidator = (formData) => {
  const errors = {};

  // if (!formData.referralType) errors.referralType = "Required";
  if (!formData?.servicePointId) errors.servicePointId = "Required";
  if (!formData?.reasonForReferral) errors.reasonForReferral = "Required";
  
  // if (formData?.referralType == "1") {
    
  // }
  if (formData?.referralType == "2") {
    if (!formData?.receivingFacilityId) errors.receivingFacilityId = "Required";
  }

  // if (formData?.referralType != 1 && !formData?.receivingFacilityId)
  //   errors.receivingFacilityId = "Required";

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
