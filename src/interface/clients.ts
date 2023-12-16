export interface Client {
  oid: string;
  firstName: string;
  surname: string;
  sex: number;
  dob: string;
  isDOBEstimated: boolean;
  nrc: string;
  noNRC: boolean;
  napsaNumber: string;
  underFiveCardNumber: string;
  nupn: string;
  registrationDate: string;
  fathersNRC: string;
  fatherNAPSANumber: string;
  isFatherDeceased: boolean;
  mothersFirstName: string;
  mothersSurname: string;
  fathersFirstName: string;
  fathersSurname: string;
  guardiansFirstName: string;
  guardiansSurname: number;
  motherNationality: number;
  fatherNationality: number;
  guardianNationality: number;
  guardianRelationship: number;
  mothersNRC?: string;
  motherNAPSANumber: string;
  isMotherDeceased: boolean;
  guardiansNRC: string;
  guardianNAPSANumber: string;
  maritalStatus: number;
  spousesLegalName: string;
  spousesSurname: string;
  cellphoneCountryCode: string;
  cellphone: string;
  otherCellphoneCountryCode: string;
  otherCellphone: string;
  noCellphone: boolean;
  email: string;
  landline: string;
  landlineCountryCode: string;
  householdNumber: string;
  road: string;
  area: string;
  landmarks: string;
  isZambianBorn: boolean;
  birthPlace: string;
  townName: string;
  religion: number;
  hivStatus: number;
  isDeceased: boolean;
  isOnART: boolean;
  isAdmitted: boolean;
  countryId: number;
  districtId: number;
  homeLanguageId: number;
  educationLevelId: number;
  occupationId: number;
  createdIn: number;
  dateCreated: string;
  createdBy: string;
  isDeleted: boolean;
  isSynced: boolean;
  motherProfileId: string;
}