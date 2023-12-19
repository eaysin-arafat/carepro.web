export const URLDashboard = (): string => "/dashboard";
export const URLUserAccountCreate = (): string => "/user-accounts/create";
export const URLUserRecoveryRequest = (): string => "/recovery-request";

// routes for public
export const URLInvestigation = (): string => "/investigation";
export const URLSurgery = (): string => "/surgery";
export const URLVitals = (): string => "/vitals";
export const URLHts = (): string => "/hts";
export const URLOPD = (): string => "/medical-encounter";
export const URLIPDHistory = (): string => "/medical-encounter/ipd/history";
export const URLIPD = (): string => "/medical-encounter/ipd";
export const URLAntenatal = (): string => "/antenatal";

// routes for Antanatal (ANC)
export const URLAncInitialVisit = (): string => "/anc-initial-visit";
export const URLAncFollowUp = (): string => "/anc-follow-up";
export const URLAncInitialAlreadyOnArt = (): string =>
  "/anc-initial-already-on-art";
export const URLAncFirstIimeOnArt = (): string => "/anc-1st-time-on-art";
export const URLAncFollowUpPMTCT = (): string => "/anc-follow-up-pmtct";
